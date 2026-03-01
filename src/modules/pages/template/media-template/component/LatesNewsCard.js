export const HorizontalCard = ({ image, title, profile, author, days, desc }) => {
  return (
    <div className="news-card">
      <div className="thumbnail">
        <img src={image} alt="news-img" />
      </div>

      <div className="content">
        <h1 className="text-xl">{title}</h1>
        <div className="flex gap-4 items-center">
          <img src={profile} className="h-8 w-8 rounded-full" alt="pf" />
          <p>
            {author} | {days} days ago
          </p>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};
