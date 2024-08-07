import { LineChart } from '@mui/x-charts';


const KEY_TO_LABEL = {
  price: 'Price',
};

export default function ChartPrice({ updates }) {
  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'time',
          valueFormatter: (value) => new Date(value).toLocaleTimeString(),
        },
      ]}
      series={Object.keys(KEY_TO_LABEL).map((key) => ({
        dataKey: key,
        label: KEY_TO_LABEL[key],
        showMark: false,
      }))}
      dataset={updates}
      grid={{ vertical: true, horizontal: true }}
      height={500}
    />
  );
}
