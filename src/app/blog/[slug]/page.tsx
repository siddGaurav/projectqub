// export default function BlogPage({
//   params,
// }: {
//   params: {
//     slug: string;
//   };
// }) {

//   return (

//     <div className="px-6 py-20 max-w-4xl mx-auto">

//       <h1 className="text-5xl font-bold capitalize">

//         {params.slug.replace(
//           /-/g,
//           " "
//         )}

//       </h1>

//       <p className="mt-6 text-lg opacity-80 leading-8">

//         This is a dynamic blog page
//         for {params.slug}.

//       </p>

//     </div>
//   );
// }

export async function generateStaticParams() {

  return [

    {
      slug: "nextjs-seo",
    },

    {
      slug: "ui-ux-trends",
    },

  ];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  return (

    <div className="px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-5xl font-bold capitalize">

        {slug.replace(/-/g, " ")}

      </h1>

      <p className="mt-6 text-lg opacity-80 leading-8">

        This is a dynamic blog page
        for {slug}.

      </p>

    </div>
  );
}