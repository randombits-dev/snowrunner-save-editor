import React, {createContext, useContext} from "react";

import * as translations from 'definitions/en.json';

type I18nContextType = {
  translate: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({translate: null});
export const useI18n = () => useContext(I18nContext);

const I18nProvider = ({children}) => {
  const translate = (key: string) => {
    if (key.substring(0, 6) === 'level_') {
      key = (key.substring(6) + '_name').toUpperCase();
    }
    return translations[key] || key;
  };

  return (
    <I18nContext.Provider value={{translate}}>
      {children}
    </I18nContext.Provider>
  )
};

export default I18nProvider;
