'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function AdmHeader() {
    const pathname = usePathname();
    return (
        <header className={"admin-header"}>
            <div style={{width:"250px"}}>
                My Site
                <button type={"button"}>=</button>
            </div>
            <div style={{flex:"1"}}>User<span style={{display:"inline-block", width:"200px"}}></span> {pathname}</div>
        </header>
    );
}