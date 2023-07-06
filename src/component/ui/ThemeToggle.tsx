/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React from "react";
import { jsx } from "@emotion/react";
//style
import style from "./ThemeToggle.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import { FiSun, FiMoon } from "react-icons/fi";

type SwitchType = {
  /**
   * parent handler
   */
  handleClick?: () => void;
  /**
   * toggle indicate boolean
   */
  toggle?: boolean;
  /**
   * is svg icon needed?
   */
  isSvg?: boolean;
  /**
   * size
   */
  size?: number;
};

function ThemeToggle({ isSvg = true, size = 100, ...props }: SwitchType) {
  const theme = useTheme();
  const id = React.useId();
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = (e: React.MouseEvent) => {
    setToggle(!toggle);
  };
  return (
    <>
      <input className={style.input} type="checkbox" id={id} name="theme-toggle"/>
      <label
        className={style.label}
        htmlFor={id}
        onClick={props.handleClick ?? handleToggle}
        css={css`
          --switch-bg: ${props.toggle ?? toggle
            ? "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)"
            : "linear-gradient(to bottom, #4facfe, #00f2fe)"};
          --switch-btn-color: ${props.toggle ?? toggle ? "#003" : "white"};
          --toggle-size: ${size}px;
          --toggle-box-shadow: ${theme.shadows[4]};
        `}
      >
        <span className={style.toggle}>
          {isSvg ? props.toggle ?? toggle ? <FiMoon /> : <FiSun /> : null}
        </span>
      </label>
    </>
  );
}

export default ThemeToggle;