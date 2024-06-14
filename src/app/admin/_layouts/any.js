'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
import {createContext, useContext, useEffect, useState} from "react";
import AdmHeader from "@/app/admin/_layouts/adm_header";
import AdmSidebar from "@/app/admin/_layouts/adm_sidebar";
import {useGLS, varGet} from "@/functions/gls";
// export const revalidate = 200;


export default function Any() {
    console.log("ANY");
    return (
        <div>ANY{varGet("btnColor", "yellow")}</div>
    );
}