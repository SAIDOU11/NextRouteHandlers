import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();

  cookies().set("ResultsPage", "20");
  const theme = request.cookies.get("theme");

  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));

  console.log(theme);
  console.log(cookies().get("ResultsPage"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
