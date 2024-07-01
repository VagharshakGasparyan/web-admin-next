'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect, useState} from "react";
import {lsGet} from "@/functions/gls";
// export const revalidate = 200;

export default function AdmSidebar() {
    console.log('AdmSidebar');
    const router = useRouter();
    const pathname = usePathname();
    const pats = pathname.split("/");
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
        </div>
    );
}