import Sidebar from "@/components/Sidebar/Sidebar";
import Mobile from "@/components/Sidebar/Mobile";
import AppProvider from "@/contexts/AppProvider";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <main className="flex md:flex-row flex-col px-4 h-screen">
        <Sidebar />
        <div className="relative md:flex-[8] w-full overflow-y-auto overflow-x-hidden h-full py-8 px-4">
          <Mobile />
          {children}
        </div>
      </main>
    </AppProvider>
  );
}

export default MainLayout;
