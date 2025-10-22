import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./auth-schema";

export const post = sqliteTable("post", {
  id: integer().primaryKey(),
  userId: text().references(() => user.id),
  title: text().notNull(),
  description: text().notNull(),
});

export type Post = typeof post.$inferInsert;
