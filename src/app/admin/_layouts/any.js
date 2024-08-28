'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import {GLS} from "@/functions/gls";
import {useSelector} from "react-redux";
import Bany from "@/app/admin/_layouts/bany";
// export const revalidate = 200;


export default function Any() {
    const gls = GLS();
    // const val ="---";
    // const val = useSelector((store) => {
    //     return store.stReducer.val;
    // });
    const [c, setC] = useState(false);
    // console.log("ANY");
    useEffect(()=>{
        // dispatch({ type: "d_st/setUserData", payload: {"json": "mson"} });
        // console.log("useEffect ANY");
    }, []);
    return (
        <div style={{backgroundColor: c ? "#0ff" : "#999", userSelect:"none"}} onClick={() => {
            setC(!c)
        }}>ANY {gls.g.get(["btnColor"], "yellow")}
            <br/><br/>
            <Bany></Bany>
            <br/><br/>
        </div>
    );
}