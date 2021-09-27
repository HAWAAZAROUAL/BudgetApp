import { BarChart } from 'reaviz';

const categoryChart = () => (
  <BarChart
    height={300}
    width={300}
    data={[
      { key: 'Category1', data: 100 },
      { key: 'Category2', data: 500 },
      { key: 'Category3', data: 250}
    ]}
  />
);

export default categoryChart;