This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Notes

- Enjoy playing with the folders `:)`
- Framer Motion, while powerful, can be tricky to work with SSR since it relies on certain aspects of the DOM that aren't available on the server. With more time, I could optimize by creating more client components that render server components as children. Currently most components are client components which, while not [suboptimal by any means](https://www.youtube.com/watch?v=6jM_0wDOw4g), doesn't take advantage of the benefits of SSR. If this project involved fetching data externally this approach would have to change a bit.
- This project is more 'Next.js-y' than 'React-y' in that it uses minimal classic React features (fetching data on mount via `useEffect` and `useState` for example).
- Further potential optimizations could involve using Context to allow a "close all folders" button. Additionally, in production I might not import the entire 100kb worth of Framer Motion and instead use a more lightweight animation library.
- My original idea was to use the Github API and recursively render a file tree of any repo pasted in an input, but didn't want to let myself fall into the trap of enjoying building something cool (and slightly overkill?) for a take home test and forgetting that deadlines exist lol
