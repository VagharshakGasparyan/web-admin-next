'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, lsSet, varSet, varGet} from "@/functions/ls";
// export const revalidate = 200;

export default function L1() {
    const pathname = usePathname();
    return (
        <div>
            <h1>ADMIN PAGE</h1>
            <button style={{backgroundColor: varGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = varGet("btnColor", "yellow");
                        varSet("btnColor", c === "yellow" ? "red" : "yellow");
                    }}
            >Press me</button>
        </div>
    );
}