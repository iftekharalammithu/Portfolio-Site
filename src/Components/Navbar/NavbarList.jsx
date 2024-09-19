import { Link, useLocation } from "react-router-dom";
import navItems from "../../Data/Nav-items";
import { Center } from "../Transition/Preloader/Preloader";
import { Dot } from "lucide-react";
import { useEffect } from "react";

function smoothScrollTo(element, duration = 1000) {
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}

export function NavbarList() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        smoothScrollTo(targetElement, 800);
      }
    }
  }, [location]);

  const items = navItems.slice(1).map(({ href, title }) => {
    const id = crypto.randomUUID();
    return (
      <li
        key={id}
        className="group transition-transform duration-450 ease-in-expo  hover:scale-150 p-4"
      >
        <Link to={href}>
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
