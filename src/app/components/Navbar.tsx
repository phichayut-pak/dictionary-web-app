"use client"
import Logo from "../svg/Logo";
import DropDownBtn from "./DropDownBtn";
import ThemeSwitch from "./ThemeSwitch";
import { useState, useEffect, useContext } from 'react'
import Link from "next/link";
import { FontContext } from "../context/FontContext";

export default function Navbar() {
    const { currentFont, setCurrentFont } = useContext(FontContext)


    return (
    <nav className="w-full flex justify-between items-center bg-white dark:bg-dark pt-12 pb-12">

        {/* Left-sided nav */}
        <div>
            <Link href="/">
                <Logo/>
            </Link>
        </div>

        {/* Right-sided nav */}
        <div className="flex items-center gap-x-5">
            <DropDownBtn currentFont={currentFont} setCurrentFont={setCurrentFont} />
            <div className="h-10 w-px bg-gray-200" />
            <ThemeSwitch></ThemeSwitch>
        </div>
    </nav>
    );

}
