'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect} from "react";
import {GLS} from "@/functions/gls";
// export const revalidate = 200;

export default function Users() {
    const gls = GLS();
    const pathname = usePathname();

    return (
        <div>
            <h1>USERS PAGE</h1>
            <button style={{backgroundColor: gls.g.get(["btnColor"], "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gls.g.get(["btnColor"], "yellow");
                        gls.g.set(true, ["btnColor"], c === "yellow" ? "#77f" : "yellow");
                    }}
            >Press me</button>
            <div style={{height: "150px", backgroundColor: gls.g.get(["btnColor"], "yellow"), marginTop: 25}}></div>
        </div>
    );
}