import {useTheme} from "providers/MultiThemeProvider";
import {ChangeEvent} from "react";

const ThemeChanger = () => {
  const {setTheme} = useTheme();

  const onThemeChange = (event: ChangeEvent) => {
    setTheme((event.target as HTMLSelectElement).value);
  };

  return <select onChange={onThemeChange}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
}

export default ThemeChanger;
