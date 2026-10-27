import Link from "next/link";

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  return response.json();
}
export default async function PostPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <main className="container">
      <Link href="/posts" className="back">
        ← Back to Articles
      </Link>
      <article className="single-post">
        <span className="post-id">Post {post.id}</span>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <div className="actions">
          <Link
            href={`/posts/${post.id}/comments`}
            className="button">
            View Comments
          </Link>
        </div>
      </article>
    </main>
  );
}