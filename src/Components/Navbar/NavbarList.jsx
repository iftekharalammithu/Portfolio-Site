import { Link } from "react-router-dom";
import navItems from "../../Data/Nav-items";
import { Center } from "../Transition/Preloader/Preloader";
import { Dot } from "lucide-react";

export function NavbarList() {
  const items = navItems.slice(1).map(({ href, title }) => {
    const id = crypto.randomUUID();
    return (
      <li
        key={id}
        className="group transition-transform duration-450 ease-in-expo  hover:scale-150 p-4"
      >
        <Link href={href}>
          <span className="text-base capitalize">{title}</span>
          <Center>
            <Dot className="scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100" />
          </Center>
        </Link>
      </li>
    );
  });

  return <ul className="flex items-center max-lg:hidden ">{items}</ul>;
}
