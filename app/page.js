import Hero from "@/Components/Hero";
import "./globals.css";
import WrapPopUp from "@/Components/WrapPopUp";

export default async function Home() {

  return (
    <>
      <WrapPopUp />

      <Hero />
    </>
  );
}
