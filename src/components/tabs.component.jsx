/* eslint-disable @next/next/no-img-element */
import React from "react";
import links from "../data/links.json";

const Tabs = () => {
  return (
    <main className="space-y-10">
      <div className="grid mx-auto text-center space-y-6 ">
        {links.map((link, idx) => (
          <a
            href={link.href}
            key={idx}
            id={link.id}
            className="bg-primary text-secondary p-4 no-underline w-3/5 mx-auto rounded-md sm:w-11/12"
          >
            {link.title}
          </a>
        ))}
      </div>
      <div className="flex justify-center gap-6">
        <img alt="slack" src="/images/slack.svg" />

        <a href="https://github.com/Folukie/">
          <img alt="github" src="/images/github.svg" />
        </a>
      </div>
    </main>
  );
};

export default Tabs;
