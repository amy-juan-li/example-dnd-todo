# Todo App 
![Basic todo screenshot](./doc/basic-todoapp.png)


## Tech Stack
- [Next.js](https://nextjs.org/) - The React Framework for Production 
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework 
- [Typescript](https://www.typescriptlang.org/)  - A typed JavaScript 
- [Nvim](https://neovim.io/) - A Vim-based Text Editor 

## Project Structure 
<img src='./doc/project-structure.png' width='300px' alt='Project structure screenshot'/>

## Getting Started

First, run the development server:

```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Modes and Environment Variables
Two modes:
  - `development` is used by `yarn dev`
  - `production` is used by `yarn build` 

When running building, environment variables are loaded from the following files in your project root:

```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified env mode
.env.[mode].local   # only loaded in specified env mode, ignored by git
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


