'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {GLS} from "@/functions/gls";
// export const revalidate = 200;

export default function L1() {
    const gls = GLS();
    const pathname = usePathname();
    return (
        <div>
            <h1>ADMIN PAGE</h1>
            <button style={{backgroundColor: gls.g.get("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gls.g.get("btnColor", "yellow");
                        gls.g.set(true, "btnColor", c === "yellow" ? "red" : "yellow");
                    }}
            >Press me</button>
        </div>
    );
}