export function Hero() {
    return (
        <>
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
          <button className="rounded-full px-6 py-2 text-xs tracking-[0.25em]">
            ONLINE SHOP
          </button>
        </header>

        {/* ======================= ファーストビュー ======================= */}
        <section className="relative flex flex-1 flex-col gap-10 overflow-hidden px-10 pb-24 pt-6">
          {/* 中央：大きなロゴタイポ */}
          <div className="mt-10 text-center md:mt-16">
            <p className="text-[2.8rem] leading-[1.2] text-[#FFFFFF] md:text-[3.6rem]">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>

          {/* 3 枚のメインビジュアル（擬似画像） */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="aspect-4/5 rounded-3xl bg-gradient-to-b from-[#acd0f4] to-[#7b9fcc]" />
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#f4d6e2] to-[#e6a9c4]" />
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#d7f0da] to-[#9fd7ab]" />
          </div>

          {/* 下部テキスト（Figmaの段落テキスト） */}
          <div className="mt-10 flex flex-col gap-4 text-xs leading-relaxed text-[#433E3D] md:flex-row md:justify-center md:text-sm">
            <p className="max-w-md text-center">consectetur adipisicing elit</p>
          </div>
        </section>
        </>
    );
}