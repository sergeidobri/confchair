import "./ui.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled,
  ...props
}) => (
  <button
    {...props}
    disabled={disabled || isLoading}
    className={`btn ${disabled || isLoading ? "btn--disabled" : ""}`}
  >
    {isLoading ? "Loading..." : children}
  </button>
);
