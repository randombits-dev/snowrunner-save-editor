import {createContext, useContext, useMemo, useReducer} from 'react';

interface DebugLog {
  log: string;
  ts: Date;
}

interface ILogContext {
  logs: DebugLog[];
}

interface IAddLogContext {
  addLog: (l: string) => void;
}

const LogContext = createContext<ILogContext>({
  logs: [],
});

const AddLogContext = createContext<IAddLogContext>({
  addLog: () => {
  }
});

export const useLog = () => useContext(LogContext);
export const useAddLog = () => useContext(AddLogContext);

export const DebugProvider = ({children}) => {
  const [logs, addLog] = useReducer(
    (logs, newLog) => ([{log: newLog, ts: new Date()}, ...logs]),
    []
  )

  return (
    <LogContext.Provider value={{logs}}>
      <AddLogContext.Provider value={useMemo(() => ({addLog}), [addLog])}>
        {children}
      </AddLogContext.Provider>
    </LogContext.Provider>
  );
};
