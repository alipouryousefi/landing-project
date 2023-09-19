import { Footer, Tab, Topic } from "@/components";

export default function Home() {
  return (
    <main className="px-12 flex justify-center items-center flex-col mt-[122px]">
      <Topic />
      <Tab />
      <Footer />
    </main>
  );
}
