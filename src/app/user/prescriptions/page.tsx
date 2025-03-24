import { Sidebar } from "@/components/users";

export default function PrescriptionsPage() {
    const prescriptions = [
        { id: 1, name: "Painkiller", status: "Approved" },
        { id: 2, name: "Cough Syrup", status: "Pending" },
    ];

    return (
        <div className="flex">
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Prescriptions</h1>

                <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-2 px-3">Medicine</th>
                                <th className="text-left py-2 px-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prescriptions.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-2 px-3">{item.name}</td>
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
