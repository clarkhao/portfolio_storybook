/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React, { Fragment, useRef } from "react";
import { jsx } from "@emotion/react";
//style
import style from "./ContactForm.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import Input from "../../../component/ui/Input";
import { Button } from "@mui/material";

type TContactForm = {};

function ContactForm({ ...props }: TContactForm) {
  const theme = useTheme();
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [text, setText] = React.useState("");
  const [err, setErr] = React.useState(false);
  return (
    <div>
      <h1>Contact Me</h1>
      <form
        className={style.form}
        css={css`
          --testarea-error-color: ${theme.palette.error.main};
          --testarea-bg-color: ${theme.palette.mode === "dark"
            ? theme.palette.grey[700]
            : theme.palette.grey[200]};
          --testarea-text-color: ${theme.palette.text.primary};
        `}
      >
        <div className={style.first}>
          <Input
            icon={null}
            labelText="User"
            name="user"
            type="text"
            value={user}
            width={300}
            handleFocus={() => {}}
            handleInput={(e) => setUser(e.target.value)}
          />
          <Input
            icon={null}
            labelText="Email"
            name="email"
            type="email"
            value={email}
            width={300}
            handleFocus={() => {}}
            handleInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <Input
          icon={null}
          labelText="Subject"
          name="subject"
          type="text"
          value={subject}
          width={620}
          handleFocus={() => {}}
          handleInput={(e) => setSubject(e.target.value)}
        />
        <div className={style.textarea}>
          <textarea
            id="contact-text"
            className={[style.text, err ? style.error : ''].join(" ")}
            value={text}
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            placeholder="Message"
          />
          <label className={style.label} htmlFor="contact-text"></label>
        </div>
        <Button variant="contained">提交</Button>
      </form>
    </div>
  );
}

export default ContactForm;
