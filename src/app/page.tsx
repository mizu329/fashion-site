export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] font-['Zen_Kaku_Gothic_New',system-ui,sans-serif] text-[#242120]">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#EDE7C6]">
        {/* ======================= ヘッダー ======================= */}
        <header className="flex items-center justify-between px-10 py-6 text-sm text-[#433E3D]">
          <div className="flex items-center gap-8">
            <span className="tracking-[0.3em]">MENU</span>
            <nav className="hidden gap-8 md:flex">
              <a href="#about" className="tracking-[0.25em]">
                ABOUT
              </a>
              <a href="#concept" className="tracking-[0.25em]">
                CONCEPT
              </a>
              <a href="#items" className="tracking-[0.25em]">
                ITEMS
              </a>
            </nav>
          </div>
          <button className="rounded-full border border-[#433E3D]/40 px-6 py-2 text-xs tracking-[0.25em]">
            ONLINE SHOP
          </button>
        </header>

        {/* ======================= ファーストビュー ======================= */}
        <section className="relative flex flex-1 flex-col gap-10 overflow-hidden px-10 pb-24 pt-6">
          {/* 上部：左のCONCEPT・右の大きなタイポ */}
          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* 左：CONCEPTテキスト */}
            <div className="max-w-xs">
              <p className="text-xs tracking-[0.35em] text-[#433E3D]">
                CONCEPT
              </p>
              <p className="mt-3 text-[1.1rem] leading-[2.7] text-[#433E3D]">
                consectetur adipisicing elit
              </p>
            </div>

            {/* 右：大きなピンク文字 */}
            <div className="text-right md:text-left">
              <p className="text-[3.2rem] leading-[1.1] text-[#F4D6E2] md:text-[4.2rem]">
                dolore eu
                <br />
                fugiat nulla
              </p>
            </div>
          </div>

          {/* 中央：大きなロゴタイポ */}
          <div className="mt-10 text-center md:mt-16">
            <p className="text-[2.8rem] leading-[1.2] text-[#FFFFFF] md:text-[3.6rem]">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>

          {/* 3 枚のメインビジュアル（擬似画像） */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#acd0f4] to-[#7b9fcc]" />
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#f4d6e2] to-[#e6a9c4]" />
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#d7f0da] to-[#9fd7ab]" />
          </div>

          {/* 下部テキスト（Figmaの段落テキスト） */}
          <div className="mt-10 flex flex-col gap-4 text-xs leading-relaxed text-[#433E3D] md:flex-row md:justify-end md:text-sm">
            <p className="max-w-md">
              山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。
              意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、
              安い所へ引き越したくなる。
            </p>
          </div>
        </section>

        {/* ======================= ABOUT / CONCEPT セクション ======================= */}
        <section
          id="about"
          className="relative bg-[#F0F0F0] px-10 pb-24 pt-20 text-[#242120]"
        >
          <div className="grid gap-12 md:grid-cols-[minmax(0,2.2fr)_minmax(0,3fr)]">
            {/* 左カラム：ABOUT */}
            <div>
              <p className="text-xs tracking-[0.35em] text-[#433E3D]">ABOUT</p>
              <p className="mt-6 text-[3.4rem] leading-[1.1] text-[#242120]">
                Lorem Ipsum
              </p>
              <p className="mt-4 text-[2.1rem] leading-[1.35] text-[#242120]">
                consectetur adipisicing
              </p>
              <p className="mt-8 text-xs leading-relaxed text-[#433E3D] md:text-sm">
                山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。
                意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、
                安い所へ引き越したくなる。
              </p>
            </div>

            {/* 右カラム：円＋テキストカード（CONCEPT） */}
            <div className="relative">
              <div className="absolute left-20 top-0 h-52 w-52 -translate-y-10 rounded-full bg-[#F4D6E2]" />
              <div className="relative mt-12 rounded-3xl bg-white/80 p-10 shadow-sm backdrop-blur">
                <p className="text-xs tracking-[0.35em] text-[#433E3D]">
                  CONCEPT
                </p>
                <p className="mt-6 text-[2.4rem] leading-[1.1] text-[#242120]">
                  dolore eu
                  <br />
                  fugiat nulla
                </p>
                <p className="mt-8 text-xs leading-relaxed text-[#433E3D] md:text-sm">
                  山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。
                  意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、
                  安い所へ引き越したくなる。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= ITEMS セクション ======================= */}
        <section
          id="items"
          className="bg-[#F4F4F4] px-10 pb-24 pt-20 text-[#242120]"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.35em] text-[#433E3D]">ITEMS</p>
              <p className="mt-6 text-[2.3rem] leading-[1.2] text-[#242120]">
                Ut enim ad minim veniam
              </p>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#433E3D] md:text-sm">
              山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。
              意地を通せば窮屈だ。とかくに人の世は住みにくい。
          </p>
        </div>

          {/* カード 3 枚 */}
          <div className="mt-12 grid gap-10 md:grid-cols-3">
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
            ].map((item) => (
              <article key={item.title} className="flex flex-col gap-4">
                <div
                  className={`aspect-[4/5] rounded-[2.25rem] bg-gradient-to-b ${item.tone}`}
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
            <div className="relative mb-10 inline-flex items-center gap-6">
              <div className="h-14 w-64 rounded-full bg-[#F4F4F4]" />
              <p className="text-lg tracking-[0.25em] text-[#242120]">
                TOPICS
              </p>
            </div>

            {/* 3つの丸い画像＋キャプション */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="mx-auto aspect-[3/4] w-40 rounded-full bg-gradient-to-b from-[#d8e2f4] to-[#7b9fcc]" />
                <p className="text-center text-xs font-medium text-[#242120]">
                  consectetur adipisicing
                </p>
              </div>
              <div className="space-y-4">
                <div className="mx-auto aspect-[3/4] w-40 rounded-full bg-gradient-to-b from-[#f4d6e2] to-[#e6a9c4]" />
                <p className="text-center text-xs font-medium text-[#242120]">
                  consectetur
                </p>
              </div>
              <div className="space-y-4">
                <div className="mx-auto aspect-[3/4] w-40 rounded-full bg-gradient-to-b from-[#d7f0da] to-[#9fd7ab]" />
                <p className="text-center text-xs font-medium text-[#242120]">
                  commodo consequat
                </p>
              </div>
            </div>

            {/* 下部のテキスト 3 行 */}
            <div className="mt-10 space-y-2 text-xs leading-relaxed text-[#433E3D] md:text-sm">
              <p>山路を登りながら、こう考えた。智に働けば角が立つ。</p>
              <p>山路を登りながら、こう考えた。</p>
              <p>山路を登りながら、こう考えた。智に働けば角が立つ。</p>
            </div>
          </div>
        </section>

        {/* ======================= 横スクロール風テキスト ======================= */}
        <section className="bg-[#F4F4F4] px-10 py-10">
          <div className="overflow-x-auto">
            <div className="inline-flex min-w-full items-center gap-24 whitespace-nowrap py-4 text-[2.4rem] font-light text-[#433E3D] md:text-[3rem]">
              <span>Lorem Ipsum Lorem Ipsum</span>
              <span>Lorem Ipsum Lorem Ipsum</span>
              <span>Lorem Ipsum Lorem Ipsum</span>
            </div>
          </div>
        </section>

        {/* ======================= ギャラリー＋フッター ======================= */}
        <footer className="bg-[#242120] px-10 pb-10 pt-16 text-[#F7F7F7]">
          {/* ギャラリー（5枚） */}
          <div className="grid gap-4 md:grid-cols-5">
            <div className="aspect-[3/4] rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5" />
            <div className="aspect-[3/4] rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5" />
            <div className="aspect-[3/4] rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5" />
            <div className="aspect-[3/4] rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5" />
            <div className="aspect-[3/4] rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5" />
          </div>

          {/* FOLLOW US & CONTACT */}
          <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            {/* FOLLOW US */}
            <div>
              <p className="text-xs tracking-[0.35em]">FOLLOW US</p>
              <div className="mt-4 flex items-center gap-3">
                {["in", "ig", "fb"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F7F7] text-[0.7rem] text-[#2B2B2B]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* CONTACT ブロック */}
            <div className="w-full max-w-md">
              <p className="text-[2.6rem] leading-[1.1]">Lorem ipsum</p>
              <p className="text-[2.6rem] leading-[1.1]">
                dolor sit
                <br />
                amet
              </p>
              <div className="mt-6">
                <div className="flex items-center justify-between border-b border-[#F7F7F7]/70 pb-2 text-sm">
                  <span>CONTACT</span>
                  <span className="text-xs">→</span>
                </div>
                <nav className="mt-4 flex gap-6 text-xs tracking-[0.25em] text-[#F7F7F7]/80">
                  <a href="#about">ABOUT</a>
                  <a href="#concept">CONCEPT</a>
                  <a href="#items">ITEMS</a>
                </nav>
              </div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="mt-10 flex items-center justify-between text-[0.7rem] text-[#F7F7F7]/70">
            <span>©webdesign pro</span>
        </div>
        </footer>
      </main>
    </div>
  );
}
