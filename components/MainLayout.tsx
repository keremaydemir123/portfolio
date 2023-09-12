import Sidebar from "@/components/Sidebar/Sidebar";
import Mobile from "@/components/Sidebar/Mobile";
import AppProvider from "@/contexts/AppProvider";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <main className="flex md:flex-row flex-col min-h-screen max-w-screen-xl mx-auto gap-4">
        <Sidebar />
        <div className="relative overflow-hidden overflow-y-auto lg:pt-20 py-8 md:px-4 px-2 md:flex-[2] w-full h-full mx-auto">
          <Mobile />
          <div className="prose">{children}</div>
        </div>
      </main>
    </AppProvider>
  );
}

export default MainLayout;
