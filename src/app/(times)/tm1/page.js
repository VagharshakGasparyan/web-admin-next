// import styles from "../page.module.css";
'use client'
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import img1 from "../../../files/images/wthome_3.png";
import styles from "./tm.module.css";
import styles1 from "../_haybudul/tdm.css";
import Image from 'next/image';

export default function Tm1() {
    const router = useRouter();
    const pathname = usePathname();
    const s_params = useSearchParams();
    const params = useParams();
    console.log(params, pathname, img1, styles);
    console.log(styles.abr);
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
                    let t = true;
                    for (let key in asd) {
                        // w.push(<div className={styles.abr} key={key}>{key}--{asd[key]}</div>);
                        // w.push(<div className={styles.abr + " tdm1"} key={key}>{key}--{asd[key]}</div>);
                        w.push(<div id={t?"div":""} className={styles.abr + " tdm1"} key={key}>{key}--{asd[key]}</div>);
                        t=false;
                    }
                    return w;
                })()
            }
            {getASD()}
            <img src={'/aaa/west-armenia.png'} alt={'malt'}/>
            <img width={200} src={img1.src} alt={'malt'}/>
            {/*<Image src={img1} alt={'srgrt'}></Image>*/}
        </main>
    );
}
