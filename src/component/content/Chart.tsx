import React, { useState, useMemo, useEffect, useContext } from 'react';
import style from "./index.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button, { ButtonProps } from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChartView from '@/component/content/chartView';
import { useDataDispatch } from '@/context/dataContext';

const emptyArr = new Array(8 * 12).fill({});
const CurrentData = emptyArr.map((item, index)=>{
  const currentDate = new Date();
  return {
    time: currentDate.getMonth() + 1 - index % 12 > 0
      ? (currentDate.getFullYear() - Math.floor(index / 12)) + '-' + (currentDate.getMonth() + 1 - index % 12)
      : (currentDate.getFullYear() - Math.ceil(index / 12)) + '-' + (currentDate.getMonth() + 1 - index % 12 + 12),
    '每月营收': Math.floor(Math.random() * 100) * 10000,
    '月均价': Math.floor(Math.random() * 1000)
  }
})
export default function Chart() {
  const dispatch = useDataDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [year, setYear] = useState('5');
  const [btnText, setBtnText] = useState('近五年');
  const [data, setData] = useState([]);

  useEffect(()=>{
    const newData = CurrentData.filter((item, index) => index < 12 * Number(year)).toReversed();
    // @ts-ignore
    setData(newData)
    // @ts-ignore
    dispatch({ type: 'changeYear', data: newData.map(i=>{ return { time: i.time, monthMoney: i['每月营收'] }}), year })
  }, [year]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.id) {
      setYear(event.currentTarget.id);
      setBtnText(event.currentTarget.innerText)
    }
    setAnchorEl(null);
  };
  const View = useMemo(()=>{
    return <ChartView year={year} data={data} />
  }, [year, data])


  return (
    <div className={style.pane}>
      <div className={style.paneHeader}>
        <div>
          <Button
            size="large"
            variant="contained"
          >
            每月营收
          </Button>
        </div>
        <div>
          <Button
            size="large"
            variant="contained"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {btnText}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem id="3" onClick={handleClose}>近三年</MenuItem>
            <MenuItem id="5" onClick={handleClose}>近五年</MenuItem>
            <MenuItem id="8" onClick={handleClose}>近八年</MenuItem>
          </Menu>
        </div>
      </div>
      {View}
    </div>
  );
}
