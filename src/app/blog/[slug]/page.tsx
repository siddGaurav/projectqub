import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

// SEO

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  return {

    title:
      `${params.slug} | QUBNIX Blog`,

    description:
      "Read modern web development and SEO blogs from QUBNIX.",
  };
}

export default function BlogDetails({
  params,
}: Props) {

  return (

    <div className="px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-5xl font-bold capitalize">

        {params.slug.replace(
          /-/g,
          " "
        )}

      </h1>

      <p className="mt-6 text-lg opacity-80 leading-8">

        This is a dynamic blog page
        for {params.slug}.

      </p>

    </div>
  );
}