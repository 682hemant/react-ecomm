import React from "react";
import { Chart } from "react-google-charts";

export const Charts = ({ chartName, data, title }) => {
  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType={chartName}
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title: title,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};
