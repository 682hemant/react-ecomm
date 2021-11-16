import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getBuyItems } from "../../redux/products/actions";
import { Charts } from "../../components/charts/Charts";
import { chartsConsts } from "../../constants/charts";

const ChartContainer = () => {
  const dispatch = useDispatch();

  const boughtItems = useSelector((state) => state.prodReducer.buyItems);

  useEffect(() => {
    dispatch(getBuyItems());
  }, []);

  let itemsQuantity = {};
  for (let i = 0; i < boughtItems.length; i++) {
    if (!itemsQuantity[boughtItems[i].text]) {
      itemsQuantity[boughtItems[i].text] = 1;
    } else {
      itemsQuantity[boughtItems[i].text] += 1;
    }
  }
  let result = Object.keys(itemsQuantity).map((key) => [
    key,
    itemsQuantity[key],
  ]);
  let data = [["Items", "Items bought"], ...result];
  return (
    <>
      <Heading4 className="ms-3">{chartsConsts.chartHeading}</Heading4>
      <div className="d-flex">
        <Charts
          chartName="PieChart"
          data={data}
          title="Items summary in percentage"
        />
        <Charts
          chartName="BarChart"
          data={data}
          title="Items summary in quantity"
        />
      </div>
    </>
  );
};

export default React.memo(ChartContainer);

const Heading4 = styled.h4`
  padding-top: 5rem;
`;
