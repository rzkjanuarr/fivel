import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex font-semibold text-5xl justify-center min-h-screen items-center">
      <span className="text-white">See you on</span>
      <span className="italic rounded-xl bg-orange-200 hover:bg-orange-500 hover:cursor-pointer">
        17.30
      </span>
    </div>
  );
}
