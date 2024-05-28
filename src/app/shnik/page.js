'use client'

import {useRouter, redirect, useSelectedLayoutSegment} from 'next/navigation';
// export const revalidate = 200;
export default function Shnik() {
    const esimInchSegment = useSelectedLayoutSegment('qwerty1');
    return (
        <main>
            <h1>SHNIK-{esimInchSegment}</h1>

        </main>
    );
}
