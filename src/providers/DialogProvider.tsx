import React, {createContext, ReactNode, useContext, useState} from 'react';
import SimpleDialog from "dialog/SimpleDialog";
import ConfirmDialog from "dialog/ConfirmDialog";

interface IDialogContext {
  confirm: (text: string, action: () => void) => () => void;
  dialog: (contents: ReactNode) => () => void;
  closeDialog: () => void;
}

const DialogContext = createContext<IDialogContext>({
  confirm: null,
  dialog: null,
  closeDialog: null
});

export const useDialog = () => useContext(DialogContext);

export const DialogProvider = ({children}) => {
  const [contents, setContents] = useState<any>(null);

  const confirm = (text, action) => {
    setContents(<ConfirmDialog text={text} action={() => {
      action();
      closeDialog()
    }} cancel={closeDialog}></ConfirmDialog>);
    return closeDialog;
  };

  const dialog = (contents) => {
    setContents(contents);
    return closeDialog;
  };

  const closeDialog = () => {
    setContents(null);
  }

  return (
    <DialogContext.Provider value={{confirm, dialog, closeDialog}}>
      <SimpleDialog open={!!contents}>{contents}</SimpleDialog>
      {children}
    </DialogContext.Provider>
  );
};
