import React from 'react';
import Link from "next/link";

const AppNavbar = () => {
    return (
        <div>
           <Link href={"/"}>Home</Link> <br/>
            <Link href={"/product"}>Product</Link><br/>
            <Link href={"/about"}>About</Link><br/>
            <Link href={"/contact"}>Contact</Link>
        </div>
    );
};

export default AppNavbar;