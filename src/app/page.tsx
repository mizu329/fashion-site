
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutConcept } from "@/components/about-concept";
import { Items } from "@/components/items";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] font-['Zen_Kaku_Gothic_New',system-ui,sans-serif] text-[#242120]">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#EDE7C6]">
        
<Hero />
        <AboutConcept />

       <Items />


       <About />


<Footer />
      </main>
    </div>
  );
}
