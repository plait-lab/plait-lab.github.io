import { NewsItem as NewsItemProps } from "@/content/news";

interface Props extends NewsItemProps {
  last: boolean;
}

const NewsItem: React.FC<Props> = ({ title, date, description, last }) => {
  return (
    <div className="flex shrink-0 basis-64 pr-2 group-last:pr-0">
      <svg viewBox="0 0 20 20" width={20} height={20} className="shrink-0">
        <circle
          cx="10"
          cy="10"
          r="3"
          fill="#E63366"
          stroke="#E63366"
          strokeWidth={2}
        />
        <circle
          cx="10"
          cy="10"
          r="3"
          fill="#FFFFFF"
          stroke="#E63366"
          strokeWidth={2}
          style={{ transformOrigin: "10px 10px" }}
          className="pulse"
        />
      </svg>
      <div className="stack stack-xs">
        {last ? (
          <p className="text-sm font-bold">{title}</p>
        ) : (
          <div className="flex items-center">
            <p className="pr-1 text-sm font-bold">{title}</p>
            <div className="timeline -mr-2 h-1 w-full flex-1" />
          </div>
        )}
        <p className="text-xs font-bold text-slate-600">
          {date.toLocaleDateString()}
        </p>
        {description}
      </div>
    </div>
  );
};

export default NewsItem;
