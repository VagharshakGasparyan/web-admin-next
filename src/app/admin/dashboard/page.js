'use client'

import {useEffect, useState} from "react";
import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, gsGet, gsSet, useGLS} from "@/functions/gls";
import {loaderOn, loaderOff} from "@/functions/f";
import Loader from "@/app/admin/_layouts/loader";


export default function Dashboard() {
    const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;
    console.log('My Application Version', process.env.NEXT_PUBLIC_BASE_API_URL);
    useEffect(()=>{
        console.log("process.env=", base_url);
    }, []);
    const pathname = usePathname();
    const onLoading = ()=>{
        loaderOn();
        setTimeout(()=>{
            loaderOff();
        }, 10000);
    }

    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <div>{base_url}</div>
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