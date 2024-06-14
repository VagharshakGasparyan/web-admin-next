'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// import {lsGet, lsSet} from "@/functions/gls";

export default function BreadCrumb({}) {
    const router = useRouter();
    const pathname = usePathname();
    const brc = ()=>{
        let paths = pathname.split("/");
        paths = paths.filter((path)=>{
            return path;
        });
        return paths.map((path, index) => {
            let r_path = paths.slice(0, index + 1).join("/");
            return (index < paths.length - 1)
                ? <a key={"path_" + index} className={"sidebar"}
                  onClick={()=>{ router.push("/" + r_path); }}>/{path}</a>
                : <span key={"path_" + index} style={{color:"#999"}}>/{path}</span>;
        });
    };

    return (
        <div>
            {brc()}
        </div>
    );
}