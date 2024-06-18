import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async() => {

    const user = await currentUser();
  return (
    <nav className="container mx-auto px-4 py-8 flex justify-between">
      <Link href="/">
        <p className="ttext-2xl font-bold">
          NETXJS<span className="text-rose-600">tHINGS</span>
        </p>
      </Link>
      <ul className="flex gap-3 text-sm capitalize">
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>

        <li>
          <Link href="/project">
            Project
          </Link>
        </li>
        <li>
          <Link href="/profile">
            Profile
          </Link>
        </li>


      </ul> 
      <div className="flex justify-center items-center gap-1">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <p> 
      {user?.firstName ? user.firstName : "Welcome"}
      </p>

      </div>
    </nav>
  );
};
export default Navbar;
