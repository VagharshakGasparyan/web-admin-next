'use client'

import {useEffect, useState} from "react";
import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, gsGet, gsSet, useGLS} from "@/functions/gls";


export default function Dashboard() {
    const pathname = usePathname();

    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <div>{lsGet("_set", true, "sidebarOpen") ? "Սայդբառը բացա" : "Սայդբառը փագա"}</div>
            <button style={{backgroundColor: gsGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gsGet("btnColor", "yellow");
                        gsSet("btnColor", c === "yellow" ? "#77f" : "yellow");
                    }}
            >Press me</button>
        </div>
    );
}