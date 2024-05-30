'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect, useState} from "react";
// export const revalidate = 200;

export default function AdmSidebar({isOpen}) {
    const pathname = usePathname();
    const myBoards = () => {
        let boards = ["dashboard", "users", "products"];
        return boards.map((board) => {
            return <a href={"/admin/" + board}>{board.charAt(0).toUpperCase() + board.slice(1)}</a>;
        })
    };
    return (
        <div className={"admin-sidebar"} style={isOpen ? {marginLeft: 0} : {marginLeft: "-250px"}}>
            {myBoards()}
        </div>
    );
}