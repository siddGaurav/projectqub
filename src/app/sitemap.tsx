// import type { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {

//   return [

//     {
//       url: "https://qubnix.com",

//       lastModified: new Date(),

//       changeFrequency: "weekly",

//       priority: 1,
//     },

//     {
//       url:
//       "https://qubnix.com/about",

//       lastModified: new Date(),

//       changeFrequency: "monthly",

//       priority: 0.8,
//     },

//     {
//       url:
//       "https://qubnix.com/contact",

//       lastModified: new Date(),

//       changeFrequency: "monthly",

//       priority: 0.8,
//     },

//     {
//       url:
//       "https://qubnix.com/projects",

//       lastModified: new Date(),

//       changeFrequency: "weekly",

//       priority: 0.9,
//     },

//     {
//       url:
//       "https://qubnix.com/process",

//       lastModified: new Date(),

//       changeFrequency: "monthly",

//       priority: 0.7,
//     },

//   ];
// }



import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://qubnix.com",

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: 1,
    },

    {
      url:
      "https://qubnix.com/about",

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 0.8,
    },

    {
      url:
      "https://qubnix.com/contact",

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 0.8,
    },

    {
      url:
      "https://qubnix.com/projects",

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: 0.9,
    },

    {
      url:
      "https://qubnix.com/process",

      lastModified: new Date(),

      changeFrequency: "monthly",

      priority: 0.7,
    },

  ];
}