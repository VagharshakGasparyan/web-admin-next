'use client'
import Image from "next/image";
import styles from "./page.module.css";


import {useRouter, redirect} from 'next/navigation';
import {useEffect, useState} from "react";
// export const revalidate = 200;

export default function Home() {
    const router = useRouter();
    // redirect('/login');
    const [d, setD] = useState('der chka');
    useEffect( ()=>{
        fetch('/api', {method: 'get'}).then(async (res)=>{
            return await res.text();
        }).then((data)=>{
            console.log(data);
            setD(data);
        });


    }, []);
    // console.log(router);
    return (
        <main>
            <h1>This is a Home page</h1>
            <a href={"/products"}>PRODUCTS</a>
            <button type="button" onClick={() => router.push('/dashboard')}>
                Dashboard
            </button>
            <div>{d}</div>
        </main>
    );
}
