
// import styles from "../page.module.css";
'use client'
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function Products() {
    const router = useRouter();
    const pathname = usePathname();
    const s_params = useSearchParams();
    const params = useParams();
    let [a, setA] = useState(1);
    return (
        <main  className={"main-home"}>
            <h1>PRODUCTS--{params.id}</h1>
            {/*<a href={"/"}>get HOME</a>*/}
            <div>{a}</div>
            <button type={"button"} onClick={()=>{setA(a + 1)}}>increment</button>
        </main>
    );
}
