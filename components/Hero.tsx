import { Avatar } from "@nextui-org/react";
import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-row items-center">
        <Avatar
          src="profile.png"
          size="lg"
          isBordered
          color="secondary"
          className="mr-4"
        />
        <div>
          <h1 className="text-3xl">Wellesley</h1>
          <p>@scriptwes1337</p>
        </div>
      </div>
      <p className="pt-4">
        Hi! I'm a coder interested in web and game development.
      </p>
    </>
  );
};
