import { MetadataRoute } from "next";
import { servicesData } from "@/utils/servicesData";
import { andhraPradeshAreasList } from "@/utils/areasData";
import { projectsData } from "@/utils/projectsData";
import { blogData } from "@/utils/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pigeonguardsolutions.com";

  // 1. Static Routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/pricing",
    "/testimonials",
    "/case-studies",
    "/areas",
    "/projects",
    "/gallery",
    "/blog",
    "/search",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Service Category Routes
  const categoryRoutes = ["/services/safety-nets", "/services/invisible-grills", "/services/cloth-hangers"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  // 3. Dynamic Service Pages (18 Services)
  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 4. Dynamic Area Pages (7 Andhra Pradesh Areas)
  const areaRoutes = andhraPradeshAreasList.map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 5. Dynamic Service + Location Pages (18 services x 7 areas = 126 pages)
  const serviceAreaRoutes: MetadataRoute.Sitemap = [];
  Object.keys(servicesData).forEach((serviceSlug) => {
    andhraPradeshAreasList.forEach((areaSlug) => {
      serviceAreaRoutes.push({
        url: `${baseUrl}/services/${serviceSlug}/${areaSlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9, // High priority for PPC & Local SEO Landing Pages
      });
    });
  });

  // 6. Dynamic Project Case Studies (3 Projects)
  const projectRoutes = Object.keys(projectsData).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 7. Dynamic Blog Posts (4 Posts)
  const blogRoutes = Object.keys(blogData).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...serviceAreaRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
