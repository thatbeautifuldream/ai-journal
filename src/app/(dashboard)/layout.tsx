import { UserButton } from "@clerk/nextjs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full bg-gray-100 border-r border-black/10">
        Mood
      </aside>
      <UserButton />
    </div>
  );
};

export default Layout;
