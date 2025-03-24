import SidebarInner from './sidebarInner';

export default function Sidebar() {
    return (
        <aside className="fixed bottom-0 z-10 hidden h-full w-72 bg-white shadow transition-[width] duration-300 ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto lg:block pt-20 lg:w-76">
            <SidebarInner />
        </aside>
    )
}
