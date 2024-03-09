import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import style from '@/component/content/index.module.css';

export default function Menu() {
  const [activeId, setActiveId] = useState('1');
  const [child, setChild] = useState('11')

  // 菜单数据   ps: icon没有切图
  const menuList: TabObj[] = [
    {
      id: '0',
      label: '最新動態',
      icon: <FavoriteIcon />,
    },
    {
      id: '1',
      label: '財務報表',
      icon: <FavoriteIcon color="primary" />,
    },
    {
      id: '2',
      label: '安全性分析',
      icon: <FavoriteIcon color="secondary" />,
    },
    {
      id: '3',
      label: '成長力分析',
      icon: <FavoriteIcon color="success" />,
    },
    {
      id: '4',
      label: '價值評估',
      icon: <FavoriteIcon color="action" />,
    },
    {
      id: '5',
      label: '董監與籌碼',
      icon: <FavoriteIcon color="disabled"  />,
    },
    {
      id: '6',
      label: '關鍵指標',
      icon:<FavoriteIcon sx={{ color: pink[500] }} />,
    },
    {
      id: '7',
      label: '產品組合',
      icon: <FavoriteIcon sx={{ color: pink[900] }} />,
    }
  ];
  // 子菜单数据
  const childList: TabObj[] = [
    {
      id: '11',
      father: '1',
      label: '每月營收',
    },
    {
      id: '12',
      father: '1',
      label: '每股盈餘',
    },
    {
      id: '13',
      father: '1',
      label: '每股淨值',
    },
    {
      id: '14',
      father: '1',
      label: '損益表',
    },
    {
      id: '15',
      father: '1',
      label: '總資產',
    },
    {
      id: '21',
      father: '2',
      label: '利潤比率',
    },
    {
      id: '22',
      father: '2',
      label: '營業費用率拆解',
    },
    {
      id: '23',
      father: '2',
      label: '業外佔稅前淨利比例',
    },
    {
      id: '24',
      father: '2',
      label: 'ROE / ROA',
    },
    {
      id: '25',
      father: '2',
      label: '杜邦分析',
    },
    {
      id: '31',
      father: '3',
      label: '財務結構比率',
    },
    {
      id: '32',
      father: '3',
      label: '流速動比率',
    },
    {
      id: '33',
      father: '3',
      label: '利息保障倍數',
    },
    {
      id: '34',
      father: '3',
      label: '現金流量分析',
    },
    {
      id: '35',
      father: '3',
      label: '盈餘再投資比率',
    },
    {
      id: '41',
      father: '4',
      label: '月營收成長率',
    },
    {
      id: '42',
      father: '4',
      label: '營收成長率',
    },
    {
      id: '43',
      father: '4',
      label: '毛利成長率',
    },
    {
      id: '51',
      father: '5',
      label: '本益比評價',
    },
    {
      id: '52',
      father: '5',
      label: '本益比河流圖',
    },
    {
      id: '53',
      father: '5',
      label: '股價淨值比評價',
    },
  ];
  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    const newValue = event.currentTarget.id;
    setActiveId(newValue)
    setChild(childList.filter(tab=>tab.father === newValue)[0]?.id);
  }

  return (
    <div className={style.menu}>
      <div>
        {
          menuList.map(tab=> <div key={tab.id} id={tab.id} onClick={handleChange}  className={tab.id === activeId ? `${style.menuTab} ${style.active}` : style.menuTab}>
              {tab.icon}
              {tab.label}
            </div>)
        }
      </div>
      <div className={style.child}>
        {
          childList.filter(tab=>tab.father === activeId)?.map(tab=>
            <div
              key={tab.id}
              id={tab.id}
              className={tab.id === child ? `${style.menuTab} ${style.active}` : style.menuTab}
              onClick={e=>setChild((e.currentTarget.id))}
            >
              {tab.label}
            </div>)
        }
      </div>
      {/*<Tabs orientation="vertical" value={value} onChange={handleChange} visibleScrollbar={false}>*/}
      {/*  {*/}
      {/*    menuList.map(tab=><Tab label={tab.label} id={tab.id} icon={tab.icon} style={{ width: 140 }} />)*/}
      {/*  }*/}
      {/*</Tabs>*/}
      {/*<Tabs orientation="vertical" value={child} onChange={(e:React.SyntheticEvent, index: number)=>setChild(index)}>*/}
      {/*  {*/}
      {/*    childList.filter(tab=>tab.father === value)?.map(tab=><Tab label={tab.label} id={tab.id} style={{ width: 200 }} />)*/}
      {/*  }*/}
      {/*</Tabs>*/}
    </div>
  );
}

interface TabObj {
  id: string,
  label: string,
  icon?: React.ReactElement | string,
  father?: string
}

