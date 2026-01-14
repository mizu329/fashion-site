
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] font-['Zen_Kaku_Gothic_New',system-ui,sans-serif] text-[#242120]">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#EDE7C6]">
        
<Hero />
        {/* ======================= 青色セクション ======================= */}
        <section className="relative bg-[#ACD0F4] px-10 py-20">
          <div className="relative mx-auto max-w-5xl">
            {/* 左側の大きなテキスト */}
            <div className="mb-10">
              <p className="text-[5.6rem] leading-[1] font-light text-white">
                Lorem
                <br />
                Ipsum
              </p>
            </div>

            {/* 中央の大きな円形画像エリア */}
            <div className="relative flex items-center justify-center py-20">
              {/* 背景の円形装飾 */}
              <div className="absolute left-0 top-0 h-[640px] w-[640px] rounded-full bg-white/40 opacity-40" />

              {/* メインの円形画像（擬似） */}
              <div className="relative z-10 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-white/60 to-white/20 shadow-2xl" />

              {/* 右側のテキスト */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <p className="text-[5.6rem] leading-none font-light text-white">
                  Lorem
                  <br />
                  Ipsum
                </p>
              </div>
            </div>

            {/* 下部の画像とテキスト */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {/* 左：画像エリア */}
              <div className="relative">
                <div className="aspect-[683/597] rounded-3xl bg-gradient-to-br from-white/50 to-white/20 shadow-lg" />
              </div>

              {/* 右：テキストエリア */}
              <div className="flex flex-col justify-center space-y-6 text-white">
                <p className="text-xs tracking-[0.35em] opacity-80">CONCEPT</p>
                <p className="text-[2.4rem] leading-[1.1]">
                  dolore eu
                  <br />
                  fugiat nulla
                </p>
                <p className="text-sm leading-relaxed opacity-90">
                  山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。
                  意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、
                  安い所へ引き越したくなる。
                </p>
              </div>
            </div>

            {/* 矢印アイコン（右下） */}
            <div className="mt-10 flex justify-end">
              <div className="h-8 w-48 rounded-full bg-white/20" />
            </div>
          </div>
        </section>

        {/* ======================= ABOUT / CONCEPT セクション ======================= */}
        <section
          id="about"
          className="relative bg-[#F0F0F0] px-10 pb-24 pt-20 text-[#242120]"
        >
          <div className="grid gap-12">
            {/* 左カラム：ABOUT */}
            <div className="text-center">
              <p className="mt-6 text-[3.4rem] leading-[1.1] text-[#242120]">
                Lorem Ipsum
              </p>
              <p className="mt-4 text-[2.1rem] leading-[1.35] text-[#242120]">
                consectetur adipisicing
              </p>
            </div>
          </div>
        </section>

        {/* ======================= ITEMS セクション ======================= */}
        <section
          id="items"
          className="bg-[#F0F0F0] px-10 pb-24 pt-20 text-[#242120]"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-end">
            <div className="text-right">
              <p className="font-['Zen_Kaku_Gothic_New'] text-[90px] font-normal leading-[68px] tracking-normal text-[#433E3D]">Lorem</p>
              <p className="font-['Zen_Kaku_Gothic_New'] text-[90px] font-normal leading-[68px] tracking-normal text-[#242120]">
                Ipsum
              </p>
            </div>
          </div>

          {/* カード 4 枚 */}
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {[
              {
                title: "laboris nisi ut aliquip",
                label: "nulla pariatur",
                tone: "from-[#c9d8f2] to-[#7b9fcc]",
              },
              {
                title: "Lorem Ipsum",
                label: "nulla pariatur",
                tone: "from-[#f4d6e2] to-[#e6a9c4]",
              },
              {
                title: "reprehenderit in voluptate",
                label: "Ut enim ad minim veniam",
                tone: "from-[#d7f0da] to-[#9fd7ab]",
              },
              {
                title: "laboris nisi ut aliquip",
                label: "nulla pariatur",
                tone: "from-[#f0d8c4] to-[#d4a574]",
              },
            ].map((item) => (
              <article key={item.title} className="flex flex-col gap-4">
                <div
                  className={`aspect-4/5 rounded-[2.25rem] bg-gradient-to-b ${item.tone}`}
                />
                <div className="space-y-1 text-xs">
                  <p className="inline-block rounded-full bg-[#242120] px-3 py-1 text-[0.7rem] tracking-[0.2em] text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[0.75rem] tracking-[0.2em] text-[#242120]">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

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
