'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {lsGet, lsSet} from "@/functions/gls";
import BreadCrumb from "@/app/admin/_layouts/breadcrumb";
import Any from "@/app/admin/_layouts/any";
// export const revalidate = 200;

export default function AdmHeader() {
    const pathname = usePathname();
    const toggleSidebar = () => {
        let sidebarOpen = lsGet("_set", true, "sidebarOpen");
        lsSet(true, "_set", !sidebarOpen, "sidebarOpen");
    };
    return (
        <header className={"admin-header"}>
            <div style={{width: "250px", display: "flex", alignItems: "center"}}>
                <a style={{flex: 1, marginLeft: "10px"}} className={"sidebar"} href={"/admin"}>My Site</a>

                <button type={"button"} onClick={toggleSidebar} className={"la la-reorder btn-reorder"}></button>
            </div>
            <div className={"d-flex flex-1 align-items-center"} style={{padding: "0 10px"}}>User</div>
            <div className={"d-flex"} style={{alignItems: "center", padding: "0 10px"}}>
                <span style={{display: "inline-block"}}></span> <BreadCrumb/>&nbsp;{/*<Any/>*/}</div>

        </header>
    );
}