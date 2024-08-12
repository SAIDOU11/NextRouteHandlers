import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(request: Request) {
  const textComment = await request.json();

  const newTextComment = {
    id: comments.length + 1,
    text: textComment.text,
  };

  comments.push(newTextComment);

  return new Response(JSON.stringify(newTextComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
