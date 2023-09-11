import Avatar from "@/components/Sidebar/Avatar";
import SidebarNav from "@/components/Sidebar/SidebarNav";
import MyInfo from "@/components/Sidebar/MyInfo";
import MyDescription from "@/components/Sidebar/MyDescription";
import SocialIcons from "@/components/Sidebar/SocialIcons";
import Footer from "@/components/Footer";

function Sidebar() {
  return (
    <aside className="lg:block overflow-y-auto hidden border-r border-base-300 relative flex-[3] h-full pr-4">
      <nav className="text-start flex flex-col items-start h-full py-4">
        <div className="flex items-start justify-between gap-2 slideIn w-full mt-4">
          <MyInfo />
          <div className="lg:block hidden"></div>
        </div>
        <MyDescription />
        <SidebarNav />
        <div className="mt-auto w-full">
          <SocialIcons />
          <Footer />
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
