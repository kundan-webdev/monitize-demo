"use client";

import {
  forwardRef,
  useId,
  type ChangeEventHandler,
  type InputHTMLAttributes
} from "react";

type NativeInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "defaultValue" | "onChange" | "id"
>;

export type InputProps = NativeInputProps & {
  id?: string;
  label?: string;
  error?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, value, onChange, className, type = "text", ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? `input-${generatedId}`;
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full">
        {label ? (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-text"
          >
            {label}
          </label>
        ) : null}

        <input
          ref={ref}
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={[
            "w-full rounded-md border bg-white px-3 py-2 text-sm text-text outline-none transition-colors",
            "placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-primary",
            error
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-slate-300 focus-visible:border-primary",
            className
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />

        {error ? (
          <p id={errorId} role="alert" className="mt-1 text-xs text-red-600">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
