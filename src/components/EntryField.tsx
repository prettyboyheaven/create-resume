import React, { useEffect, useState, useRef } from "react";
import { IEntryFieldProps } from "../interfaces";
import "./../style/blocks/entryField.scss";
import { getErrorValidation } from "../utils/validation";
import { EntryFieldDefaultProps } from "./defaultProps";

export const EntryField: React.FunctionComponent<IEntryFieldProps> = (
  props
) => {
  EntryField.defaultProps = EntryFieldDefaultProps;

  const [error, setError] = useState("");
  const [positive, setPositive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (props.validationFunction && props.required) {
      const codeError = props.validationFunction(e.target.value);
      if (codeError) {
        setError(getErrorValidation(codeError));
        setPositive(false);
      } else {
        setError("");
        setPositive(true);
      }
    }

    props.handlerChange({
      id: props.id,
      value: e.target.value,
    });
  };

  useEffect(() => {
    if (props.initialValue) {
      inputRef.current!.defaultValue = props.initialValue;
    }
  }, []);

  return (
    <div className={`entryField ${props.class}`}>
      <label className="entryField__label label" id={props.id}>
        {props.title && (
          <span className="entryField__title">{props.title}</span>
        )}
        {props.required && (
          <span className="entryField__require"> (обязательно) </span>
        )}
      </label>
      <div className="entryField__wrapper">
        <input
          className={`input entryField__input 
          ${error ? "error" : ""} 
          ${positive ? "positive" : ""}
            `}
          ref={inputRef}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onBlur={onBlur}
          type="text"
        />
        {error && <p className="entryField__error">{error}</p>}
      </div>
    </div>
  );
};
