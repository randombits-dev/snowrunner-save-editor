import React from 'react';

interface Params {
  hasData: boolean;
}

const Instructions = ({hasData}: Params) => {
  if (hasData) {
    return <>
      <h1>Snowrunner Save Editor</h1>
      <div>When finished, save the file, overwriting the <b>CompleteSave.cfg</b> you loaded.</div>
    </>
  } else {
    return (
      <>
        <h1>Snowrunner Save Editor</h1>
        <div>Load the <b>CompleteSave.cfg</b> file:</div>
        <div>With <b>steam</b>, the file is located in <i>[steam install]/userdata/[steam_id]/1465360/remote.</i></div>
        <div>With <b>epic or other platforms</b>, navigate to <i>%USERPROFILE%\Documents\My Games\SnowRunner\base\storage</i>. You will see
          a
          folder with a generated key like <i>9544ed6c186247e1bfeb0df3f9d013a8</i>. The file is located in this folder.
        </div>
      </>
    );
  }
}

export default Instructions
