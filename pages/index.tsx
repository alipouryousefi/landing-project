import { Footer, Tabs, Banner } from "@/components";

export default function Home() {
  return (
    <main className="px-12 flex justify-center items-center flex-col mt-32">
      <Banner />
      <Tabs />
      <Footer />
    </main>
  );
}
