'use client'
import ProtectedRoute from '@/components/ProtectedRoute';
import Container from '@/components/store/container';


const AdminShop: React.FC = () => {
    return (
        <Container>
            <div className='mx-2 lg:mx-4'>
                <div>
                    Admin Shop
                </div>
            </div>
        </Container>
    );
};

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <AdminShop />
        </ProtectedRoute>
    );
}
