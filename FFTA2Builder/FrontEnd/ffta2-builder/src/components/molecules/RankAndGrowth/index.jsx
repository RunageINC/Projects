import { Progress } from "@/components/ui/progress";

import "./index.css";

export const RankAndGrowth = ({
  rank,
  hasRank = true,
  growth,
  hasProgress = true,
}) => (
  <div className="flex flex-col gap-3 rank-and-growth-container">
    <div className="rank-container">
      {hasRank && (
        <>
          <span className="rank-title">Rank: </span>
          <div className={`rank-${String(rank).toLowerCase()}`}>{rank}</div>
        </>
      )}
      {!hasRank && (
        <>
          <span className="rank-title">Value: </span>
          <div>{rank}%</div>
        </>
      )}
    </div>
    <div className="growth-container">
      <span className="growth-title">Growth: </span>
      {hasProgress && (
        <div>
          <span>+ {growth}</span>
          <Progress
            value={growth * 10}
            className="w-[100px] h-[10px]"
          ></Progress>
        </div>
      )}
      {!hasProgress && (
        <div>
          <span>{growth}%</span>
        </div>
      )}
    </div>
  </div>
);

{
  /* <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
    >
        <PieChart>
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
        />
        <Pie
            data={[
            {
                text: "spd",
                value: job.spd,
                fill: "#08a1bf",
            },
            {
                text: "missing",
                value: 100 - job.spd,
                fill: "#ccc",
            },
            ]}
            dataKey="value"
            nameKey="text"
            innerRadius={60}
        />
        </PieChart>
    </ChartContainer> */
}
