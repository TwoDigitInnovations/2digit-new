import { NextResponse } from "next/server";

const siteUrl = "https://www.yoursite.com";

// Simulate dynamic data from API or DB
async function getBlogSlugs() {
  return [
    { slug: "next-js-seo" },
    { slug: "react-hooks" },
    { slug: "web-performance" },
  ];
}

export async function GET() {
  // Static pages
  const staticPages = ["/", "/about", "/services", "/contact"];

  // Dynamic pages
  const blogs = await getBlogSlugs();
  const blogUrls = blogs.map(
    (blog) => `
    <url>
      <loc>${siteUrl}/blog/${blog.slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`
  );

  // Combine static + dynamic pages
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
${blogUrls.join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
