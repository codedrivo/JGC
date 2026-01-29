import React, { useState } from "react";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Typography,
} from "@mui/material";
import { LuEye, LuEyeOff } from "react-icons/lu";
import "./Input.css";

export type InputTypes =
  | "text"
  | "number"
  | "email"
  | "password"
  | "date"
  | "time"
  | "datetime-local"
  | "file"
  | "url"
  | "tel"
  | "search";

export interface InputFieldProps {
  id?: string;
  label?: string;
  labelIcon?: React.ReactNode | string;
  variant?: "outlined" | "filled" | "standard";
  type?: InputTypes;
  placeholder?: string;
  fullWidth?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  errorMsg?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id = "input-basic",
  label,
  labelIcon,
  variant = "outlined",
  type = "text",
  placeholder = "",
  fullWidth = true,
  value,
  onChange,
  className = "",
  inputClassName = "",
  disabled = false,
  errorMsg,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const togglePassword = () => setShowPassword((prev) => !prev);

  const renderLabelIcon = () => {
    if (!labelIcon) return null;
    if (typeof labelIcon === "string") {
      return <img src={labelIcon} alt="icon" className="input-label-icon" />;
    }
    return <span className="input-label-icon">{labelIcon}</span>;
  };

  return (
    <div className={`custom-form ${className}`}>
      {label && (
        <Typography component="label" htmlFor={id} className="input-label">
          {renderLabelIcon()}
          {label}
        </Typography>
      )}

      <FormControl variant={variant} fullWidth={fullWidth}>
        {isPassword ? (
          <OutlinedInput
            id={id}
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={inputClassName}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePassword} edge="end">
                  {showPassword ? <LuEyeOff /> : <LuEye />}
                </IconButton>
              </InputAdornment>
            }
            {...props}
          />
        ) : (
          <OutlinedInput
            id={id}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={inputClassName}
            {...props}
          />
        )}

        {errorMsg && (
          <Typography color="error" variant="caption" style={{ marginTop: 4 }}>
            {errorMsg}
          </Typography>
        )}
      </FormControl>
    </div>
  );
};

export default InputField;
