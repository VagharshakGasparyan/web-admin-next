'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function AdmHeader({toggleSidebar}) {
    const pathname = usePathname();
    return (
        <header className={"admin-header"}>
            <div style={{width:"250px"}}>
                <a href={"/admin"}>My Site</a>

                <button type={"button"} onClick={toggleSidebar} className={"la la-reorder"}
                        style={{backgroundColor:"#fff0",color:"inherit",fontSize:"27px",float:"right"}}></button>
            </div>
            <div style={{flex:"1"}}>User<span style={{display:"inline-block", width:"200px"}}></span> {pathname}</div>
        </header>
    );
}