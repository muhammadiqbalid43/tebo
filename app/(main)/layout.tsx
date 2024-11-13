import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./session-provider";
import Navbar from "./navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <>
      <SessionProvider value={session}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="mx-auto max-w-7xl">{children}</div>
        </div>
      </SessionProvider>
    </>
  );
}
