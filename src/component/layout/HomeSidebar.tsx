/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React, { Fragment } from "react";
import { jsx } from "@emotion/react";
//style
import style from "./HomeSidebar.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件

type THomeSidebar = {
  /**
   * active section
   */
  active: string;
};

function HomeSidebar({ ...props }: THomeSidebar) {
  const theme = useTheme();
  return (
    <div
      className={style.container}
      css={css`
        --sidebar-bg-color: ${theme.palette.mode === "dark"
          ? "#191919"
          : theme.palette.grey[300]};
        --sidebar-title-bg-color: ${theme.palette.mode === "dark"
          ? theme.palette.background.default
          : theme.palette.grey[400]};
        --sidebar-text-color: ${theme.palette.mode === "dark"
          ? theme.palette.grey[200]
          : theme.palette.grey[700]};
      `}
    >
      <div className={style.title}>Web Developer</div>
      <div className={style.side}>
        <ul>
          <li>empty</li>
          <li className={props.active === 'whoami' ? style.active : ''}>WhoAmI</li>
          <li className={props.active === 'portfolio' ? style.active : ''}>Portfolio</li>
          <li className={props.active === 'skills' ? style.active : ''}>Skills</li>
          <li className={props.active === 'contact' ? style.active : ''}>Contact</li>
        </ul>
      </div>
      <div className={style.social}>Github</div>
    </div>
  );
}

export default HomeSidebar;
