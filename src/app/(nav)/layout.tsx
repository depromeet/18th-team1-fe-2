import type { ReactNode } from "react";

import { NavBar } from "@/widgets/nav-bar";

type NavLayoutProps = {
  children: ReactNode;
};

const NavLayout = ({ children }: NavLayoutProps): React.ReactElement => {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <main className="flex-1 pb-24">{children}</main>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <NavBar />
      </div>
    </div>
  );
};

export default NavLayout;
