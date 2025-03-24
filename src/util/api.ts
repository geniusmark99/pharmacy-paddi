import axios from "../../lib/axios";
import { useEffect } from 'react'
import useSWR from 'swr'
import { useParams, useRouter } from 'next/navigation'
import { AxiosError } from 'axios'

interface User {
    id: number
    firstname: string
    lastname: string
    email: string
    email_verified_at?: string | null
}

interface AuthProps {
    middleware?: 'auth' | 'guest'
    redirectIfAuthenticated?: string
}

interface SetErrors {
    (errors: Record<string, string[]>): void
}

interface SetStatus {
    (status: string | null): void
}

interface RegisterProps {
    firstname: string
    lastname: string
    email: string
    password: string
    password_confirmation: string
    setErrors: SetErrors
}

interface LoginProps {
    email: string
    password: string
    setErrors: SetErrors
    setStatus: SetStatus
}

interface ForgotPasswordProps {
    email: string
    setErrors: SetErrors
    setStatus: SetStatus
}

interface ResetPasswordProps {
    password: string
    password_confirmation: string
    setErrors: SetErrors
    setStatus: SetStatus
}

interface ResendEmailVerificationProps {
    setStatus: SetStatus
}

export const useAuth = ({
    middleware,
    redirectIfAuthenticated,
}: AuthProps = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios.get<User>('/api/user', {
            headers: {
                'Bearer Token': localStorage.getItem('token')
            }
        })
            .then(res => res.data)
            .catch((error: AxiosError) => {
                if (error.response?.status !== 409) throw error
                router.push('/verify-email')
            })
    );



    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }: RegisterProps) => {
        await csrf()
        setErrors({})

        try {
            await axios.post('/api/v1/register', props)
            await mutate()
        } catch (error: any) {
            if (error.response?.status !== 422) throw error
            setErrors(error.response.data.errors)
        }
    }

    const login = async ({ setErrors, setStatus, ...props }: LoginProps) => {
        await csrf()
        setErrors({})
        setStatus(null)

        try {
            await axios.post('/api/v1/login', props)
            await mutate()
        } catch (error: any) {
            if (error.response?.status !== 422) throw error
            setErrors(error.response.data.errors)
        }
    }

    const forgotPassword = async ({ setErrors, setStatus, email }: ForgotPasswordProps) => {
        await csrf()
        setErrors({})
        setStatus(null)

        try {
            const response = await axios.post('/forgot-password', { email })
            setStatus(response.data.status)
        } catch (error: any) {
            if (error.response?.status !== 422) throw error
            setErrors(error.response.data.errors)
        }
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }: ResetPasswordProps) => {
        await csrf()
        setErrors({})
        setStatus(null)

        try {
            const response = await axios.post('/reset-password', {
                token: params.token,
                ...props,
            })
            router.push('/login?reset=' + btoa(response.data.status))
        } catch (error: any) {
            if (error.response?.status !== 422) throw error
            setErrors(error.response.data.errors)
        }
    }

    const resendEmailVerification = async ({ setStatus }: ResendEmailVerificationProps) => {
        const response = await axios.post('/email/verification-notification')
        setStatus(response.data.status)
    }

    const logout = async () => {
        if (!error) {
            await axios.post('/logout')
            await mutate()
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated)
        }

        if (middleware === 'auth' && !user?.email_verified_at) {
            router.push('/verify-email')
        }

        if (window.location.pathname === '/verify-email' && user?.email_verified_at) {
            router.push(redirectIfAuthenticated || '/dashboard')
        }

        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
