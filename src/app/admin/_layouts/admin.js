'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import Loader from "@/app/admin/_layouts/loader";
import {useGLS, gsGet, StateProvider} from "@/functions/gls";

import { Provider } from 'react-redux';
import {store, persist} from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
// export const revalidate = 200;


export default function Admin({children}) {

    // const GLSContext = useGLS();

    const pathname = usePathname();


    return (
        <StateProvider>
            <AdmHeader />
            <section className={"admin-section"}>
                <AdmSidebar />
                <main className={"admin-main"}>
                    {/*<GLSContext.Provider value={"state"}>*/}

                        {/*<Provider store={store}>*/}
                        {/*    <PersistGate loading={null} persistor={persist}>*/}
                        {/*        {children}*/}
                        {/*    </PersistGate>*/}
                        {/*</Provider>*/}

                    {/*    /!*{children}*!/*/}
                    {/*</GLSContext.Provider>*/}
                    {children}
                </main>
            </section>
            {gsGet("loading", false) ? <Loader/> : <></>}
        </StateProvider>
    );
}