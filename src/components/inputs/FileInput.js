import React from "react";
import { useField } from "formik";
import "./Inputs.css";

export default function FileInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-container">
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="input text" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
