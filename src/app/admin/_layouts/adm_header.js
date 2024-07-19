'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {GLS} from "@/functions/gls";
import BreadCrumb from "@/app/admin/_layouts/breadcrumb";
import Any from "@/app/admin/_layouts/any";
// export const revalidate = 200;

export default function AdmHeader() {
    const gls = GLS();
    const pathname = usePathname();
    const toggleSidebar = () => {
        let sidebarOpen = gls.l.get(["_set", "sidebarOpen"], true);
        gls.l.set(true, ["_set", "sidebarOpen"], !sidebarOpen);
    };
    // console.log("global.ls=", global.ls);
    return (
        <header className={"admin-header"}>
            <div style={{width: "250px", display: "flex", alignItems: "center"}}>
                <a style={{flex: 1, marginLeft: "10px"}} className={"sidebar"} href={"/admin"}>My Site</a>

                <button type={"button"} onClick={toggleSidebar} className={"la la-reorder btn-reorder"}></button>
            </div>
            <div className={"d-flex flex-1 align-items-center"} style={{padding: "0 10px"}}>User</div>
            <div className={"d-flex flex-1 align-items-center"} style={{padding: "0 10px"}}>
                <button type={"button"} onClick={()=>{
                    gls.l.del(true, ["_set", "sidebarOpen"]);
                    // gls.l.del(true, ["_set"]);
                }}>off locale storage</button>
            </div>
            <div className={"d-flex"} style={{alignItems: "center", padding: "0 10px"}}>
                <span style={{display: "inline-block"}}></span> <BreadCrumb/>&nbsp;</div>

        </header>
    );
}