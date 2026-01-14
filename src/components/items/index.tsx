import { ItemsList } from "./items-list";

export function Items(){
    return(
        <>
                {/* ======================= ITEMS セクション ======================= */}
        <section
          id="items"
          className="bg-[#F0F0F0] px-10 pb-24 pt-20 text-[#242120]"
        >
          <div className="grid gap-12">
            {/* 左カラム：ABOUT */}
            <div className="text-center relative">
              <p className="relative z-10 mt-6 text-[135px] leading-[1.1] text-[#242120]">
                Lorem Ipsum
              </p>
              <p className="relative z-10 mt-4 text-[105px] leading-[1.35] text-[#242120] whitespace-nowrap">
                consectetur adipisicing
              </p>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="z-1 h-[418px] w-[418px] rounded-full bg-[#F4D6E2]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-end">
            <div className="text-right mt-[130px]">
              <p className="font-['Zen_Kaku_Gothic_New'] text-[90px] font-normal leading-[68px] tracking-normal text-[#433E3D]">Lorem</p>
              <p className="font-['Zen_Kaku_Gothic_New'] text-[90px] font-normal leading-[68px] tracking-normal text-[#242120]">
                Ipsum
              </p>
            </div>
          </div>

          {/* カード 4 枚 */}
          <div className="mt-12 grid gap-10">
         <ItemsList/>
          </div>
        </section>
        </>
    )
}