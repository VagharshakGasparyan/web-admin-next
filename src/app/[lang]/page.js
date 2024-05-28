'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function L1({children, params: { lang:langio } }) {
    const pathname = usePathname();
    return (
        <main>
            <h1>[lang]page.js</h1>
            <h1>LANG{pathname}</h1>
            <h1>Params lang={langio}</h1>
            <div>{children}</div>
        </main>
    );
}