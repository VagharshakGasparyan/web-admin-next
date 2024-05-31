'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
// export const revalidate = 200;

export default function Admin({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = ()=>{
        setSidebarOpen(!sidebarOpen);
    };
    const pathname = usePathname();
    const myBoards = () => {
        let boards = ["dashboard", "users", "products"];
        return boards.map((board) => {
            return <a href={"/admin/" + board}>{board.charAt(0).toUpperCase() + board.slice(1)}</a>;
        })
    };
    return (
        <>
            <AdmHeader toggleSidebar={toggleSidebar} />
            <section className={"admin-section"}>
                <AdmSidebar isOpen={sidebarOpen} />
                <main className={"admin-main"}>
                    {children}
                </main>
            </section>
        </>
    );
}