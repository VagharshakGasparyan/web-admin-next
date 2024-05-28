// 'use server'
import "./globals.css";
import {NavLinks} from '@/components/nav-links';

import {Metadata} from 'next';
export const metadata = {
    title: "Home",
    applicationName: "My next example",
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

export default async function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <div style={{width: '1024px', maxWidth: '100vw', margin: '0 auto'}}>
            <NavLinks/>{children}
        </div>
        </body>
        </html>
    );
}
