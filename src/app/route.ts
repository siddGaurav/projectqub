export async function GET() {
  return new Response(
    "google-site-verification: google9c78fbea5623260f.html",
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}