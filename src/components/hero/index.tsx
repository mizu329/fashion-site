import { useState } from "react";

export function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            {/* ヘッダー部分 */}
            <header className="flex items-center justify-between px-10 py-6 text-sm text-[#433E3D]">
                <div className="relative flex items-center gap-8">
                    <button
                        type="button"
                        className="tracking-[0.3em]"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        MENU
                    </button>
                    <nav
                        className={`absolute left-0 top-full z-20 mt-3 flex flex-col gap-4 rounded-2xl bg-[#EDE7C6] px-6 py-4 text-xs shadow-md transition-opacity md:static md:mt-0 md:flex-row md:items-center md:bg-transparent md:px-0 md:py-0 md:text-sm md:shadow-none ${
                            isMenuOpen
                                ? "pointer-events-auto opacity-100"
                                : "pointer-events-none opacity-0"
                        }`}
                    >
                        <a
                            href="#about"
                            className="tracking-[0.25em]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ABOUT
                        </a>
                        <a
                            href="#concept"
                            className="tracking-[0.25em]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            CONCEPT
                        </a>
                        <a
                            href="#items"
                            className="tracking-[0.25em]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ITEMS
                        </a>
                    </nav>
                </div>
                <h1>Lorem Ipsum</h1>
                <button className="rounded-full px-6 py-2 text-xs tracking-[0.25em]">
                    ONLINE SHOP
                </button>
            </header>

            {/* ファーストビュー */}
            <section className="relative flex flex-1 flex-col gap-10 overflow-hidden px-10 pb-24 pt-6">
                {/* ナビゲーションセクション */}
                <div className="mt-10 flex justify-center gap-16 text-[#433E3D]">
                    <p className="font-['Zen_Kaku_Gothic_New'] text-[18px] font-normal leading-[68px] tracking-normal">ABOUT</p>
                    <p className="font-['Zen_Kaku_Gothic_New'] text-[18px] font-normal leading-[68px] tracking-normal">CONCEPT</p>
                    <p className="font-['Zen_Kaku_Gothic_New'] text-[18px] font-normal leading-[68px] tracking-normal">ITEMS</p>
                </div>

                <div className="mt-10 grid gap-12 md:grid-cols-[minmax(0,2.2fr)_minmax(0,3fr)]">
                    {/* 左カラム：ABOUT */}
                    <div className="text-center">
                        <p className="text-xs tracking-[0.35em] text-[#433E3D]">ABOUT</p>
                        <p className="mt-6 text-[3.4rem] leading-[1.1] text-[#242120]">
                            Lorem Ipsum
                        </p>
                        <p className="mt-4 text-[2.1rem] leading-[1.35] text-[#242120]">
                            consectetur adipisicing
                        </p>
                    </div>
                    
                    {/* 右カラム：コンテンツ */}
                    <div className="flex flex-col gap-10">
                        <div className="text-right md:text-left">
                            <p className="text-[3.2rem] leading-[1.1] text-[#F4D6E2] md:text-[4.2rem]">
                                dolore eu
                                <br />
                                fugiat nulla
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center md:mt-16">
                    <p className="text-[2.8rem] leading-[1.2] text-[#FFFFFF] md:text-[3.6rem]">
                        Lorem Ipsum Lorem Ipsum
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                    <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#acd0f4] to-[#7b9fcc]" />
                    <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#f4d6e2] to-[#e6a9c4]" />
                    <div className="aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#d7f0da] to-[#9fd7ab]" />
                </div>

                <div className="mt-10 flex flex-col gap-4 text-xs leading-relaxed text-[#433E3D] md:flex-row md:justify-end md:text-sm">
                    <p className="max-w-md">
                        山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。
                        意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、
                        安い所へ引き越したくなる。
                    </p>
                </div>
            </section>
        </>
    );
}