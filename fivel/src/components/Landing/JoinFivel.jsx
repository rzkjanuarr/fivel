import Image from "next/image";
import React from "react";

function JoinFivel() {
  return (
    <div className="mx-32 my-16 relative">
      <div className="absolute z-10 top-1/3 left-10">
        <h4 className="text-white text-5xl mb-10">
          Suddenly it&apos;s all so <i>doable.</i>
        </h4>
        <button
          className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-[#1DBF73] hover:bg-[#0C995F] text-white rounded-md"
          type="button"
        >
          Join Fivell
        </button>
      </div>
      <div className=" w-full h-96">
        <Image src="/bg-signup.webp" fill alt="signup" className="rounded-sm" />
      </div>
    </div>
  );
}

export default JoinFivel;
