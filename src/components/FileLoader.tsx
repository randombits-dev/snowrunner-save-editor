import {useRef} from 'react';
import {SaveGame} from "definitions/ISaveGame";
import ActionButton from "components/ActionButton";
import {Store} from "../providers/store";

interface Params {
  onData: (data: SaveGame) => void;
}

const FileLoader = ({onData}: Params) => {
  const fileInputRef = useRef<HTMLInputElement>(undefined);
  const onLoaded = (e) => {
    let text = e.target.result;
    const jsonEnd = text.lastIndexOf('}');
    if (jsonEnd > 0) {
      text = text.substring(0, jsonEnd + 1);
      try {
        // console.log(JSON.parse(text));

        const data = JSON.parse(text);
        if (data.CompleteSave) {
          Store.saveKey = 'CompleteSave';
        } else if (data.CompleteSave1) {
          Store.saveKey = 'CompleteSave1';
        } else if (data.CompleteSave2) {
          Store.saveKey = 'CompleteSave2';
        } else if (data.CompleteSave3) {
          Store.saveKey = 'CompleteSave3';
        } else if (data.CompleteSave4) {
          Store.saveKey = 'CompleteSave4';
        }

        onData(data);
      } catch (e) {
        console.log(e);
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
    reader.onload = (e) => {
      onLoaded(e);
    };
    reader.readAsText(e.target.files[0]);
  };

  const fakeButton = () => {
    fileInputRef.current.click();
  };


  return (
    <>
      <input type="file" ref={fileInputRef} onChange={loadFile} hidden={true}/>
      <ActionButton onClick={fakeButton}>Load File</ActionButton>
    </>
  );
}

export default FileLoader
