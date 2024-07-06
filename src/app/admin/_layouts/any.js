'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import {useGLS, gsGet} from "@/functions/gls";
import {useSelector} from "react-redux";
// export const revalidate = 200;


export default function Any() {
    // const val ="---";
    // const val = useSelector((store) => {
    //     return store.stReducer.val;
    // });
    console.log("ANY");
    useEffect(()=>{
        // dispatch({ type: "d_st/setUserData", payload: {"json": "mson"} });
        console.log("useEffect ANY");
    }, []);
    return (
        <div>ANY{gsGet("btnColor", "yellow")} {"val"}</div>
    );
}