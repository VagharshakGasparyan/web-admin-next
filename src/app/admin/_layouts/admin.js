'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import {lsGet, lsSet} from "@/functions/ls";
// export const revalidate = 200;


export default function Admin({children}) {
    // console.log("****************************");
    // const [sidebarOpen, setSidebarOpen] = useState(lsGet("_set", true, "sidebarOpen"));
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [initialised, setInitialised] = useState(false);

    useEffect(()=>{
        setSidebarOpen(lsGet("_set", true, "sidebarOpen"));
        setInitialised(true);
    }, []);

    const toggleSidebar = ()=>{
        lsSet("_set", !sidebarOpen, "sidebarOpen");
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
        initialised ?
        <>
            <AdmHeader toggleSidebar={toggleSidebar} />
            <section className={"admin-section"}>
                <AdmSidebar isOpen={sidebarOpen} />
                <main className={"admin-main"}>
                    {children}
                </main>
            </section>
        </>:<div style={{fontSize:"50px", color:"#161c2d"}} className={"d-flex align-items-center justify-content-center flex-1"}>Loading...</div>
    );
}