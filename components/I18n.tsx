import React from 'react';
import {useI18n} from "../providers/I18nProvider";

interface Params {
  name: string;
}

const I18n = ({name}: Params) => {
  const {translate} = useI18n();
  return <>{translate(name)}</>;
}

export default I18n
