'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {GLS} from "@/functions/gls";
import {MagicBox} from "@/components/magic_box";
const {useState, useEffect, useRef} = require("react");
// export const revalidate = 200;

export default function L1() {
    const [val, setVal] = useState(true);
    const gls = GLS();
    const pathname = usePathname();

    let closeMagicBox = (f)=>{
        closeMagicBox = f;
    }


    return (
        <div>
            <h1>ADMIN PAGE</h1>
            <button style={{backgroundColor: gls.g.get(["btnColor"], "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gls.g.get(["btnColor"], "yellow");
                        gls.g.set(true, ["btnColor"], c === "yellow" ? "red" : "yellow");
                    }}
            >Press me</button>
            <MagicBox width={300} closeMagicBox={closeMagicBox} />
            <div style={{marginTop: "10px"}}>
                <button onClick={()=>{
                    closeMagicBox();
            }}>go to the starting position</button>
            </div>
        </div>
    );
}