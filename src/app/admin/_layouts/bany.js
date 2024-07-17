'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import {useGLS, gsGet} from "@/functions/gls";
import {useSelector} from "react-redux";
// export const revalidate = 200;

export default function Bany() {
    useGLS();
    // const val ="---";
    // const val = useSelector((store) => {
    //     return store.stReducer.val;
    // });
    const [c, setC] = useState(false);
    // console.log("BANY");
    useEffect(()=>{
        // dispatch({ type: "d_st/setUserData", payload: {"json": "mson"} });
        // console.log("useEffect ANY");
    }, []);
    return (
        <div style={{backgroundColor:c?"#0ff":"#999"}} onClick={(ev)=>{
            ev.stopPropagation();
            setC(!c);
        }}>BANY</div>
    );
}