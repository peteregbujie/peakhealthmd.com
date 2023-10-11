import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
 const blogs = allBlogs.map((post) => ({
  url: `https://primewavehealth.com/blog/${post.slug}`,
  lastModified: post.date,
 }));

 const routes = [
  "",
  "/about-primewave",
  "/erectile-dysfunction-treatment-las-vegas",
  "/erectile-dysfunction-doctor-las-vegas",
  "/low-testosterone-treatment-las-vegas",
  "/pain-treatment-clinics-in-las-vegas",
  "/shockwave-therapy-las-vegas",
  "/chronic-pain-las-vegas",
  "/back-pain-las-vegas",
  "/joint-pain-las-vegas",
  "/neck-pain-las-vegas",
  "/knee-pain-las-vegas",
  "/blog",
  "/blog/categories",
  "/blog/tags/pain-doctor-near-me",
  "/blog/tags/pain-doctor-in-las-vegas",
  "/blog/tags/best-pain-clinic-in-las-vegas",
  "/blog/tags/top-pain-clinic-in-las-vegas",
  "/blog/tags/back-pain-doctor-in-las-vegas",
  "/chronic-fatigue-syndrome-las-vegas",
  "/fibromyalgia-treatment-las-vegas",
  "/tmj-treatment-in-las-vegas",
  "/peptide-therapy-las-vegas",
  "/consultation",
  "/contact",
 ].map((route) => ({
  url: `https://primewavehealth.com${route}`,
  lastModified: new Date().toISOString().split("T")[0],
 }));

 return [...routes, ...blogs];
}
