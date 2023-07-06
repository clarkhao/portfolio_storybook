/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React, { Fragment } from "react";
import { jsx } from "@emotion/react";
//style
import style from "./index.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import PicCard from "./PicCard";

type TPortfolio = {};

function Portfolio({ ...props }: TPortfolio) {
  const theme = useTheme();
  return (
    <article
      id="portfolio"
      className={style.container}
      css={css`
        --character-color: ${theme.palette.mode === "dark" ? "white" : "black"};
      `}
    >
      <section>
        <h1>web developer portfolio</h1>
      </section>
      <main>
        <div className={style.wrapper}>
          <PicCard width={400} foreSrc="" backSrc="" />
          <PicCard width={400} foreSrc="" backSrc="" />
          <PicCard width={400} foreSrc="" backSrc="" />
          <PicCard width={400} foreSrc="" backSrc="" />
          <PicCard width={400} foreSrc="" backSrc="" />
          <PicCard width={400} foreSrc="" backSrc="" />
          <PicCard width={400} foreSrc="" backSrc="" />
          <PicCard width={400} foreSrc="" backSrc="" />
        </div>
      </main>
    </article>
  );
}

export default Portfolio;
