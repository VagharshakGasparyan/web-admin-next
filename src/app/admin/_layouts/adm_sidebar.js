'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect, useState} from "react";
// export const revalidate = 200;

export default function AdmSidebar({isOpen}) {
    const pathname = usePathname();
    console.log(pathname);
    const myBoards = () => {
        let boards = ["dashboard", "users", "products"];
        return boards.map((board) => {
            return <a className={"la la-home"} href={"/admin/" + board}>{board.charAt(0).toUpperCase() + board.slice(1)}</a>;
        })
    };
    return (
        <div className={"admin-sidebar"} style={isOpen ? {marginLeft: 0} : {marginLeft: "-250px"}}>
            <a className={"la la-home " + (pathname.startsWith("/admin/dashboard") ? "selected" : "")} href={"/admin/dashboard"}>Dashboard</a>
            <a className={"la la-users "} href={"/admin/users"}>Users</a>
            <a className={"la la-cog "} href={"/admin/settings"}>Settings</a>
            {/*{myBoards()}*/}
        </div>
    );
}