/** @jsxRuntime classic */
/** @jsx jsx */
//应用
import React, { useRef, useId } from "react";
import { jsx } from "@emotion/react";
//style
import style from "./Input.module.css";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
//hooks
import { useInput } from "../utils";

type TInput = {
  /**
   * type indicated icon and input type,
   * 'email'|'password'|'text'|'search'
   */
  type: string;
  /**
   * width indicate input width
   */
  width?: number;
  /**
   * optional text used in label
   */
  labelText?: string;
  /**
   * value
   */
  value?: string;
  /**
   * input name prop
   */
  name: string;
  /**
   * handleChange used for state bind
   */
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * errMsg indicate error returned from data validate and request result
   */
  errMsg?: string;
  /**
   * handleFocus用于在父级中清除errMsg，重新渲染后Input错误消失
   */
  handleFocus: React.FocusEventHandler;
  /**
   * handle enter click event
   */
  handleEnterClick?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * icon component
   */
  icon?: React.ReactNode;
};

function Input({ type, width = 200, value, icon = null, ...props }: TInput) {
  const theme = useTheme();
  const inputId = useId();
  const { inputState, inputDispatch } = useInput(props.errMsg);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleControlFocus: React.MouseEventHandler = (e) => {
    e.preventDefault();
    inputRef.current && inputRef.current.focus();
  };
  /**
   * oninput事件更新input中的value
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "set-inputvalue", payload: e.target.value });
  };
  /**
   * onfocus事件时，取消error显示
   */
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    inputDispatch({ type: "is-err", payload: false });
  };
  return (
    <div
      className={[style.container, inputState.isErr ? style.error : ""].join(
        " "
      )}
      css={css`
        --input-width: ${width}px;
        --input-error-color: ${theme.palette.error.main};
        --input-bg-color: ${theme.palette.mode === "dark"
          ? theme.palette.grey[700]
          : theme.palette.grey[200]};
        --input-text-color: ${theme.palette.text.primary};
      `}
    >
      <input
        className={[
          style.input,
          inputState.isErr ? style.error : "",
          icon === null ? "" : style.indent,
        ].join(" ")}
        ref={inputRef}
        id={inputId}
        type={type === "password" ? inputState.pwdToggle.type : type}
        name={props.name}
        value={value ?? inputState.inputValue}
        onInput={props.handleInput ?? handleInputChange}
        onFocus={props.handleFocus ?? handleFocus}
        onKeyDown={props.handleEnterClick}
        placeholder={props.labelText}
      />
      {icon === null ? null : (
        <span className={style.licon} onClick={handleControlFocus}>
          {icon}
        </span>
      )}
      {type === "search" ? null : (
        <label
          className={style.label}
          htmlFor={inputId}
        >
        </label>
      )}
    </div>
  );
}

export default Input;
