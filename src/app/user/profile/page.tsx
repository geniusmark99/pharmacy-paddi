"use client";
import { useState } from "react";
import { Button } from '@/components/users'


export default function ProfilePage() {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+123456789",
    });

    return (
        <div className="flex">
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Profile</h1>

                <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            value={user.name}
                            className="w-full border px-3 py-2 rounded-md mt-1"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium">Email</label>
                        <input
                            type="email"
                            value={user.email}
                            className="w-full border px-3 py-2 rounded-md mt-1"
                            disabled
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium">Phone</label>
                        <input
                            type="text"
                            value={user.phone}
                            className="w-full border px-3 py-2 rounded-md mt-1"
                        />
                    </div>

                    <Button>Update Profile</Button>
                </div>
            </div>
        </div>
    );
}
