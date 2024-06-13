'use client'

import {useEffect, useState} from "react";
import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, varGet, varSet, useGLS} from "@/functions/ls";
import Any from "@/app/admin/_layouts/any";

export default function Dashboard() {
    const pathname = usePathname();

    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <div>{lsGet("_set", true, "sidebarOpen") ? "Սայդբառը բացա" : "Սայդբառը փագա"}</div>
            <button style={{backgroundColor: varGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = varGet("btnColor", "yellow");
                        varSet("btnColor", c === "yellow" ? "red" : "yellow");
                    }}
            >Press me</button>
            <Any/>
        </div>
    );
}