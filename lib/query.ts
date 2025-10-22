import { eq } from "drizzle-orm";
import { db } from "./db";
import { Post, post } from "./post-schema";

export async function insertPost(newPost: Post, userId: string) {
  return await db.insert(post).values({
    userId: userId,
    title: newPost.title,
    description: newPost.description,
  });
}

export async function queryPostsByUserId(userId: string) {
  return await db.select().from(post).where(eq(post.userId, userId));
}
