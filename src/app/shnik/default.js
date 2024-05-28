'use client'


import {useRouter, redirect, useSelectedLayoutSegment} from 'next/navigation';
// export const revalidate = 200;

export default function Def() {
    const esimInchSegment = useSelectedLayoutSegment('qwerty1');
    return (
        <main>
            <h1>DEFAULT-{esimInchSegment}</h1>
        </main>
    );
}
