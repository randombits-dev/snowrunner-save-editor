import {useLog} from '../providers/DebugProvider';

const DebugLogs = () => {
  const {logs} = useLog();

  return <div>
    <h1>Debug Logs</h1>
    {logs.map((log, index) => <div key={index}>{log.ts.getTime()} {log.log}</div>)}
  </div>
}

export default DebugLogs;
