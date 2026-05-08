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

export default function Page({
  params,
}: any) {

  return (

    <div className="px-6 py-20 max-w-4xl mx-auto">

      <h1 className="text-5xl font-bold capitalize">

        {params.slug}

      </h1>

    </div>
  );
}