import Image from "next/image";
import { Hero } from "@/components/ux/hero";
import MainBody from "@/components/ux/main-body";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <MainBody />
    </main>
  );
}
