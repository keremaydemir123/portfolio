import Sidebar from "@/components/Sidebar/Sidebar";
import Mobile from "@/components/Sidebar/Mobile";
import AppProvider from "@/contexts/AppProvider";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <main className="min-h-screen h-full max-w-screen-xl mx-auto gap-4 px-6">
        <div className="flex gap-4 justify-between">
          <Sidebar />
          <div className="relative min-h-screen overflow-hidden lg:pt-20 py-8 md:px-4 px-2 md:flex-[2] w-full h-full mx-auto">
            <Mobile />
            <div className="prose">{children}</div>
          </div>
        </div>
      </main>
    </AppProvider>
  );
}

export default MainLayout;
