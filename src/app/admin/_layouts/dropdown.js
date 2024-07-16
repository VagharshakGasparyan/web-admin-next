'use client'

import {createContext, useContext, useEffect, useRef, useState} from "react";

export default function Dropdown({children, open, content}) {

    const [op, setOp] = useState(open);

    const myRef = useRef();

    useEffect(()=>{
        console.log(myRef.current);
    }, []);

    return (
        <div className={"dropdown" + (op ? " open" : "")}>
            <div style={{cursor:"pointer", userSelect:"none"}} onClick={()=>{
                setOp(!op);
            }}>{content}</div>
            <div className={"sidebar-group"} ref={myRef}>
                {children}
            </div>
        </div>
    );
}