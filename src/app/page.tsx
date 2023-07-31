import Image from "next/image";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />

      <div className="max-w-5xl"></div>
    </main>
  );
}
