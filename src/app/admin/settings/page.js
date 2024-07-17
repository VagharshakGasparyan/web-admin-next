'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect} from "react";
import {gsGet, gsSet, useGLS} from "@/functions/gls";
// export const revalidate = 200;

export default function Settings() {
    useGLS();
    // const pathname = usePathname();

    return (
        <div>
            <h1>SETTINGS PAGE</h1>

        </div>
    );
}