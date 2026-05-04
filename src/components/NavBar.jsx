"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png"
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

    const { data } = useSession()
    const user = data?.user

    return (
        <div className="border-b px-2">
            <nav className=" md:flex mb-3 justify-between items-center py-3 max-w-7xl mx-auto w-full">

                <div className="flex items-center lg:justify-baseline justify-center gap-3">
                    <Link href={'/'}>
                        <Image
                            src={Logo}
                            alt="logo"
                            loading="eager"
                            width={300}
                            height={30}
                            className="w-45 object-cover"
                        />
                    </Link>
                </div>



                <div className="md:flex items-center gap-4">
                    <ul className="lg flex mb-3 flex-wrap justify-center items-center gap-10 md:gap-15 mr-10 text-xl font-semibold">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li>
                            <Link href={"/myprofile"}>My Profile</Link>
                        </li>
                    </ul>

                    <div className="flex justify-center items-center">
                        {
                            user ?
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <Avatar.Image alt="John Doe" src={user.image} />
                                        <Avatar.Fallback>TM</Avatar.Fallback>
                                    </Avatar>

                                    <Link href={`/`}
                                        onClick={() => signOut()}
                                        className='bg-blue-600 text-white font-bold py-2 w-25 block text-center rounded-3xl cursor-pointer hover:bg-blue-500 hover:text-base-200'>
                                        Logout
                                    </Link>
                                </div>
                                :
                                <Link

                                    href={`/login`}
                                    className='bg-blue-600 text-white font-bold py-2 w-25 block text-center rounded-3xl cursor-pointer hover:bg-blue-500 hover:text-base-200'>
                                    Login
                                </Link>
                        }
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;