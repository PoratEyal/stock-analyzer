import React from 'react';
import styles from './StockInfo.module.css';

type StockInfoProps = {
  name: string;
  price: number;
  change: number;
};

const StockInfo: React.FC<StockInfoProps> = ({ name, price, change }) => {
  return (
    <div className={styles['info-container']}>
      <div className={styles['info-item']}>
        <span className={styles['info-label']}>Name:</span>
        <span className={styles['info-value']}>{name}</span>
      </div>
      <div className={styles['info-item']}>
        <span className={styles['info-label']}>Price:</span>
        <span className={styles['info-value']}>${price.toFixed(2)}</span>
      </div>
      <div className={styles['info-item']}>
        <span className={styles['info-label']}>Change:</span>
        <span className={styles['info-value']} style={{ color: change >= 0 ? 'green' : 'red' }}>
          {change >= 0 ? '+' : ''}{change.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default StockInfo;
