import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto my-5">
      <div className="flex gap-5 items-center">
        <h1 className="text-lg font-semibold text-primary">
          <span className="text-custom">/</span>cipher
        </h1>
        <ModeToggle />
      </div>
      <div className="flex gap-5">
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
