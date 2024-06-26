'use client'

import {useEffect, useState} from "react";
import {useRouter, redirect, usePathname} from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import {lsGet, gsGet, gsSet, useGLS} from "@/functions/gls";
import {loaderOn, loaderOff} from "@/functions/f";
import Loader from "@/app/admin/_layouts/loader";
import Any from "@/app/admin/_layouts/any";


export default function Dashboard() {
    const dispatch = useDispatch();
    const val = useSelector((store) => {
        return store.stReducer.val;
    });

    const base_url = process.env.NEXT_PUBLIC_BASE_API_URL;
    console.log("base_url=", base_url);
    useEffect(()=>{
        // dispatch({ type: "d_st/setUserData", payload: {"json": "mson"} });
        console.log("process.env=", base_url);
    }, []);
    const pathname = usePathname();
    const onLoading = ()=>{
        loaderOn();
        setTimeout(()=>{
            loaderOff();
        }, 10000);
    }

    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <div>{base_url}</div>
            <div>{lsGet("_set", true, "sidebarOpen") ? "Սայդբառը բացա" : "Սայդբառը փագա"}</div>
            <button style={{backgroundColor: gsGet("btnColor", "yellow")}} className={'btn'}
                    onClick={()=>{
                        let c = gsGet("btnColor", "yellow");
                        gsSet(true, "btnColor", c === "yellow" ? "#77f" : "yellow");
                    }}
            >Press me</button><br/>
            <button className={'btn'}
                    onClick={()=>{
                        dispatch({type:"d_st/someAction1", payload: "bbb"});
                    }}
            >Pressyano mio {val}</button>
            <Any></Any>
            <div style={{marginTop: "10px"}}><button className={'btn'} onClick={onLoading}>{gsGet("loading", false) ? <Loader type={"sm"}/> : <></>} Միացնել լոադերը 10 վայրկյանով</button></div>
        </div>
    );
}