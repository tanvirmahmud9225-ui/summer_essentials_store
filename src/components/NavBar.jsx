"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png"

const Navbar = () => {



    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-end">
                    <Image
                        src={Logo}
                        alt="logo"
                        loading="eager"
                        width={200}
                        height={30}
                        className="w-35 object-cover"
                    />

                    <h3 className="font-black text-2xl">SunCart</h3>
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

                    <Button className={'text-xl px-8 py-5 '}>Login</Button>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;