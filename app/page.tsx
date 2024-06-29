"use client";

import { Avatar } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10">
      <div id="hero" className="flex flex-row">
        <Avatar src="profile.png" size="lg" isBordered color="secondary" className="mx-4" />
        <div>
          <h1 className="text-3xl">Wellesley Neoh</h1>
          <p>@scriptwes1337</p>
        </div>
      </div>
    </section>
  );
}
