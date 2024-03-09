import { createContext, useContext, useReducer } from 'react';

const dataContext: YearAction = { year: '5', data: [] };
const DataContext = createContext(dataContext);
const DataDispatchContext = createContext(null);

export function useData() {
  return useContext(DataContext);
}

export function useDataDispatch() {
  return useContext(DataDispatchContext);
}


function dataReducer(oldState: any, action: YearAction) {
  switch (action.type) {
    case 'changeYear': {
      return {
        ...oldState,
        year: action.year,
        data: action.data,
      };
    }
    default: {
      throw Error('未知操作：' + action.type);
    }
  }
}
export function DataProvider({ children }: { children: React.ReactNode; }) {
  const [state, dispatch] = useReducer(dataReducer, {});

  return (
    // @ts-ignore
    <DataContext.Provider value={state}>
      {/*@ts-ignore*/}
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}


interface YearAction {
  type?: string,
  year: string,
  data: {
    monthMoney: string,
    time: string
  }[]
}
