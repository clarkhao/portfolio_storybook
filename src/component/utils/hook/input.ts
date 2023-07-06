import React from "react";

export type TInputState = {
  isErr: boolean;
  inputValue: string | undefined;
  pwdToggle: {
    type: string;
    icon: string;
  };
};
type TInputPayload = {
  "is-err": boolean;
  "set-inputvalue": string;
  "pwd-toggle": null;
};
export interface IInputAction {
  type: keyof TInputPayload;
  payload: TInputPayload[IInputAction["type"]];
}

function useInput(errMsg?: string) {
  const inputReducer = (state: TInputState, action: IInputAction) => {
    switch (action.type) {
      case "is-err":
        return {
          ...state,
          isErr: action.payload as boolean,
        };
      case "set-inputvalue":
        return {
          ...state,
          inputValue: action.payload as string,
        };
      case "pwd-toggle":
        return {
          ...state,
          pwdToggle: {
            type: state.pwdToggle.type === "password" ? "text" : "password",
            icon: state.pwdToggle.icon === "eyeclose" ? "eyeopen" : "eyeclose",
          },
        };
      default:
        return state;
    }
  };
  const initInputState: TInputState = {
    isErr: (errMsg && errMsg.length > 0) as boolean,
    inputValue: "",
    pwdToggle: {
      type: "password",
      icon: "eyeclose",
    },
  };
  const [inputState, inputDispatch] = React.useReducer(
    inputReducer,
    initInputState
  );
  React.useEffect(() => {
    inputDispatch({
      type: "is-err",
      payload: (errMsg && errMsg.length > 0) as boolean,
    });
  }, [errMsg]);
  return { inputState, inputDispatch };
}

export { useInput };