//应用
import React, { Fragment } from "react";
//style
import style from "./index.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import ContactForm from "./ContactForm";
import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import('./ContactMap'), {ssr: false})

type TContact = {

}

function Contact({...props}: TContact) {
  return <article className={style.container} id="contact">
    <ContactForm />
    <ContactMap />
  </article>
}

export default Contact;