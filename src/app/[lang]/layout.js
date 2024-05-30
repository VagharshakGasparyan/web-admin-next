'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function Layout1({children}) {
    const pathname = usePathname();
    return (
        <html lang="en">
        <body>
        <main>
            <h1>[lang]layout.js</h1>
            <h1>LANG{pathname}</h1>
            <div>{children}</div>
        </main>
        </body>
        </html>
    );
}