"use client";

import React, { useState } from "react";
import {
  TextField,
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
  label: string;
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
      <Typography component="label" htmlFor={id} className="input-label">
        {renderLabelIcon()}
        {label}
      </Typography>

      {isPassword ? (
        <FormControl variant={variant} fullWidth={fullWidth}>
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
        </FormControl>
      ) : (
        <TextField
          id={id}
          type={type}
          variant={variant}
          fullWidth={fullWidth}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          inputProps={{ className: inputClassName }}
          {...props}
        />
      )}
    </div>
  );
};

export default InputField;
