import { PieChart } from 'reaviz';

const Pie = () => (

  <PieChart
    height={300}
    width={300}
    data={[
      { key: 'Bread', data: 25 },
      { key: 'Eggs', data: 13 },
      { key: 'Cheese', data: 13 },
    ]}
    
  />
);

export default Pie;