import Link from "next/link";

async function getComments(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
}
export default async function CommentsPage({ params }) {
  const { id } = await params;
  const comments = await getComments(id);
  return (
    <main className="container">
      <Link href={`/posts/${id}`} className="back">
        ← Back to Article
      </Link>
      <h1>Comments for Post {id}</h1>
      <div className="comments">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <h3>{comment.name}</h3>
            <p className="email">
              {comment.email}
            </p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}