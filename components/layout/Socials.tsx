import Link from "next/link";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
type Props = {
  containerStyles: string;
};

const Socials = ({ containerStyles }: Props) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="#">
          <InstagramLogoIcon />
        </Link>
      </li>
      <li>
        <Link href="#">
          <TwitterLogoIcon />
        </Link>
      </li>
      <li>
        <Link href="#">
          <VercelLogoIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
