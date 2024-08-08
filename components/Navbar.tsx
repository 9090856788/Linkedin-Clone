import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import MenuItem from "./MenuItem";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white border-2 border-grey-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-2">
        {/* Logo & Search Box */}
        <div className="flex items-center gap-2">
          <Image src={"/Linkedin.png"} alt="Logo" width={155} height={155} />
          <div className="md:block hidden">
            <SearchInput />
          </div>
        </div>

        {/* Menu item & Profile */}
        <div className="flex items-center flex-row gap-5">
          <div className="md:block hidden">
            <MenuItem />
          </div>

          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button className="rounded-full" variant={"secondary"}>
                <SignInButton />
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
