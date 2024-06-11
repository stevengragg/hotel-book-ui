"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-between h-full p-12">
          <Link href={"/"}>
            <Image
              src="/footer/logo.png"
              width={98}
              height={46}
              alt="Hotel Book"
              priority
            />
          </Link>
          <Nav
            containerStyles="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          />

          <Socials containerStyles="flex gap-x-4 text-secondary" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
