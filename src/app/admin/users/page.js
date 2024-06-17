'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect} from "react";
import {gsGet, gsSet} from "@/functions/gls";
// export const revalidate = 200;

export default function Users() {
    const pathname = usePathname();

    return (
        <div>
            <h1>USERS PAGE</h1>
            <button style={{backgroundColor: gsGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gsGet("btnColor", "yellow");
                        gsSet("btnColor", c === "yellow" ? "#77f" : "yellow");
                    }}
            >Press me</button>
            <div style={{height: "150px", backgroundColor: gsGet("btnColor", "yellow"), marginTop: 25}}></div>
        </div>
    );
}