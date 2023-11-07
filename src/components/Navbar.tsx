import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between container mx-auto my-5">
      <div className="grow flex gap-5 items-center">
        <Link to="/" className="text-lg font-semibold text-primary">
          <span className="text-custom">/</span>cipher
        </Link>
        <Link
          to="/about"
          className="ml-10 underline decoration-custom hover:no-underline"
        >
          About the project
        </Link>
        <ModeToggle />
      </div>

      <div className="flex gap-5 grow justify-end">
        <a
          className={buttonVariants({ variant: "outline", size: "icon" })}
          href="https://twitter.com/inclinedadarsh"
        >
          <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </a>
        <a
          className={buttonVariants({ size: "icon" })}
          href="https://github.com/inclinedadarsh/ciphered"
        >
          <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
