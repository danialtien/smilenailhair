import Chart from "@/components/dashboard/chart/chart";
import Card from "@/components/dashboard/card/card";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Transactions from "@/components/dashboard/transactions/transactions";

import { cards } from "@/model/data";

export default function Dashboard() {
    return (
        <main className="flex gap-5 mt-5">
            <div className="flex flex-col w-4/6 gap-5">
                <div className="flex gap-5 justify-between">
                    {cards.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className="flex w-2/6">
                <Rightbar />
            </div>
        </main>
    );
}