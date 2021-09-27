import { PieChart } from 'reaviz';

const Pie = (props) => (

  <PieChart
    height={300}
    width={300}
    data={[
      { key: 'Bacon', data: 13 },
      { key: 'Eggs', data: 13 },
      { key: 'Cheese', data: 13 },
    ]}
  />
);

export default Pie;