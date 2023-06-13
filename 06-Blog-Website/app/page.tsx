import Posts from "./components/Posts";

export default function Home() {
  return (
    <main>
      <p className="mt-12 mb-2 text-3xl text-center text-white">
        Hello and Welcome 🎸&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Dave Mustaine</span>.
        </span>
      </p>
      <p className="mb-12 text-xl text-center text-white">
        I teach you some stuff about Next 13 in this tutorial
      </p>
      <Posts />
    </main>
  );
}
