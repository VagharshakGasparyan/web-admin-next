'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
import {useEffect, useRef, useState} from "react";
import {GLS} from "@/functions/gls";
import Dropdown from "@/app/admin/_layouts/dropdown";
// export const revalidate = 200;

export default function AdmSidebar() {
    const gls = GLS();
    const router = useRouter();
    const pathname = usePathname();
    const pats = pathname.split("/");


    const isOpen = ()=>{
        return gls.l.get(["_set", "sidebarOpen"], true);
    }
    useEffect(()=>{
        // dispatch({ type: "d_st/setUserData", payload: {"json": "mson"} });
        // console.log(global.ls);
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
    const toRouter = (r)=>{
        router.push("/admin/" + r);
    };
    return (
        <div className={"admin-sidebar"} style={isOpen() ? {marginLeft: 0} : {marginLeft: "-250px"}}>
            {myBoards()}
            <hr style={{width:"100%"}}/>
            <Dropdown open={false} content={"All Settings"}>
                <a className={"sidebar la la-cog " + (pats[2] === "dashboard" ? " selected" : "")} onClick={()=>{toRouter("dashboard")}}> Dashboard</a>
                <a className={"sidebar la la-users " + (pats[2] === "users" ? " selected" : "")} onClick={()=>{toRouter("users")}}> Users</a>
                <a className={"sidebar la la-cog " + (pats[2] === "settings" ? " selected" : "")} onClick={()=>{toRouter("settings")}}> Settings</a>
            </Dropdown>
            <hr style={{width:"100%"}}/>
            <Dropdown open={true} content={"All Settings2"}>
                <a className={"sidebar la la-cog " + (pats[2] === "dashboard" ? " selected" : "")} onClick={()=>{toRouter("dashboard")}}> Dashboard</a>
                <a className={"sidebar la la-users " + (pats[2] === "users" ? " selected" : "")} onClick={()=>{toRouter("users")}}> Users</a>
                <a className={"sidebar la la-cog " + (pats[2] === "settings" ? " selected" : "")} onClick={()=>{toRouter("settings")}}> Settings</a>
                <a className={"sidebar la la-cog " + (pats[2] === "settings" ? " selected" : "")} onClick={()=>{toRouter("settings")}}> Settings</a>
            </Dropdown>
            <hr style={{width:"100%"}}/>
        </div>
    );
}