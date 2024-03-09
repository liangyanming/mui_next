import style from "./index.module.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Dispatch, SetStateAction } from 'react';

export default function SelectNum({ setTitle }: SelectNumProps) {
  const option = [
    { label: '台積電(2330)', id: 123 },
    { label: 'A(111)', id: 111 },
    { label: 'B(222)', id: 222 },
    { label: 'C(333)', id: 333 },
    { label: 'D(444)', id: 444 },
  ]

  return (
    <div className={style.header}>
      <Autocomplete
        onChange={(event, value) => setTitle(value?.label ?? '台積電(2330)')}
        disablePortal
        id="search"
        size="small"
        options={option}
        sx={{ width: 300 }}
        renderInput={params =>
          <TextField
            {...params}
            // InputProps={{ style: { color: "#434343", fontWeight: 700 } }}
            placeholder={"输入台/美股代号,查看公司价值"}
          />
        }
      />
    </div>
  );
}

interface SelectNumProps {
  setTitle: Dispatch<SetStateAction<string>>
}
