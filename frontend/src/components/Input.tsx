
import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    label, 
    helperText, 
    error, 
    leftIcon, 
    rightIcon, 
    id,
    required,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    const isPasswordType = type === "password";
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        
        <div className={cn(
          "relative flex items-center",
          error && "text-destructive"
        )}>
          {leftIcon && (
            <div className="absolute left-3 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          
          <input
            id={inputId}
            type={isPasswordType ? (showPassword ? "text" : "password") : type}
            className={cn(
              "input-field",
              leftIcon && "pl-10",
              (rightIcon || isPasswordType) && "pr-10",
              error && "border-destructive focus:ring-destructive/10",
              className
            )}
            ref={ref}
            {...props}
          />
          
          {isPasswordType ? (
            <button
              type="button"
              className="absolute right-3 text-muted-foreground hover:text-foreground transition-colors"
              onClick={togglePasswordVisibility}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          ) : rightIcon ? (
            <div className="absolute right-3 text-muted-foreground">
              {rightIcon}
            </div>
          ) : null}
        </div>
        
        {(helperText || error) && (
          <p className={cn(
            "text-xs",
            error ? "text-destructive" : "text-muted-foreground"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
