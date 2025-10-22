"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPostAction } from "@/lib/actions";
import { useActionState } from "react";

export default function New() {
  const [state, formAction] = useActionState(createPostAction, null);

  return (
    <div className="max-w-md mx-auto flex flex-col gap-4">
      <div className="h-80">Force scroll</div>
      <div className="h-80">Force scroll</div>
      <div className="h-80">Force scroll</div>
      <div className="h-80">Force scroll</div>
      <form action={formAction}>
        <Label>Title</Label>
        <Input id="title" name="title" />
        <Label>Description</Label>
        <Input id="description" name="description" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
