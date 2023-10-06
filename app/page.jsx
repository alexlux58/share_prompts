import Image from "next/image";
import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden " />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        An open-source AI prompting tool for reusability and to help track
        useful prompts.{" "}
      </p>

      <Feed />
    </section>
  );
}
