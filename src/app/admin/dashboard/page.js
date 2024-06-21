'use client'

import {useEffect, useState} from "react";
import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, gsGet, gsSet, useGLS} from "@/functions/gls";
import Loader from "@/app/admin/_layouts/loader";


export default function Dashboard() {
    const pathname = usePathname();
    const onLoading = ()=>{
        gsSet(true, "loading", true);
        setTimeout(()=>{
            gsSet(true, "loading", false);
        }, 10000);
    }

    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <div>{lsGet("_set", true, "sidebarOpen") ? "Սայդբառը բացա" : "Սայդբառը փագա"}</div>
            <button style={{backgroundColor: gsGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gsGet("btnColor", "yellow");
                        gsSet(true, "btnColor", c === "yellow" ? "#77f" : "yellow");
                    }}
            >Press me</button>
            <div style={{marginTop: "10px"}}><button className={'btn'} onClick={onLoading}>{gsGet("loading", false) ? <Loader type={"sm"}/> : <></>} Միացնել լոադերը 10 վայրկյանով</button></div>
        </div>
    );
}