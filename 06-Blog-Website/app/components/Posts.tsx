import { getSortedPostsData } from "@/lib/posts";
import ListItems from "./ListItems";

export default function Posts() {
  const posts = getSortedPostsData();

  const allPosts = posts.map((post) => {
    return (
      <ul className="w-full">
        <ListItems key={post.id} post={post} />
      </ul>
    );
  });

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white/90">Blog</h2>
      {allPosts}
    </section>
  );
}
