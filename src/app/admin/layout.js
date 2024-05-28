'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function LayoutAdmin({children}) {
    const pathname = usePathname();
    return (
        <main>
            {children}
        </main>
    );
}