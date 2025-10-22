# Redirect issue example

## Stack

- Next 15.4.3
- BetterAuth
- Drizzle with SQLite DB for this example
- Shacdn

## Env

Add this to your env

```
DB_FILE_NAME=file:local.db
BETTER_AUTH_SECRET=KF9jA9emVeBWtq47RCpUttevS1zxvuPT
BETTER_AUTH_URL=http://localhost:3000
```

## To run

- pnpm i
- pnpm drizzle-kit migrate
- pnpm run build
- pnpm run start

## To test

- navigate to /sign-up and make an account
- make a post at /new
