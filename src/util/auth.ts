export const isAuthenticated = (): boolean => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('admin_token');
        return !!token;
    }
    return false;
};


export const logout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('admin_token'); // Remove token
        window.location.href = '/admin/login'; // Redirect to login page
    }
};


export const isUserAuthenticated = (): boolean => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('user_agent_token');
        return !!token;
    }
    return false;
};

export const userLogout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user_agent_token'); // Remove token
        window.location.href = '/login'; // Redirect to login page
    }
};

