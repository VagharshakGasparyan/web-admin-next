// 'use server'
// import "./globals.css";
// import {NavLinks} from '@/components/nav-links';
import "./admin.css";
import {Metadata} from 'next';
import AdmHeader from "./_layouts/adm_header";
import AdmSidebar from "./_layouts/adm_sidebar";
// import {useState} from "react";

export const metadata = {
    title: "Admin",
    applicationName: "My Admin panel",
    //<meta name="application-name" content="My next example" />

    authors: [{name: "Poghos", url: "https://qwerty.com"}],
    // <meta name="author" content="Poghos" />
    //<link rel="author" href="https://qwerty.com" />

    generator: "Next.js",
    //<meta name="generator" content="Next.js" />

    keywords: "Any generator, react, blog",
    //<meta name="keywords" content="Any generator, react, blog" />

    referrer: "origin",
    //<meta name="referrer" content="origin" />
    viewport: {width: "device-width", initialScale: 1},
    //<meta name="viewport" content="width=device-width, initial-scale=1" />

    description: "My Blog Description",
    //<meta name="description" content="My Blog Description" />
};
// export const revalidate = 3600;
// export async function generateMetadata({
//     params,
//                                        }){
//     return {title: "QWERTY_title"}
// }

export default async function LayoutAdmin({children}) {
    // const [sidebarOpen, setSidebarOpen] = useState(true);
    let sidebarOpen = true;
    // const toggleSidebar = ()=>{
    //     // setSidebarOpen(!sidebarOpen);
    //     sidebarOpen = false;
    // };
    return (
        <html lang="en">
        <body>
        <AdmHeader />
        <section className={"admin-section"}>
            <AdmSidebar isOpen={sidebarOpen} />
            <main className={"admin-main"}>
                {children}
            </main>
        </section>
        </body>
        </html>
    );
}

