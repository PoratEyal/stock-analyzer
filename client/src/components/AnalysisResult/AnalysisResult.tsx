import React from 'react';
import styles from './AnalysisResult.module.css';

type AnalysisResultProps = {
  explanation: string;
};

const AnalysisResult: React.FC<AnalysisResultProps> = ({ explanation }) => {
  return (
    <div className={styles.result}>
      <h3>Analysis Result</h3>
      <p>{explanation}</p>
    </div>
  );
};

export default AnalysisResult;
