import Link from "next/link";

async function getPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}
export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <main className="container">
      <h1>All Articles</h1>
      <p className="info">
        Articles are updated automatically using ISR.
      </p>
      <div className="posts-grid">
        {posts.map((post) => (
          <article className="card" key={post.id}>
            <span className="post-id">Post {post.id}</span>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="read-more">
              Read Article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}