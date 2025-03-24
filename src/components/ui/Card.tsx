import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">{children}</div>
    );
}

export function CardHeader({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center gap-3 mb-2">{children}</div>
    );
}

export function CardTitle({ children }: { children: ReactNode }) {
    return (
        <h3 className="text-lg font-semibold text-gray-800">{children}</h3>
    );
}

export function CardContent({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={className}>{children}</div>
    );
}
