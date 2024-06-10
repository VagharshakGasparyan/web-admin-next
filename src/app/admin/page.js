'use client'

import {useRouter, redirect, usePathname} from 'next/navigation';
// export const revalidate = 200;

export default function L1() {
    const pathname = usePathname();
    return (
        <div>
            <h1>ADMIN PAGE</h1>
            <button className={'btn'}>Press me</button>
        </div>
    );
}