'use client'

import {createContext, useContext, useEffect, useState} from "react";

export default function Dropdown({children, open, content}) {

    const [op, setOp] = useState(open);

    return (
        <div className={"dropdown" + (op ? " open" : "")}>
            <div style={{cursor:"pointer", userSelect:"none"}} onClick={()=>{
                setOp(!op);
            }}>{content}</div>
            <div className={"sidebar-group"}>
                {children}
            </div>
        </div>
    );
}