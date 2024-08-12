import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1, // comments[] lenght + 1 .. comments array from data
    text: comment.text, // comment from the request body
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type ": "application/json" },
    status: 201,
  });
}
