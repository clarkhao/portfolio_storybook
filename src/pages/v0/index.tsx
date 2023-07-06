//应用
import React, { Fragment, lazy } from "react";
//style
import style from "./index.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import WhoAmI from "../../component/composite/WhoAmI";
import HomeSidebar from "../../component/layout/HomeSidebar";
import TopRight from "../../component/layout/TopRight";
import Portfolio from "../../component/composite/Portfolio/index";
import dynamic from "next/dynamic";
const Skills = dynamic(() => import('../../component/composite/Skills'));
import Contact from "../../component/composite/Contact";

function HomePage() {
  const theme = useTheme();
  const [activeSection, setActiveSection] = React.useState('');
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('article');
      const scrollPosition = window.pageYOffset;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })
  return (
    <div
      className={style.container}
      css={css`
        --homepage-bg-color: ${theme.palette.mode === "dark"
          ? theme.palette.grey[900]
          : theme.palette.grey[50]};
      `}
    >
      <HomeSidebar active={activeSection }/>
      <TopRight size={60} />
      <div className={style.right}>
        <WhoAmI />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
