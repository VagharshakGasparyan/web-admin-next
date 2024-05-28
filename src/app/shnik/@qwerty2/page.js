'use client'


import {useRouter, redirect, useSelectedLayoutSegment} from 'next/navigation';
// export const revalidate = 200;

export default function Qw2() {
    const loginSegment = useSelectedLayoutSegment('qwerty2');
    return (
        <main>
            <h1>QWERTY2</h1>

        </main>
    );
}