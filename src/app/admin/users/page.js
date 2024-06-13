'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect} from "react";
import {varGet, varSet} from "@/functions/ls";
// export const revalidate = 200;

export default function Users() {
    const pathname = usePathname();

    return (
        <div>
            <h1>USERS PAGE</h1>
            <button style={{backgroundColor: varGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = varGet("btnColor", "yellow");
                        varSet("btnColor", c === "yellow" ? "#77f" : "yellow");
                    }}
            >Press me</button>
            <div style={{height: "150px", backgroundColor: varGet("btnColor", "yellow"), marginTop: 25}}></div>
        </div>
    );
}