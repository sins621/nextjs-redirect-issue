"use server";

import { redirect } from "next/navigation";
import { createPost } from "./service";

export async function createPostAction(
  _previousState: null,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  await createPost({ title, description });

  // revalidatePath("posts");
  return redirect("/posts");
}
