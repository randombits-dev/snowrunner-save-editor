import React from 'react';
import {SaveGame} from "../definitions/ISaveGame";

interface Params {
  onData: (data: SaveGame) => void;
}

const FileLoader = ({onData}: Params) => {
  const onLoaded = (e) => {
    let text = e.target.result;
    const jsonEnd = text.lastIndexOf('}');
    if (jsonEnd > 0) {
      text = text.substring(0, jsonEnd + 1);
      try {
        onData(JSON.parse(text));
      } catch {
        alert('Invalid File');
      }
    } else {
      alert('Invalid File');
    }
  };

  const loadFile = (e) => {
    if (!e.target.files[0]) {
      return;
    }
    const reader = new FileReader();
    reader.onload = onLoaded;
    reader.readAsText(e.target.files[0]);
  };

  return (
    <input type="file" onChange={loadFile}/>
  );
}

export default FileLoader
