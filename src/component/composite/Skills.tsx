/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React, { Fragment } from "react";
import { jsx } from "@emotion/react";
//style
import style from "./Skills.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

type TSkills = {};

const texts = [
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "Node.js",
  "Postgresql",
  "Express",
  "Mui",
  "Typescrpit",
  "Git",
  "GitHub",
];

function Skills({ ...props }: TSkills) {
  const theme = useTheme();
  return (
    <article
      id="skills"
      className={style.container}
      css={css`
        --character-color: ${theme.palette.mode === "dark" ? "white" : "black"};
      `}
    >
      <section>
        <h1>
          Coding and Me
        </h1>
        <main>
          当初我对编程和web
          app开发的热爱源自我对计算机科学和互联网的浓厚兴趣。通过学习编程，我发现创造从无到有的东西是一件非常有成就感的事情。并且，不断学习和探索新技术是我的一大兴趣。我喜欢了解最新的技术和开发趋势，并且尝试将它们应用到我的项目中。我也喜欢在Stack
          Overflow、Github等开发平台上查找和分享有关技术的知识。我希望在不断学习和探索创新技术的过程中，成为一位全栈开发者并且为用户提供优秀的web应用程序。
        </main>
      </section>
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(650, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          "VSCode",
          "TypeScript",
          "React",
          "Next",
          "React",
          "JavaScript",
          "CSS",
          "HTML",
          "Node.js",
          "Postgresql",
          "Express",
          "Mui",
          "Git",
          "GitHub",
          "Kotlin",
          "Swagger",
          "SpringBoot",
          "Storybook",
          "Animation"
        ]}
      </TagCloud>
    </article>
  );
}

export default Skills;
