'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
// import {lsGet, lsSet} from "@/functions/ls";
// export const revalidate = 200;


export default function Admin({children}) {
    const [initialised, setInitialised] = useState(false);

    const [state, setState] = useState(false);
    const LsContext = createContext(state);

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
                    <LsContext.Provider value={state}>
                        {children}
                    </LsContext.Provider>
                </main>
            </section>
        </>:<div style={{fontSize:"50px", color:"#161c2d"}} className={"d-flex align-items-center justify-content-center flex-1"}>Loading...</div>
    );
}