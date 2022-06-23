import React from "react";
import { useField } from "formik";
import "./Inputs.css";

export default function SelectInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="input-container">
      <label className="label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select className="input select" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
