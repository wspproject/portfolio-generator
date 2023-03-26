import { ThemeSwitch } from "@/components/ThemeSwitch";
import Head from "next/head";
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import data from "../portfolio.config.json";

export default function Home() {
  const { theme } = data;

  return (
    <div className={theme.background}>
      <nav className="relative z-10 flex h-20 items-center justify-between px-20">
        <div>Logo</div>
        <div className="flex gap-8">
          <ThemeSwitch />
          <button>Contact</button>
        </div>
      </nav>
      <main
        className={`relative z-0 -mt-20 flex min-h-screen flex-grow justify-between px-20 pt-20`}
      >
        <div className="flex flex-col justify-center gap-8">
          <h1 className={theme.title}>
            Hi, my name is
            <br />
            Mateusz Janowski
          </h1>
          <p>
            I`m open minded, all-round software developer, with main focus on
            <br />
            Next.js, React, Node.js, TypeScrpt, GraphQL, Express, MongoDB.
          </p>
          <div className="flex gap-4">
            <a className={`block rounded-md bg-black py-2 px-4 text-white ${theme.buttons}`}>
              Resume
            </a>
            <a className={`block rounded-md bg-black py-2 px-4 text-white ${theme.buttons}`}>LN</a>
            <a className={`block rounded-md bg-black py-2 px-4 text-white ${theme.buttons}`}>YT</a>
            <a className={`block rounded-md bg-black py-2 px-4 text-white ${theme.buttons}`}>GH</a>
          </div>
        </div>
        <div>image</div>
      </main>
      <footer className="relative z-10 flex h-20 items-center px-20">
        Found an error on the website? Open an issue on GitHub!
      </footer>
    </div>
  );
}
