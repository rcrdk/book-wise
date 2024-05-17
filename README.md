# 📚 BookWise
I developed this project during classes and as a challenge of my latest studies on React lessons at [Rocketseat](https://www.rocketseat.com.br).

<br>

<p align="center">
  <img alt="BookWise Project Preview" src="https://github.com/rcrdk/book-wise/blob/main/public/preview.jpg?raw=true" width="100%" />
</p>

## 🚀 Techs and Tools

- [React](https://reactjs.org) + [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com)
- [React Query](https://tanstack.com/query/v3/)
- [Stitches](https://stitches.dev)
- [NextAuth.js](https://next-auth.js.org/) + [Google oAuth](https://developers.google.com/identity/protocols/oauth2) + [GitHub oAuth](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
- PostgreSQL + [Prisma](https://www.prisma.io/) + [Neon](https://neon.tech/)

## 🎨 About 

This project was developed based on a figma design provied by the school. The main practice was to code a full-stack "Rate a Book" app. On the app the user can access with signin or just as a guest.

It was used NextAuth.js along with Google and GitHub accounts integration for authentication. All data was stored using a PostgreSQL database, in production was setted a Neon database. On development was used MySQL. Prisma was used to interact and manage with database.

On the first user access it's possible to enter dashboard as logged user with possibility of rating a book or as a guest for only viewing data. On dashboard are available the last book rated by the user, a paginated feed with latest book rated on app, and a small list of popular books. On explorer, the user can search for a book by a search field and by category. On profile are shown latest user ratings and stats of books readed and rated. By clicking on any rate or book a modal is opened containing book information and it's latest ratings, also, its possible to post a rating if the user is logged.

## 🔗 Links

- [Design / Figma](https://www.figma.com/design/VbEdYdHPctFQ08psEzg7Ji/Desafio---BookWise?node-id=1%3A17&t=x90Hvl8puoOElwpl-1)
- [Deploy](https://book-wise-flame.vercel.app)

## ⚙️ Enviroment Variables

```shell
# Database PostgreSQL
DATABASE_URL=""
DATABASE_DIRECT_URL=""

# Google oAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# GitHub oAuth
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Next Auth
NEXTAUTH_URL=""
NEXTAUTH_SECRET=""

# Options
NEXT_PUBLIC_ENABLE_API_DELAY="false"
```
