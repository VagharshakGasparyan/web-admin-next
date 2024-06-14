'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function Sl1({params: {slug, lang}}) {
    const pathname = usePathname();
    return (
        <main>
            <h1>lang={lang}</h1>
            <h1>slug={slug.join(', ')}</h1>

        </main>
    );
}