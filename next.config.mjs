import remarkGfm from "remark-gfm";
import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/utils/loader.ts",
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
