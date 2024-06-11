import Link from "next/link";

interface CustomLink {
  path: string;
  pathname: string;
}

const links: CustomLink[] = [
  {
    path: "/",
    pathname: "Home",
  },
  {
    path: "/",
    pathname: "Find Hotel",
  },
  {
    path: "/",
    pathname: "About us",
  },
  {
    path: "/",
    pathname: "Contact us",
  },
] as const;

type Props = {
  containerStyles: string;
  listStyles: string;
};

const Nav = ({ containerStyles, listStyles }: Props) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link, idx: number) => {
          return (
            <li key={idx}>
              <Link href={link.path}>{link.pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
