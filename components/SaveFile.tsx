import React from 'react';
import {SaveGame} from "../definitions/ISaveGame";
import ActionButton from "@/components/ActionButton";

interface Params {
  data: SaveGame;
}

const SaveFile = ({data}: Params) => {
  const saveFile = () => {

    // clear waypoints
    const waypointLevels = Object.keys(data.CompleteSave.SslValue.waypoints);
    waypointLevels.forEach(level => {
      data.CompleteSave.SslValue.waypoints[level] = [];
    });

    const text = JSON.stringify(data);
    // const file = new Blob([text], {type: 'application/json'});
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + text);
    element.setAttribute('download', 'CompleteSave.dat');
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
