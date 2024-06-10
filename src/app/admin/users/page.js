'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect} from "react";
// export const revalidate = 200;

export default function Users() {
    const pathname = usePathname();
    // console.log("users page");
    useEffect(()=>{
        console.log("users page");
    }, []);
    return (
        <div>
            <h1>USERS PAGE</h1>
        </div>
    );
}