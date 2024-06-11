import MobileNav from "./MobileNav";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto">
        {/* mobile nav */}
        <div className="xl:hidden absolute right-8 top-8">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
