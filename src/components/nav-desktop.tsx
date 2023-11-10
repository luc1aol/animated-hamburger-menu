import { routes } from "../routes/routes";

//Iterate the routes array with .map

  export const NavDesktop = () => {
    return (
        <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
          {routes.map((route) => {
            const { Icon, href, title } = route;
            return (
              // dynamically generate list items
              <li>
                <a
                  href={href}
                  className="flex items-center gap-1 hover:text-neutral-400 transition-all"
                >
                  <Icon />
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
    );
  };