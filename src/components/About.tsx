import cipheredBanner from "@/assets/ciphered_banner.png";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Separator } from "./ui/separator";

const About = () => {
  return (
    <div className="max-w-4xl my-8 mx-auto px-6">
      <img
        src={cipheredBanner}
        alt="Ciphered Banner"
        className="w-full block"
      />
      <h1 className="mt-10 text-3xl md:text-4xl font-semibold">Ciphered</h1>
      <p className="mt-2">
        An open-source web app that let's you encrypt or decrypt any message you
        want using various algorithms and keys.{" "}
        <span className="bg-[#f7b49975] p-0.5 rounded-sm">
          This page contains information about my motivation, how can one
          contribute and how to get help.
        </span>
      </p>
      <Separator className="my-4" />
      <Badge variant="default" className="mt-6">
        Introduction
      </Badge>
      <h2 className="my-4 font-medium text-2xl md:text-3xl">Motivation?</h2>
      <p className="mt-2">
        "<span className="italic">Well, why this website Adarsh?</span>" you
        might ask, and I'd say, <span className="italic">why not?</span>, it's
        always better than sitting idle. I was pretty bored by working on{" "}
        <Link className="link" to="https://timeloom.vercel.app">
          Timeloom
        </Link>
        , so I just decided to work on something fun that can be used to learn
        something new. And well, here we are!
      </p>
      <p className="mt-3">
        I wanted to build something around encryption for so long, in fact, I
        had a very old project regarding the same as well (and yepp, it was as
        bad as you can imaging). Recently, I contributed to{" "}
        <Link className="link" to="https://github.com/fa7ad/bad-ciphers">
          fa7ad/bad-ciphers
        </Link>{" "}
        and since then I was again intrigued to work on something related to
        encryption.
      </p>
      <p className="mt-3">
        I love the idea of Open-Source. There's just so many{" "}
        <span className="italic">nicies</span> one can't ignore. Hence, this is
        open source. Well, let's get a little technical now :)
      </p>
      <h2 className="mt-8 mb-4 font-medium text-2xl md:text-3xl">
        Tech Stack?
      </h2>
      <ul className="list-disc list-inside">
        <li>ReactJS (Vite)</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>Shadcn/ui</li>
      </ul>
      <p className="mt-3">
        Why this tech stack? Well, it's been really long since I had used
        ReactJS so I just wanted to practice that. Along with that, I thought
        it'd be pretty good if I use TypeScript with that, and well well well,
        how can I forget my new favourite Shadcn/ui?
      </p>
      <h2 className="mt-8 mb-4 font-medium text-2xl md:text-3xl">
        Other tech stuff
      </h2>
      <p className="mt-3">
        Here are other things I tried while making this project:
      </p>
      <ul className="list-disc list-inside mt-3">
        <li>
          Using{" "}
          <Link className="link" to="https://www.conventionalcommits.org/">
            conventional commits
          </Link>
        </li>
        <li>
          Some typescript best practices like:
          <ul className="my-1 px-8 list-[square] list-inside">
            <li>
              Not using <code>any</code>
            </li>
            <li>Having organized file and folder structure</li>
            <li>Separating business logic with UI</li>
          </ul>
        </li>
        <li>Making the page responsive</li>
        <li>
          Maintaining the repo, like having a good{" "}
          <Link
            className="link"
            to="https://github.com/inclinedadarsh/ciphered/blob/main/CONTRIBUTING.md"
          >
            CONTRIBUTING.md
          </Link>{" "}
          and maintaining sections like Issues.
        </li>
      </ul>
      <Badge variant="default" className="mt-10">
        Contribution
      </Badge>
      <h2 className="my-4 font-medium text-2xl md:text-3xl">
        Ways to contribute:
      </h2>
      <ul className="list-disc list-outisde px-5 mt-3">
        <li className="mt-2">
          <span className="font-medium">Open an issue</span>: If you fine an bug
          while using the application, make sure to open an issue for it. Do
          mention the algorithm type, key used, plain text and cipher text. You
          can also open an issue for a feature request or algorithm request.
        </li>
        <li className="mt-2">
          <span className="font-medium">Add an encryption algorithm</span>: If
          you want to add an encryption algorithm, you can open an issue for it
          and get that assigned to yourself. A brief guide on how to add
          encryption algorithm to the project can be found in{" "}
          <Link
            className="link"
            to="https://github.com/inclinedadarsh/ciphered/blob/main/CONTRIBUTING.md"
          >
            CONTRIBUTING.md
          </Link>
          .
        </li>
        <li className="mt-2">
          <span className="font-medium">Refactor the code</span>: This project
          started to be build quickly. But now this project needs a lot of code
          refactoring. If you see an file, feature, section that you think can
          be refacotred for better usability/readability, go ahead an open an
          issue on that and solve that.
        </li>
        <li className="mt-2">
          <span className="font-medium">Solve an issue</span>: You can solve an
          already raised bug or create a feautre requested in the issues
          section.
        </li>
      </ul>
      <h2 className="mt-8 mb-4 font-medium text-2xl md:text-3xl">
        GitHub Repository
      </h2>
      <p className="mt-3">
        Checkout Ciphered's GitHub Repository as it contains a lot more
        information. Other than that, everything else is availabel on the
        website itself.
      </p>
      <Badge variant="default" className="mt-10">
        Contact & Support
      </Badge>
      <h2 className="my-4 font-medium text-2xl md:text-3xl">
        How to contact me?
      </h2>
      <p className="mt-3">
        Well, I can be simply found on{" "}
        <Link className="link" to="https://bento.me/adarsh">
          my bento
        </Link>
        . Other than that, you can connect with me on{" "}
        <Link className="link" to="https://twitter.com/inclinedadarsh">
          twitter
        </Link>{" "}
        and check out my blog{" "}
        <Link className="link" to="https://blog.adarshdubey.com/">
          here
        </Link>
        .
      </p>
      <p className="mt-3">
        Well, that's it for now. Let me know if you liked the project on my
        twitter and yeah, enjoy!
      </p>
    </div>
  );
};

export default About;
