import Landing from "@/components/Landing";
import { auth, SignedIn, SignedOut } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  let href = userId ? "/journal" : "/new-user";

  return (
    <>
      <SignedOut>
        <div className="h-screen">
          <Landing />
        </div>
      </SignedOut>
      <SignedIn>{redirect("/journal")}</SignedIn>
    </>
  );
}
