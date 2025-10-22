CREATE TABLE `post` (
	`id` integer PRIMARY KEY NOT NULL,
	`userId` text,
	`title` text NOT NULL,
	`description` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
