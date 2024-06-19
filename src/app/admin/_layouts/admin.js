'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import Loader from "@/app/admin/_layouts/loader";
import {useGLS, gsGet} from "@/functions/gls";
// export const revalidate = 200;


export default function Admin({children}) {
    const [initialised, setInitialised] = useState(false);

    const GLSContext = useGLS();

    useEffect(()=>{
        setInitialised(true);
    }, []);

    const pathname = usePathname();

    return (
        initialised ?
        <>
            <AdmHeader />
            <section className={"admin-section"}>
                <AdmSidebar />
                <main className={"admin-main"}>
                    <GLSContext.Provider value={"state"}>
                        {children}
                    </GLSContext.Provider>
                </main>
            </section>
            {gsGet("loading", false) ? <Loader/> : <></>}
        </>:<Loader/>
    );
}