/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React from "react";
import { jsx } from "@emotion/react";
import { useRouter } from "next/router";
//style
import style from "./PicCard.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import Labels from "../../ui/Labels";

type TPicCard = {
  /**
   * foreground image src
   */
  foreSrc: string;
  /**
   * background image src
   */
  backSrc: string;
  /**
   * width
   */
  width: number;
};

function PicCard({ width = 300, ...props }: TPicCard) {
  const [onLabel, setOnLabel] = React.useState(false);
  return (
    <div
      className={style.container}
      css={css`
        --card-width: ${width}px;
      `}
      onMouseOver={() => setOnLabel(true)}
      onMouseLeave={() => setOnLabel(false)}
    >
      <div className={style.bar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={style.label}>Github</div>
      <div className={style.image}>
        <img
          className={style.fore}
          src="https://picsum.photos/400/267?random=1"
        />
        <img
          className={style.back}
          src="https://picsum.photos/400/267?random=2"
        />
        {onLabel ? <Labels /> : null}
      </div>
    </div>
  );
}

export default PicCard;
