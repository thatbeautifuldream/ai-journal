import { UserButton } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <UserButton />
    </div>
  );
}

export default Page;
