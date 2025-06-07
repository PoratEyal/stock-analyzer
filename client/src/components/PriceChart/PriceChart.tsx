import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './PriceChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type PriceChartProps = {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
};

const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  return (
    <div className={styles['chart-container']}>
      <h2 className={styles['chart-title']}>Price Chart</h2>
      <div className={styles['chart']}>
        <Line data={data} />
      </div>
    </div>
  );
};

export default PriceChart;
