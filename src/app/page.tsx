import Landing from "@/components/Landing";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <SignedOut>
        <div className="h-screen">
          <Landing />
        </div>
      </SignedOut>
      <SignedIn>{redirect("/dashboard")}</SignedIn>
    </>
  );
}
