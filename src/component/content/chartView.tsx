import React, { useState, useEffect } from 'react';
import { DualAxes, DualAxesConfig } from '@ant-design/plots';

export default function ChartView({ year, data }: ContentProps) {

  const config = {
    data: [data, data],
    xField: 'time',
    yField: ['每月营收', '月均价'],
    xAxis: {
      tickCount: Number(year) + 1,
    },
    yAxis: {
      // 格式化左坐标轴
      '每月营收': {
        min: 0,
        label: {
          formatter: (val: string) => `${val}`,
        },
      },
      '月均价': {
        min: 0,
        label: {
          formatter: (val: string) => `${val}`,
        },
      },
    },
    geometryOptions: [
      {
        geometry: 'column',
        color: '#f2ac00',
        columnWidthRatio: 0.4,
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#dc3e45',
      },
    ],
    // 更改柱线交互，默认为 [{type: 'active-region'}]
    interactions: [
      {
        type: 'element-highlight',
      },
      {
        type: 'active-region',
      },
    ],

  };
  // @ts-ignore
  return (
    <div style={{ marginTop: 20 }}>
      <DualAxes {...config} />
    </div>
  )

};

interface ContentProps {
  year: string;
  data: any;
}
