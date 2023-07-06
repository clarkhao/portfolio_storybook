/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React, { Fragment } from "react";
import { jsx } from "@emotion/react";
//style
import style from "./WhoAmI.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import Letter from "../ui/Letter";

type TWhoAmI = {};

function WhoAmI({ ...props }: TWhoAmI) {
  const theme = useTheme();
  const [typing, setTyping] = React.useState(false);
  React.useEffect(() => {
    setTyping(true);
    const timer = window.setTimeout(() => {
      setTyping(false);
    }, "Clark\nA web developer\ncoding from 40".length * 150);
    return () => window.clearTimeout(timer);
  },[])
  return (
    <article
      id="whoami"
      className={style.container}
      css={css`
        --homepage-bg-color: ${theme.palette.mode === "dark"
          ? theme.palette.grey[900]
          : theme.palette.grey[50]};
      `}
    >
      <div className={[style.text, typing ? style.typing : ''].join(' ')}>
        {"Clark\nA web developer\ncoding from 40".split("").map((el, i) => {
          if (el === "\n")
            return (
              <br
                key={i + "_newline"}
                style={{ animationDelay: `${0.1 * i}s` }}
              />
            );
          return el === " " ? (
            <span
              className={style.space}
              key={i + "_space"}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              m
            </span>
          ) : (
            <Letter
              key={el + i + "_letter"}
              size={80}
              styles={typing ? { animationDelay: `${0.1 * i}s` } : {}}
            >
              {el}
            </Letter>
          );
        })}
      </div>
    </article>
  );
}

export default WhoAmI;
