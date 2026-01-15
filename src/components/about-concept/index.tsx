export function AboutConcept() {
  return (
    <>
      {/* ======================= ABOUT / CONCEPT セクション ======================= */}
      {/* ======================= 青色セクション ======================= */}
      <section className="relative bg-[#ACD0F4] px-10 py-20">
        <div className="relative mx-auto max-w-5xl">
          {/* 左側の大きなテキスト */}
          <div className="mb-10">
            <p className="text-[5.6rem] leading-none font-light text-white">
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
            <div className="relative z-10 h-[650px] w-[650px] rounded-full bg-linear-to-br from-white/60 to-white/20 shadow-2xl" />

            {/* 右側のテキスト */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 text-right">
              <p className="text-left">ABOUT</p>
              <p className="text-[5.6rem] leading-none font-light text-white text-left">
                dolore eu <br />
                fugiat nulla
              </p>
              <p className="text-sm leading-relaxed text-left">
                山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。
              </p>
              <div className="mt-4 flex justify-start">
                <button className="h-[100px] w-[100px] rounded-full bg-white px-6 py-2 text-xs text-[#ACD0F4] hover:bg-[#7b9fcc] transition-colors flex items-center justify-center">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="mb-10 text-right">
            <p className="text-[5.6rem] leading-none font-light text-white">
              Lorem
              <br />
              Ipsum
            </p>
          </div>

          {/* 下部の画像とテキスト */}
          <div className="relative mt-10 grid gap-8 md:grid-cols-2">
            {/* 背景の円形装飾 */}
            <div className="absolute -top-20 -right-20 h-[640px] w-[640px] rounded-full bg-white/40 opacity-40" />

            {/* メインの円形画像（擬似） */}
            <div className="relative z-10 ml-auto h-[650px] w-[650px] rounded-full bg-linear-to-br from-white/60 to-white/20 shadow-2xl" />

            {/* 右：テキストエリア */}
            <div className="col-start-1 row-start-1 flex flex-col justify-center space-y-6 text-white">
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
              <div className="mt-4 flex justify-start">
                <button className="h-[100px] w-[100px] rounded-full bg-white px-6 py-2 text-xs text-[#ACD0F4] hover:bg-[#7b9fcc] transition-colors flex items-center justify-center">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
