import style from "./index.module.css";
import React from 'react';
import Menu from '@/component/content/Menu';
import Chart from '@/component/content/Chart';
import ChartTable from '@/component/content/ChartTable';
import { DataProvider } from '@/context/dataContext';

export default function Content({ title }: ContentProps) {
  return (
    <DataProvider>
    <div className={style.content}>
      <Menu />
      <div className={style.pane}>{title}</div>
      <Chart />
      <ChartTable />
    </div>
    </DataProvider>
  );
}

interface ContentProps {
  title: string;
}
