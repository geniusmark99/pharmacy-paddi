import React from 'react'
import { Sidebar } from '@/components/users'
import { div } from 'framer-motion/client'
import UserProtectedRoute from '@/components/UserProtectedRoute';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ShoppingBag, Users, FileText, DollarSign } from "lucide-react";

function UserDashboard() {
    return (
        <div className="space-y-6  p-4">
            <h1 className="text-2xl font-bold text-gray-800 mx-2 mt-2">Dashboard</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardHeader>
                        <ShoppingBag className="text-blue-500" size={30} />
                        <CardTitle>Total Orders</CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl font-bold">1,245</CardContent>
                </Card>


                <Card>
                    <CardHeader>
                        <Users className="text-green-500" size={30} />
                        <CardTitle>Users</CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl font-bold">567</CardContent>
                </Card>



                <Card>
                    <CardHeader>
                        <FileText className="text-yellow-500" size={30} />
                        <CardTitle>Prescriptions</CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl font-bold">312</CardContent>
                </Card>


                <Card>
                    <CardHeader>
                        <DollarSign className="text-red-500" size={30} />
                        <CardTitle>Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl font-bold">$12,450</CardContent>
                </Card>

            </div>
        </div>
    )
}



export default function DashboardPage() {
    return (
        <UserProtectedRoute>
            <UserDashboard />
        </UserProtectedRoute>
    );
}
