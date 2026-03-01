import { Label, TextInput } from "flowbite-react";
import { useField } from "formik";
import React, { useEffect, useRef } from "react";

const InputForm = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);
  const inputRef = useRef(null);

  useEffect(() => {
    if (meta.touched && meta.error) {
      inputRef.current?.focus();
    }
  }, [meta.touched, meta.error]);

  return (
    <div className="block mb-2">
      <Label>
        {label}
        {required && <span className="text-red-600"> *</span>}
      </Label>
      <TextInput
        ref={inputRef}
        {...field}
        {...props}
        style={meta.touched && meta.error ? { borderColor: "#ff5757", borderWidth: "2px", outline: "none" } : {}}
      />
      {meta.touched && meta.error && <p className="text-red-600 text-sm font-semibold">{meta.error}</p>}
    </div>
  );
};

export default InputForm;
