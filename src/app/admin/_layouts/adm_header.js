'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function AdmHeader({toggleSidebar}) {
    const pathname = usePathname();
    return (
        <header className={"admin-header"}>
            <div style={{width:"250px",display:"flex", alignItems:"center"}}>
                <a style={{flex:1,marginLeft:"10px"}} className={"sidebar"} href={"/admin"}>My Site</a>

                <button type={"button"} onClick={toggleSidebar} className={"la la-reorder btn-reorder"}></button>
            </div>
            <div className={"d-flex"} style={{flex:"1", alignItems:"center",padding:"0 10px"}}>User<span style={{display:"inline-block", width:"200px"}}></span> {pathname}</div>
        </header>
    );
}