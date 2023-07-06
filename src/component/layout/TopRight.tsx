//应用
import React from "react";
import { useThemeStore } from "../../store";
//style
import style from "./TopRight.module.css";
import { lightTheme, darkTheme } from "../utils";
//组件
import ThemeToggle from "../ui/ThemeToggle";
import Selector from "../ui/Selector";

type TThemeI18nLayout = {
  /**
   * left
   */
  left: React.ReactNode;
  /**
   * right
   */
  right: React.ReactNode;
};
type TThemeI18n = {
  /**
   * size
   */
  size: number;
};

function ThemeI18nLayout({ left, right, ...props }: TThemeI18nLayout) {
  return (
    <div className={style.container}>
      {left}
      {right}
    </div>
  );
}
function TopRight({ size = 60, ...props }: TThemeI18n) {
  const [toggle, setToggle] = React.useState(false);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const handleClick = () => {
    setToggle(!toggle);
    if (toggle) toggleTheme(lightTheme);
    else toggleTheme(darkTheme);
  };
  return (
    <>
      <ThemeI18nLayout
        left={<Selector size={size} />}
        right={
          <ThemeToggle size={size} handleClick={handleClick} toggle={toggle} />
        }
      />
    </>
  );
}

export default TopRight;
