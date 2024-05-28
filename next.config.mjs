/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx"

const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};
const  withMDX = createMDX();

// export default nextConfig;
export default withMDX(nextConfig);
