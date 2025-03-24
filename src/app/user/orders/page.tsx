
export default function OrdersPage() {
    const orders = [
        { id: 1, medicine: "Aspirin", status: "Delivered" },
        { id: 2, medicine: "Vitamin C", status: "Shipped" },
    ];

    return (
        <div className="flex">
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Orders</h1>

                <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-2 px-3">Medicine</th>
                                <th className="text-left py-2 px-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-2 px-3">{item.medicine}</td>
                                    <td className="py-2 px-3">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
