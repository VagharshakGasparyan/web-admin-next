// import styles from "../page.module.css";
'use client'
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";

export default function Tm() {
    const router = useRouter();
    const pathname = usePathname();
    const s_params = useSearchParams();
    const params = useParams();
    console.log(params);
    let asd = {
        a: "aaa",
        b: "bbb",
        c: "ccc",
    };
    let getASD = () => {
        let w = [];
        for (let key in asd) {
            w.push(<div key={key}>{key}--{asd[key]}</div>);
        }
        return w;
    };
    return (
        <main className={"main-home"}>
            <h1>TM--{params.id}--</h1>
            {
                (() => {
                    let w = [];
                    for (let key in asd) {
                        w.push(<div key={key}>{key}--{asd[key]}</div>);
                    }
                    return w;
                })()
            }
            {getASD()}
        </main>
    );
}
