export function Footer() {
    return (
        <>
      {/* ======================= ギャラリー＋フッター ======================= */}
        <footer className="bg-[#242120] px-10 pb-10 pt-16 text-[#F7F7F7]">
          {/* ギャラリー（5枚） */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll">
              {/* 1セット目 */}
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              {/* 2セット目（無限ループ用） */}
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
              <div className="flex-none w-48 aspect-3/4 rounded-2xl border border-white/50 bg-gradient-to-b from-white/40 to-white/5 cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>

          {/* FOLLOW US & CONTACT */}
          <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* nav */}
            <div className="self-start">
              <p className="text-xs tracking-[0.35em]">Lorem Ipsum</p>
              <div className="mt-4 flex items-center gap-3">
<a href="">ABOUT</a>
<a href="">CONCEPT</a>
<a href="">ITEMS</a>
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
              </div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="mt-10 flex items-center justify-between text-[0.7rem] text-[#F7F7F7]/70">
            <span>©webdesign pro</span>
          </div>
        </footer>
        </>
    )
}