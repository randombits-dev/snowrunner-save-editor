import React from 'react';
import {SaveGame} from "definitions/ISaveGame";
import ActionButton from "components/ActionButton";
import {Store} from "../providers/store";

interface Params {
  data: SaveGame;
}

const SaveFile = ({data}: Params) => {
  const saveFile = () => {

    // clear waypoints
    const waypointLevels = Object.keys(data[Store.saveKey].SslValue.waypoints);
    waypointLevels.forEach(level => {
      data[Store.saveKey].SslValue.waypoints[level] = [];
    });

    const text = JSON.stringify(data);
    const blob = new Blob([text, '\u0000'], {type: 'application/json'});
    const element = document.createElement('a');
    element.href = URL.createObjectURL(blob);
    element.setAttribute('download', Store.saveKey + '.dat');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <ActionButton onClick={saveFile}>Save File</ActionButton>
  );
}

export default SaveFile
