import { Label, Select } from "flowbite-react";
import { useField } from "formik";

const CustomSelect = ({ label, required, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <Label htmlFor={props.id || props.name}>
                {label}
                {required && <span className="text-red-600"> *</span>}
            </Label>
            <Select
                id={props.id || props.name}
                {...field}
                {...props}
                style={
                    meta.touched && meta.error
                        ? { borderColor: '#ff5757', borderWidth: '2px', outline: 'none' }
                        : {}
                }
            >
                {props.children}
            </Select>
            {meta.touched && meta.error && (
                <p className="text-red-600 text-sm font-semibold">{meta.error}</p>
            )}
        </div>
    );
};

export default CustomSelect;
