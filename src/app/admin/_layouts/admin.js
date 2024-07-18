'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import Loader from "@/app/admin/_layouts/loader";
import {useGLS, gsGet, StateProvider, lsSet} from "@/functions/gls";

import { Provider } from 'react-redux';
import {store, persist} from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
// export const revalidate = 200;


export default function Admin({children}) {
    useGLS();
    const pathname = usePathname();

    useEffect(()=>{
        // console.log("global=", global);
        window.addEventListener('beforeunload', (ev)=>{
            let d = new Date();
            let m = d.getMinutes();
            let s = d.getSeconds();
            let hms = d.getHours() + ":" + (m > 9 ? "" : "0") + m + ":" + (s > 9 ? "" : "0") + s;
            lsSet(false, "_set", hms, "__on__beforeunload__");
        });
    }, []);

    return (
        <>
            <AdmHeader />
            <section className={"admin-section"}>
                <AdmSidebar />
                <main className={"admin-main"}>
                        {/*<Provider store={store}>*/}
                        {/*    <PersistGate loading={null} persistor={persist}>*/}
                        {/*        {children}*/}
                        {/*    </PersistGate>*/}
                        {/*</Provider>*/}
                    {children}
                </main>
            </section>
            {gsGet("loading", false) ? <Loader/> : <></>}
        </>
    );
}