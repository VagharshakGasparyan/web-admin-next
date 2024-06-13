'use client'

import {useEffect, useState} from "react";
import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, varGet, varSet} from "@/functions/ls";
// export const revalidate = 200;

export default function Dashboard() {
    const pathname = usePathname();

    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <button style={{backgroundColor: varGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = varGet("btnColor", "yellow");
                        varSet("btnColor", c === "yellow" ? "red" : "yellow");
                    }}
            >Press me</button>
        </div>
    );
}