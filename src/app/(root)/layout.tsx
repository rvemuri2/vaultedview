import Sidebar from "/src/components/ui/Sidebar";
import MobileNav from "/src/components/ui/MobileNav";
import Image from "next/image";
import Icon from "/public/icons/logo.svg";
import { getLoggedInUser } from "/lib/actions/user.actions.ts";
import { redirect } from "next/navigation";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect("/sign-in");
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={Icon} width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
