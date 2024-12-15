import { MdSupervisedUserCircle } from "react-icons/md";
import { ICard } from "@/model/data";

interface ICardProps {
    item: ICard;
}

export default function Card({ item }: ICardProps) {
  return (
    <div className="bg-orange-200 p-5 rounded-lg flex gap-5 cursor-pointer w-full hover:bg-rose-400">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="text-3xl font-medium">{item.title}</span>
        <span className="text-2xl font-medium">{item.number}</span>
        <span className="text-base">
          <span className={item.change > 0 ? "text-lime-700" : "text-red-700"}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};
