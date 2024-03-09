import React, { useRef, useEffect } from 'react';
import style from '@/component/content/index.module.css';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useData } from '@/context/dataContext';
import { width } from '@mui/system';

export default function ChartView() {
  const { data, year } = useData();
  const tableRef = useRef(null);
  useEffect(()=>{
    const dom = tableRef?.current;
    // @ts-ignore
    if (dom.scrollWidth) {
      // @ts-ignore
      dom.scrollLeft = dom.scrollWidth;
    }
  }, [data])

  return (
    <div className={style.pane}>
      <div className={style.paneHeader}>
        <Button size="large" variant="contained">详细数据</Button>
      </div>
      <TableContainer ref={tableRef} component={Paper} className={style.table}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={style.tableHeader}>年度月份</TableCell>
                {
                  data?.map(item=> <TableCell key={item.time} sx={{ minWidth: 90 }}>{item.time}</TableCell>)
                }
              </TableRow>
              <TableRow>
                <TableCell className={style.tableHeader}>每月营收</TableCell>
                {
                  data?.map(item=> <TableCell key={item.time}>{item.monthMoney}</TableCell>)
                }
              </TableRow>
              <TableRow>
                <TableCell className={style.tableHeader}>单月营收年增率</TableCell>
                {
                  data?.map(item=> <TableCell key={item.time}>{ Math.floor(Math.random() * 100) / 100 + '%'}</TableCell>)
                }
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}
