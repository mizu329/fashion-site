import Image from "next/image";
import styles from "./index.module.css";

export function Footer() {
  return (
    <>
      {/* ======================= ギャラリー＋フッター ======================= */}
      <footer className="bg-[#F4F4F4]  pb-10 text-[#242120]">
        {/* ギャラリー（5枚） */}
        <div className="overflow-hidden">
          <div className={`flex ${styles.animateScroll}`}>
            {/* 1セット目 */}
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item1.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item2.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item3.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item4.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item5.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            {/* 2セット目（無限ループ用） */}
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item1.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item2.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item3.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item4.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
            <div className="flex-none w-48 aspect-3/4 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/assets/footer-item5.png"
                alt=""
                width={610}
                height={610}
              />
            </div>
          </div>
        </div>

        <div className="px-10">
          {/* FOLLOW US & CONTACT */}
          <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* nav */}
            <div className="self-start">
              <p className="text-[40px]">Lorem Ipsum</p>
              <div className="mt-4 flex items-center gap-[30px]">
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
                <div className="flex items-center justify-between border-b border-[#242120]/70 pb-2 text-sm">
                  <span>CONTACT</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* コピーライト */}
          <div className="mt-10 flex justify-end text-[14px] text-[#242120]/70">
            <span>©webdesign pro</span>
          </div>
        </div>
      </footer>
    </>
  );
}
