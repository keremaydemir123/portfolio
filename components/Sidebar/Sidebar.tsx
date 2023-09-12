import SidebarNav from "@/components/Sidebar/SidebarNav";
import MyInfo from "@/components/Sidebar/MyInfo";
import MyDescription from "@/components/Sidebar/MyDescription";
import SocialIcons from "@/components/Sidebar/SocialIcons";
import Footer from "@/components/Footer";
import ResumeButton from "./ResumeButton";

function Sidebar() {
  return (
    <aside className="lg:block overflow-y-auto hidden relative flex-[1] h-full px-16 py-20">
      <nav className="text-start flex flex-col items-start h-full">
        <div className="flex items-start justify-between gap-2 slideIn w-full">
          <MyInfo />
          <div className="lg:block hidden"></div>
        </div>
        <MyDescription />
        <SidebarNav />
        <div className="mt-auto w-full">
          <ResumeButton />
          <br />
          <SocialIcons />
          <Footer />
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
