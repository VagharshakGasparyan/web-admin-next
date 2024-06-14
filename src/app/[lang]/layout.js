'use client'


import {useRouter, redirect, usePathname, notFound} from 'next/navigation';
import notFound1 from "@/app/not-found";
// export const revalidate = 200;

export default function Layout1({children, params: {lang}}) {
    // const pathname = usePathname();
    if (!(["en", "hy", "ru"].includes(lang))) {
        // redirect("/admin");
        return (
            <html lang="en">
            <body style={{margin:0}}>
            {notFound1()}
            </body>
            </html>
        );
    }
    return (
        <html lang="en">
        <body>
        <main>
            <h1>[lang]layout.js</h1>
            {/*<h1>LANG{pathname}</h1>*/}
            <div>{lang}</div>
            <div>{children}</div>
        </main>
        </body>
        </html>
    );
}