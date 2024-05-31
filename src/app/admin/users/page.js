'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function Users() {
    const pathname = usePathname();
    return (
        <div>
            <h1>USERS PAGE</h1>
        </div>
    );
}