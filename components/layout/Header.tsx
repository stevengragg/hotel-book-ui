import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Button } from "../ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed  w-full py-8 xl:py-10">
      <div className="container mx-auto">
        {/* logo, desktop nav, btn */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white">HotelBook</h1>
          </Link>
          {/* nav and btn */}
          <div className="hidden xl:flex">
            <div className="flex items-center gap-x-12">
              <Nav
                containerStyles="flex items-center justify-between"
                listStyles="flex gap-x-12  text-secondary"
              />
              <Button variant="transparent" className="px-10 h-[58px]">
                {" "}
                Login{" "}
              </Button>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden absolute right-8 top-8">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
