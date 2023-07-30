import LandingPage from "@/components/LandingPagePost";
import TopStories from "@/components/TopStories";

export default function Home() {
  return (
    <>
      <main className="w-[80vw] h-[90vh] m-auto">
        <LandingPage />
      </main>
      <section id="top-stories" className="w-[80vw] m-auto py-10 h-screen">
        <h1 className="text-3xl font-bold mb-10">Top Stories</h1>
        <TopStories />
      </section>
    </>
  );
}
