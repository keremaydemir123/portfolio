import MyInfo from "@/components/Sidebar/MyInfo";
import MobileNav from "@/components/MobileNav";

function Mobile() {
  return (
    <div className="prose lg:hidden border-b-2 border-solid border-base-200 mb-4 pb-4">
      <header className="flex items-center justify-between gap-4 z-0 w-full mb-4">
        <MyInfo mobile />
      </header>
      <MobileNav />
    </div>
  );
}

export default Mobile;
