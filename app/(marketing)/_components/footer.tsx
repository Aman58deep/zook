import { Button } from "@/components/ui/button";

import { Logo } from "./logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm" asChild>
          <Link href="https://www.fiverr.com/anandeepsingh58?up_rollout=true">
            About me
          </Link>
        </Button>
      </div>
    </div>
  );
};
