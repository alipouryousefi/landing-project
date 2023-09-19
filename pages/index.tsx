import { Footer, Tab, Topic } from "@/components";

export default function Home() {
  return (
    <main className="px-12 flex justify-center items-center flex-col mt-[122px] container mx-auto">
      <Topic />
      <Tab />
      <Footer />
    </main>
  );
}
