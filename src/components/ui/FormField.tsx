import type { ReactNode } from "react";
import "./ui.css";

interface Props {
  label: string;
  required?: boolean;
  width?: "original" | "half";
  children: ReactNode;
}

const FormField = ({
  label,
  required = false,
  width = "original",
  children,
}: Props) => {
  return (
    <div className={`formField ${width == "half" ? "halfFormField" : ""}`}>
      <label htmlFor={label} className="formFieldLabel">
        {label}
        {required && <span className="requiredStar">*</span>}
      </label>
      {children}
    </div>
  );
};

export default FormField;
