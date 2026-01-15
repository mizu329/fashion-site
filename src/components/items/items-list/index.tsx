import Image from "next/image";

// アイテムデータ
const itemsData = [
  {
    id: 1,
    name: "laboris nisi ut aliquip",
    image: "/assets/item1.png",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    image: "/assets/item2.png",
  },
  {
    id: 3,
    name: "reprehenderit in voluptate",
    image: "/assets/item3.png",
  },
  {
    id: 4,
    name: "laboris nisi ut aliquip",
    image: "/assets/item4.png",
  },
];

// ニュースデータ（アイテムIDで関連付け）
const newsData = [
  {
    id: 101,
    itemId: 1, // laboris nisi ut aliquip に紐づく
    title: "新商品が入荷しました！",
    content: "laboris nisi ut aliquip",
    date: "2024-01-15",
    category: "NEW",
  },
  {
    id: 101,
    itemId: 1, // laboris nisi ut aliquip に紐づく
    title: "新商品が入荷しました！",
    content: "Lorem Ipsum",
    date: "2024-01-15",
    category: "NEW",
  },
  {
    id: 101,
    itemId: 1, // laboris nisi ut aliquip に紐づく
    title: "新商品が入荷しました！",
    content: "reprehenderit in voluptate",
    date: "2024-01-15",
    category: "NEW",
  },
  {
    id: 102,
    itemId: 2, // Lorem Ipsum に紐づく
    title: "特別セール開催中",
    content: "Lorem Ipsum",
    date: "2024-01-14",
    category: "NEW",
  },
  {
    id: 102,
    itemId: 2, // Lorem Ipsum に紐づく
    title: "特別セール開催中",
    content: "reprehenderit in voluptate",
    date: "2024-01-14",
    category: "NEW",
  },
  {
    id: 102,
    itemId: 2, // Lorem Ipsum に紐づく
    title: "特別セール開催中",
    content: "laboris nisi ut aliquip",
    date: "2024-01-14",
    category: "NEW",
  },
  {
    id: 103,
    itemId: 3, // reprehenderit in voluptate に紐づく
    title: "店舗リニューアルオープン",
    content: "Lorem Ipsum",
    date: "2024-01-13",
    category: "NEW",
  },
  {
    id: 103,
    itemId: 3, // reprehenderit in voluptate に紐づく
    title: "店舗リニューアルオープン",
    content: "reprehenderit in voluptate",
    date: "2024-01-13",
    category: "NEW",
  },
  {
    id: 103,
    itemId: 3, // reprehenderit in voluptate に紐づく
    title: "店舗リニューアルオープン",
    content: "laboris nisi ut aliquip",
    date: "2024-01-13",
    category: "NEW",
  },
  {
    id: 104,
    itemId: 4, // laboris nisi ut aliquip に紐づく
    title: "新スタッフ紹介",
    content: "laboris nisi ut aliquip",
    date: "2024-01-12",
    category: "NEW",
  },
  {
    id: 104,
    itemId: 4, // laboris nisi ut aliquip に紐づく
    title: "新スタッフ紹介",
    content: "Lorem Ipsum",
    date: "2024-01-12",
    category: "NEW",
  },
  {
    id: 104,
    itemId: 4, // laboris nisi ut aliquip に紐づく
    title: "新スタッフ紹介",
    content: "reprehenderit in voluptate",
    date: "2024-01-12",
    category: "NEW",
  },
];

export function ItemsList() {
  // アイテムに紐づくニュースを取得する関数
  const getNewsForItem = (itemId: number) => {
    return newsData.filter((news) => news.itemId === itemId);
  };

  return (
    <>
      {/* ======================= ITEMS リスト ======================= */}

      {/* カード - アイテムと紐づくニュース情報 */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {itemsData.map((item) => {
          const itemNews = getNewsForItem(item.id);

          return (
            <article
              key={item.id}
              className="flex flex-col gap-4 md:even:mt-[100px]"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={610}
                  height={610}
                />
                {/* 画像の上に縦の英文字 */}
                <div
                  className="absolute top-4 right-4 text-white font-bold uppercase tracking-wider text-[18px]"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                  }}
                >
                  {item.name.split("").map((char, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        transform: "rotate(90deg)",
                        whiteSpace: "pre",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </div>

              {/* 紐づくニュース情報を表示 */}
              {itemNews.length > 0 && (
                <div className="mt-2 space-y-2">
                  {itemNews.map((news) => (
                    <div key={news.id} className="flex items-center gap-4">
                      <p className="inline-block bg-[#242120] px-3 py-1 text-[0.7rem] tracking-[0.2em] text-white">
                        {news.category}
                      </p>
                      <p className="text-[0.75rem] tracking-[0.2em] text-[#242120]">
                        {news.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
