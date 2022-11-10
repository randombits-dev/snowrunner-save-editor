import {ChangeEvent} from "react";
import {useI18n} from "../providers/I18nProvider";

const LocaleChanger = () => {
  const {setLocale} = useI18n();

  const onLocaleChange = (event: ChangeEvent) => {
    setLocale((event.target as HTMLSelectElement).value);
  };

  return <select onChange={onLocaleChange}>
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="de">German</option>
  </select>
}

export default LocaleChanger;
