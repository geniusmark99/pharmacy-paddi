import { useEffect } from "react";

interface ToastProps {
    message: string;
    type?: "success" | "error" | "info";
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); // Auto close after 3 seconds
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-md text-white text-sm transition-all duration-300 ${type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-blue-600"
                }`}
        >
            {message}
        </div>
    );
};

export default Toast;
