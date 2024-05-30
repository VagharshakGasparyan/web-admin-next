'use client'


import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function Dashboard() {
    const pathname = usePathname();
    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
        </div>
    );
}