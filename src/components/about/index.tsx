"use client";

import styles from './index.module.css';
import Image from 'next/image';

export function About() {

    return(
        <>
         {/* ======================= TOPICS セクション ======================= */}
        <section className={`relative bg-[#F4F4F4] px-10 pb-[180px] pt-[180px] overflow-hidden ${styles.section}`}>
            <h1 
              className={`text-[186px] tracking-[0.25em] text-white inline-block ${styles.scrollText}`}
            >
              Lorem Ipsum Lorem Ipsum &nbsp;&nbsp;&nbsp;&nbsp; Lorem Ipsum Lorem Ipsum
            </h1>
            <div className={`flex ${styles.container}`}>
                <div className={`md:w-[60%] ${styles.image}`}>
                    <Image className={styles.loop} src="/assets/loop.png" alt="" width={610} height={610}/>
                    <Image className={styles.mia} src="/assets/MIA SAITO.png" alt="" width={478} height={478} />
                </div>
                <div className={`md:w-[40%] flex flex-col justify-end ${styles.text}`}>
                    <p>斎藤 ミア  /  MIA SAITO</p>
                    <p>山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。住みにくさが高じると、安い所へ引き越したくなる。</p>
                </div>
            </div>
          <div className="mt-[210px] mx-auto max-w-4xl rounded-[2.5rem] border border-[#242120] bg-[#F4F3EF] px-10 py-12">
            {/* 見出し */}
            <div className="relative mb-10 flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute -translate-y-[50px] h-14 w-fit rounded-full bg-[#F4F4F4] flex items-center justify-center px-3">
                  <p className="text-lg tracking-[0.25em] text-[#242120]">TOPICS</p>
                </div>
              </div>
            </div>

            {/* 3つの丸い画像＋キャプション */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <Image src="/assets/topic1.png" alt="" width={240} height={280} />
                <p className="text-center text-xs font-medium text-[#242120]">
                  consectetur adipisicing
                </p>
                <div className="mt-2 space-y-1 text-xs leading-relaxed text-[#433E3D] md:text-sm">
                  <p>山路を登りながら、こう考えた。智に働けば角が立つ。</p>
                </div>
              </div>
              <div className="space-y-4">
                <Image src="/assets/topic2.png" alt="" width={240} height={280} />
                <p className="text-center text-xs font-medium text-[#242120]">
                  Lorem Ipsum
                </p>
                <div className="mt-2 space-y-1 text-xs leading-relaxed text-[#433E3D] md:text-sm">
                  <p>山路を登りながら、こう考えた。</p>
                </div>
              </div>
              <div className="space-y-4">
                <Image src="/assets/topic3.png" alt="" width={240} height={280} />
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
              <button className="rounded-full bg-[#242120] w-[100px] h-[100px] text-sm tracking-[0.25em] text-[#F4F3EF] transition-colors hover:bg-[#433E3D] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        </>
    )
}