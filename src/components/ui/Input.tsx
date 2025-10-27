import React from "react";
import "./ui.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ error, className = "", ...props }, ref) => (
    <div className="inputWrapper">
      <input
        ref={ref}
        className={`input ${error ? "inputError" : ""} ${className}`}
        {...props}
      />
      {error && <span className="inputError">{error}</span>}
    </div>
  )
);
