export const dynamic = 'force-dynamic'; // defaults to auto
import { cookies } from 'next/headers';
export const revalidate = 200;
//GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
export async function GET(request) {
    return new Response('Hello, Bro! What is bite?', {
        status: 200,
        headers: { 'Set-Cookie': "token=moken" },
    });
    // return Response.json({"qwerty":"uiop"});
}