import { useState } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import StockInfo from './components/StockInfo/StockInfo';
import PriceChart from './components/PriceChart/PriceChart';
import AnalysisResult from './components/AnalysisResult/AnalysisResult';
import useStock from './hooks/useStock';

export default function App() {
  const [ticker, setTicker] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<{ explanation: string; analyzedImage?: string; recommendation?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const { stockData, fetchStockData } = useStock();

  const onSearch = (value: string) => {
    const t = value.toUpperCase();
    setTicker(t);
    fetchStockData(t);
    setAnalysis(null);
  };

  const runDeepAnalysis = async () => {
    if (!ticker) return;
    setLoading(true);
    try {
      const res = await fetch('/.netlify/functions/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticker }),
      });
      const data = await res.json();
      setAnalysis(data);
    } catch (err) {
      alert('Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <SearchBar onSearch={onSearch} />

      {ticker && stockData && (
        <>
          <StockInfo name={stockData.name} price={stockData.price} change={stockData.change} />
          <PriceChart data={stockData.chartData} />

          <button className="primary-btn" disabled={loading} onClick={runDeepAnalysis}>
            {loading ? 'Analyzing…' : 'Deep Analysis'}
          </button>
        </>
      )}

      {analysis && <AnalysisResult explanation={analysis.explanation} />}
    </div>
  );
}
