import { Metadata } from "next";

export const metadata: Metadata = {

  title:
    "Blog | QUBNIX",

  description:
    "Read blogs about Next.js, React, SaaS development, UI/UX design and modern web technologies.",
};

export default function BlogPage() {

  const blogs = [

    {
      title:
      "Why Next.js is Best for SEO",

      slug:
      "nextjs-seo",

      desc:
      "Learn why Next.js helps websites rank better on Google.",
    },

    {
      title:
      "Modern UI UX Design Trends",

      slug:
      "ui-ux-trends",

      desc:
      "Explore modern interface and user experience trends.",
    },

  ];

  return (

    <div className="px-6 py-20">

      <h1 className="text-5xl font-bold mb-10">
        QUBNIX Blog
      </h1>

      <div className="grid gap-6">

        {blogs.map((item, index) => (

          <a
            key={index}

            href={`/blog/${item.slug}`}

            className="
            border
            rounded-2xl
            p-6
            hover:scale-[1.02]
            transition
            "
          >

            <h2 className="text-2xl font-semibold">
              {item.title}
            </h2>

            <p className="mt-3 opacity-70">
              {item.desc}
            </p>

          </a>

        ))}

      </div>

    </div>
  );
}