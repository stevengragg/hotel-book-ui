import SearchBox from "../custom/SearchBox";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="pt-24 pb-12 xl:py-0 xl:h-[1087px] bg-hero xl:bg-hero2 bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-center xl:justify-start">
        <SearchBox />
      </div>
    </div>
  );
};

export default Hero;
