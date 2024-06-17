'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, lsSet, gsSet, gsGet} from "@/functions/gls";
// export const revalidate = 200;

export default function L1() {
    const pathname = usePathname();
    return (
        <div>
            <h1>ADMIN PAGE</h1>
            <button style={{backgroundColor: gsGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gsGet("btnColor", "yellow");
                        gsSet("btnColor", c === "yellow" ? "red" : "yellow");
                    }}
            >Press me</button>
        </div>
    );
}