import { Label, TextInput } from "flowbite-react";
import { useField } from "formik";
import { useEffect, useRef, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const InputPassword = ({ label, required, disabled, ...props }) => {
  const [field, meta] = useField(props);
  const [visible, setVisible] = useState(false);
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
      <div className="relative flex justify-between items-center">
        <TextInput
          type={visible ? "text" : "password"}
          className="pt-1 w-full"
          {...field}
          placeholder="Input Your Password"
          style={meta.touched && meta.error ? { borderColor: "#ff5757", borderWidth: "2px", outline: "none" } : {}}
          disabled={disabled}
        />
        <div
          className={`absolute end-0 me-2 mt-1 text-slate-500 transition hover:duration-700 hover:text-slate-600 cursor-pointer ${disabled ? "pointer-events-none" : ""}`}
          onClick={() => !disabled && setVisible(!visible)}
        >
          {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </div>
      </div>
      {meta.touched && meta.error && <p className="text-red-600 text-sm font-semibold">{meta.error}</p>}
    </div>
  );
};

export default InputPassword;
