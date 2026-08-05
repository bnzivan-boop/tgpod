/**
 * next/image with `unoptimized` does not apply basePath to src,
 * so on GitHub Pages every asset URL must be prefixed manually.
 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
