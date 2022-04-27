import classes from "./Chart.module.css";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Chart({ superBeingPowerstats }) {
  const superBeingPowerStats = [
    {
      name: "Combat",
      Percent: superBeingPowerstats.combat,
    },
    {
      name: "Durability",
      Percent: superBeingPowerstats.durability,
    },
    {
      name: "Intelligence",
      Percent: superBeingPowerstats.intelligence,
    },
    {
      name: "Power",
      Percent: superBeingPowerstats.power,
    },
    {
      name: "Speed",
      Percent: superBeingPowerstats.speed,
    },
    {
      name: "Strength",
      Percent: superBeingPowerstats.strength,
    },
  ];

  return (
    <div className={classes.chart}>
      <h3 className={classes.chartHeading}>POWER STATISTICS</h3>
      <ResponsiveContainer aspect={2 / 1}>
        <BarChart className={classes.barChart} data={superBeingPowerStats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]}></YAxis>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="Percent" fill="#f55353" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
