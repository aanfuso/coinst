import { LineChart } from '@mui/x-charts';


const KEY_TO_LABEL = {
  price: 'Current Price',
};

export default function ChartPrice({ updates }) {
  return (
    <LineChart
      loading={updates.length === 0}
      xAxis={[
        {
          dataKey: 'time',
          valueFormatter: (value) => new Date(value).toLocaleTimeString(),
        },
      ]}
      slotProps={{
        loadingOverlay: { message: 'Data should be available soon.' },
        noDataOverlay: { message: 'Select some data to display.' },
      }}
      axisHighlight={{
        x: 'line',
        y: 'line',
      }}
      series={Object.keys(KEY_TO_LABEL).map((key) => ({
        dataKey: key,
        label: KEY_TO_LABEL[key],
        showMark: false,
        color: '#EDC949',
        valueFormatter: (value) => `$${value}`,
      }))}
      dataset={updates}
      grid={{ vertical: true, horizontal: true }}
      height={500}
    />
  );
}
