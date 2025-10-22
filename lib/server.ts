import { auth } from "./auth";
import { headers } from "next/headers";

const session = async () =>
  await auth.api.getSession({
    headers: await headers(),
  });

export { session };
