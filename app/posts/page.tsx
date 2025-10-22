import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts } from "@/lib/service";
import Link from "next/link";

export default async function Posts() {
  const postsResult = await getPosts();
  if (postsResult.error || !postsResult.data) return <div>No posts</div>;

  const posts = postsResult.data;

  return (
    <div className="max-w-md mx-auto flex flex-col gap-4">
      <span className="text-lg font-semibold">Posts:</span>
      <Button asChild>
        <Link href="/new">New Post</Link>
      </Button>
      {posts.map((post) => (
        <div key={post.id}>
          <Card>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-muted-foreground">{post.description}</span>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
