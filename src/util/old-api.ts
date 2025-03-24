// import axios from "../../lib/axios";
// import { useEffect } from 'react'
// import useSWR from 'swr'
// import { useParams, useRouter } from 'next/navigation'



// const csrf = () => axios.get('/sanctum/csrf-cookie')


// export const adminLogin = async (email: string, password: string) => {
//     await csrf()
//     try {
//         const response = await axios.post(`/api/admin/login`, {
//             email,
//             password,
//         });
//         return response.data;
//     } catch (error: any) {
//         throw error.response ? error.response.data.message : "Login failed";
//     }
// };


// export const userLogin = async (email: string, password: string) => {
//     await csrf()
//     try {
//         const response = await axios.post('/api/v1/login', {
//             email,
//             password,
//         });
//         return response.data;
//     } catch (error: any) {
//         console.error('Login Error:', error.response?.data || error.message);
//         return null;
//     }
// };

// export const userRegister = async (setErrors, data: {
//     firstname: string;
//     lastname: string;
//     email: string;
//     phone_number: string;
//     password: string;
//     password_confirmation: string;
// }) => {
//     await csrf()

//     setErrors([])

//     try {
//         const response = await axios.post("/api/v1/register", data, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         return response.data;
//     } catch (error: any) {
//         return error.response?.data || { message: "Registration failed" };
//     }
// };

// export const forgotPassword = async (email: string) => {
//     try {
//         const response = await axios.post(`/admin/forgot-password`, {
//             email,
//         });
//         return response.data;
//     } catch (error: any) {
//         throw error.response ? error.response.data.message : "Failed to send reset email";
//     }
// };





// // Login User
// export const loginUser = async (credentials: any) => {
//     try {
//         const response = await axios.post("/api/login", credentials);
//         return response.data;
//     } catch (error: any) {
//         return error.response?.data || { message: "Invalid login details" };
//     }
// };

// // Logout User
// export const logoutUser = async () => {
//     try {
//         await axios.post("/api/'logout");
//         return { message: "Logged out successfully" };
//     } catch (error: any) {
//         return error.response?.data || { message: "Logout failed" };
//     }
// };



// // export const fetchAdminProfile = async () => {
// //     try {
// //         const response = await axios.get("/api/admin/profile");
// //         return response.data.admin;
// //     } catch (error) {
// //         console.error("Error fetching admin profile:", error);
// //         return null;
// //     }
// // };

// export const fetchAdminProfile = async (token: string) => {
//     try {
//         const response = await axios.get("/api/admin/profile", {
//             headers: { Authorization: `Bearer ${token}` },
//         });
//         return response.data.admin;
//     } catch (error) {
//         console.error("Error fetching admin profile:", error);
//         return null;
//     }
// };