'use client'
import ProtectedRoute from '@/components/ProtectedRoute';
import Container from '@/components/store/container';


const AdminTransaction: React.FC = () => {
    return (
        <Container>
            <div className='mx-2 lg:mx-4'>
                <div>
                    Admin Transactions
                </div>
            </div>
        </Container>
    );
};

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <AdminTransaction />
        </ProtectedRoute>
    );
}
