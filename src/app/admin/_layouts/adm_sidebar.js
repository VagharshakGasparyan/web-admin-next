'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect, useState} from "react";
import {lsGet, useGLS} from "@/functions/gls";
import Dropdown from "@/app/admin/_layouts/dropdown";
// export const revalidate = 200;

export default function AdmSidebar() {
    useGLS();
    console.log('AdmSidebar');
    const router = useRouter();
    const pathname = usePathname();
    const pats = pathname.split("/");
    const [b, setB] = useState(true);

    const isOpen = ()=>{
        return lsGet("_set", true, "sidebarOpen");
    }
    useEffect(()=>{
        // dispatch({ type: "d_st/setUserData", payload: {"json": "mson"} });
        console.log("AdmSidebar useEffect");
    }, []);
    // console.log(pathname, pats);
    const myBoards = () => {
        let boards = [{r: "dashboard", c: "la la-home"}, {r: "users", c: "la la-users"}, {r: "settings", c: "la la-cog"}];
        return boards.map((board, index) => {
            return <a key={"board_" + index} className={"sidebar " + board.c + (pats[2] === board.r ? " selected" : "")}
                      onClick={()=>{
                          router.push("/admin/" + board.r);
                      }}>&nbsp;{board.r.charAt(0).toUpperCase() + board.r.slice(1)}</a>;
        })
    };
    return (
        <div className={"admin-sidebar"} style={isOpen() ? {marginLeft: 0} : {marginLeft: "-250px"}}>
            {/*<a onClick={()=>{*/}
            {/*    router.push("/admin/dashboard");*/}
            {/*}} className={"sidebar la la-home " + (pats[2] === ("dashboard") ? "selected" : "")} href={"#"}> Dashboard routov</a>*/}
            {/*<a className={"sidebar la la-home " + (pats[2] === ("dashboard") ? "selected" : "")} href={"/admin/dashboard"}> Dashboard</a>*/}
            {/*<a className={"sidebar la la-users " + (pats[2] === ("users") ? "selected" : "")} href={"/admin/users"}> Users</a>*/}
            {/*<a className={"sidebar la la-cog "} href={"/admin/settings"}> Settings</a>*/}
            {myBoards()}
            <div className={"dropdown" + (b ? "" : " open")}>
                <div style={{cursor:"pointer", userSelect:"none"}} onClick={()=>{
                    setB(!b);
                }}>All Settings</div>
                <div className={"sidebar-group"}>
                    <a className={"sidebar la la-cog "} href={"/admin/settings"}> Setting 1</a>
                    <a className={"sidebar la la-cog "} href={"/admin/settings"}> Setting 2</a>
                    <a className={"sidebar la la-cog "} href={"/admin/settings"}> Setting 3</a>
                </div>
            </div>
            <hr style={{width:"100%"}}/>
            <Dropdown open={false} content={"All Settings"}>
                <a className={"sidebar la la-cog "} href={"/admin/settings"}> Setting 1</a>
                <a className={"sidebar la la-cog "} href={"/admin/settings"}> Setting 2</a>
                <a className={"sidebar la la-cog "} href={"/admin/settings"}> Setting 3</a>
            </Dropdown>
            <hr style={{width:"100%"}}/>
        </div>
    );
}