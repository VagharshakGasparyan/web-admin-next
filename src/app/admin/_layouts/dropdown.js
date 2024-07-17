'use client'

import {createContext, useContext, useEffect, useRef, useState} from "react";

export default function Dropdown({children, open, content}) {

    const [op, setOp] = useState(open);
    const [h, setH] = useState("auto");
    const [init, setInit] = useState(false);

    const myRef = useRef();

    useEffect(()=>{
        setH(myRef.current.getBoundingClientRect().height);
        setInit(true);
    }, []);

    return (
        <div className={"dropdown"}>
            <div className={"sidebar"} style={{cursor:"pointer", userSelect:"none"}} onClick={()=>{
                setOp(!op);
            }}>{content}</div>
            <div className={"sidebar-group"} style={op ? {opacity: 1, height: h} : {opacity: 0, height: (init ? 0 : "auto")}} ref={myRef}>
                {children}
            </div>
        </div>
    );
}