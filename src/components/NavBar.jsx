"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png"
import { authClient, signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {

    const { data } = useSession()

    const user = data?.user



    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-end">
                    <Image
                        src={Logo}
                        alt="logo"
                        loading="eager"
                        width={300}
                        height={30}
                        className="w-45 object-cover"
                    />
                </div>

                <ul className="flex items-center gap-15 text-xl font-semibold">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Products</Link>
                    </li>
                    <li>
                        <Link href={"/"}>My Profile</Link>
                    </li>
                </ul>

                <div className="flex gap-4">

                    {
                        user ?
                            <Link href={`/`}
                                onClick={() => signOut()}
                                className='bg-blue-600 text-white font-bold py-2 w-25 block text-center rounded-3xl cursor-pointer hover:bg-blue-500 hover:text-base-200'>
                                Logout
                            </Link>
                            :
                            <Link

                                href={`/login`}
                                className='bg-blue-600 text-white font-bold py-2 w-25 block text-center rounded-3xl cursor-pointer hover:bg-blue-500 hover:text-base-200'>
                                Login
                            </Link>
                    }

                </div>
            </nav>
        </div>
    );
};

export default Navbar;