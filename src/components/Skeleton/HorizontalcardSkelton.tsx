import React from 'react';
import { Skeleton, Card, Button } from 'antd';

interface HorizontalcardSkeltonProps {
  rows: number;
  columns: number;
}

const HorizontalcardSkelton: React.FC<HorizontalcardSkeltonProps> = ({ rows }) => {
  return (
    <div className="skeleton-container" style={{ gap: '1rem', display: 'flex', flexDirection: 'column' }}>
      {Array.from({ length: rows }).map((_, index) => (
        <Card
          key={index}
          style={{
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0',
          }}
        >
          <Skeleton active paragraph={{ rows: 1 }} title={{ width: '70%' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
            <Skeleton.Button active style={{ width: '30%', height: '1.5rem', borderRadius: '4px' }} />
            <Skeleton.Input active style={{ width: '15%', height: '1.5rem', borderRadius: '4px' }} />
          </div>

          <Skeleton
            active
            title={false}
            paragraph={{
              rows: 2,
              width: ['50%', '80%'],
            }}
            style={{ marginTop: '1rem' }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem',
            }}
          >
            <Button
              disabled
              style={{
                width: '120px',
                height: '36px',
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
                borderColor: '#d9d9d9',
              }}
            />
            <Button
              disabled
              style={{
                width: '120px',
                height: '36px',
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
                borderColor: '#d9d9d9',
              }}
            />
          </div>

          <Skeleton.Input active style={{ width: '40%', marginTop: '1rem' }} />
        </Card>
      ))}
    </div>
  );
};

export default HorizontalcardSkelton;
