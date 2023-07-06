/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React, { Fragment, useRef } from "react";
import { jsx } from "@emotion/react";
//style
import style from "./Letter.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件

type TLetter = {
  /**
   * charater children
   */
  children: string;
  /**
   * size
   */
  size: number;
  /**
   * styles inline
   */
  styles: React.CSSProperties;
};

function Letter({ children='A' , size=50 , ...props }: TLetter) {
  const [bouncy, setBouncy] = React.useState(false);
  const theme = useTheme();

  return (
    <Fragment>
      <span
          className={[style.container, bouncy ? style.bouncy : ''].join(' ')}
          css={css`
            --character-size: ${size}px;
            --character-color: ${theme.palette.mode === 'dark' ? 'white' : 'black'}
          `}
          onMouseEnter={(e) => {
            setBouncy(true);
            window.setTimeout(() => {
              setBouncy(false);
            }, 2000);
          }}
          style={props.styles}
        >
          {children}
        </span>
    </Fragment>
  );
}

export default Letter;
