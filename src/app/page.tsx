
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { AboutConcept } from "@/components/about-concept";
import { Items } from "@/components/items";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] font-['Zen_Kaku_Gothic_New',system-ui,sans-serif] text-[#242120]">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#EDE7C6]">
        
<Hero />
        <AboutConcept />

       <Items />


        {/* ======================= TOPICS セクション ======================= */}
        <section className="bg-[#F0F0F0] px-10 pb-24 pt-20">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#242120] bg-[#F4F3EF] px-10 py-12">
            {/* 見出し */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-fit rounded-full bg-[#F4F4F4] flex items-center justify-center px-3">
                  <p className="text-lg tracking-[0.25em] text-[#242120]">TOPICS</p>
                </div>
              </div>
            </div>

            {/* 3つの丸い画像＋キャプション */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="mx-auto aspect-[3/4] w-40 rounded-full bg-gradient-to-b from-[#d8e2f4] to-[#7b9fcc]" />
                <p className="text-center text-xs font-medium text-[#242120]">
                  consectetur adipisicing
                </p>
                <div className="mt-2 space-y-1 text-xs leading-relaxed text-[#433E3D] md:text-sm">
                  <p>山路を登りながら、こう考えた。智に働けば角が立つ。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="mx-auto aspect-[3/4] w-40 rounded-full bg-gradient-to-b from-[#f4d6e2] to-[#e6a9c4]" />
                <p className="text-center text-xs font-medium text-[#242120]">
                  Lorem Ipsum
                </p>
                <div className="mt-2 space-y-1 text-xs leading-relaxed text-[#433E3D] md:text-sm">
                  <p>山路を登りながら、こう考えた。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="mx-auto aspect-[3/4] w-40 rounded-full bg-gradient-to-b from-[#d7f0da] to-[#9fd7ab]" />
                <p className="text-center text-xs font-medium text-[#242120]">
                  velit esse
                </p>
                <div className="mt-2 space-y-1 text-xs leading-relaxed text-[#433E3D] md:text-sm">
                  <p>山路を登りながら、こう考えた。智に働けば角が立つ。</p>
                </div>
              </div>
            </div>

            {/* 一覧に行くボタン */}
            <div className="mt-10 flex justify-center">
              <button className="rounded-full bg-[#242120] px-6 py-3 text-sm tracking-[0.25em] text-[#F4F3EF] transition-colors hover:bg-[#433E3D] flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                一覧に行く
              </button>
            </div>
          </div>
        </section>


<Footer />
      </main>
    </div>
  );
}
