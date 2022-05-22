import { NewsCard } from "../organisms/News/NewsCard";

const news = {
  title: "サイト開設のお知らせ",
  contents: "本日ホームページを開設致しました。よろしくおねがいします。",
  image: "https://source.unsplash.com/_Zua2hyvTBk"
};

export const Home = () => {
  return (
    <div>
      <NewsCard news={news} />
    </div>
  );
};
