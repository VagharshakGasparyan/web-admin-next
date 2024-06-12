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
    const [initialised, setInitialised] = useState(false);

    const [state, setState] = useState(false);


    useEffect(()=>{
        setInitialised(true);
    }, []);

    useEffect(()=>{
        global.updateState = ()=>{
            setState(!state);
        }
    },[state]);

    const pathname = usePathname();

    return (
        initialised ?
        <>
            <AdmHeader />
            <section className={"admin-section"}>
                <AdmSidebar />
                <main className={"admin-main"}>
                    {children}
                </main>
            </section>
        </>:<div style={{fontSize:"50px", color:"#161c2d"}} className={"d-flex align-items-center justify-content-center flex-1"}>Loading...</div>
    );
}