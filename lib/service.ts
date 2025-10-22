import { Post } from "./post-schema";
import { insertPost, queryPostsByUserId } from "./query";
import { session } from "./server";

export async function getPosts() {
  const authSession = await session();
  const userId = authSession?.user.id;
  if (!userId) return { error: "User not logged in" };
  const queryResult = await queryPostsByUserId(userId);
  return {
    success: true,
    data: queryResult,
  };
}

export async function createPost(newPost: Post) {
  const authSession = await session();
  const userId = authSession?.user.id;
  if (!userId) return { error: "User not logged in" };
  const queryResult = await insertPost(newPost, userId);
  return {
    success: true,
    data: queryResult,
  };
}
