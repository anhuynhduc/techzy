'use client';

import React from 'react';
import {
  useController,
  FieldValues,
  FieldPath,
  UseControllerProps,
} from 'react-hook-form';

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  heightInput?: number;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  callbackOnChange?: (value: string) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  controller: UseControllerProps<TFieldValues, TName>;
  subTitle?: string;
  buttonSubmit?: React.ReactNode;
  prefix?: React.ReactNode;
  isError?: boolean;
  label?: string;
  className?: string;
};

function InputField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: Props<TFieldValues, TName>) {
  const {
    onKeyPress,
    inputProps,
    controller,
    heightInput = 32,
    label,
    subTitle,
    buttonSubmit,
    isError,
    callbackOnChange,
    className,
  } = props;

  const { fieldState, field } = useController(controller);
  const { error } = fieldState;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputProps?.onChange?.(e);
    field.onChange(e);
    callbackOnChange?.(e.target.value);
  };

  return (
    <div className={`mb-4 w-full ${className}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {subTitle && <div className="mb-2 text-xs text-gray-500">{subTitle}</div>}

      <div className="flex items-start gap-2">
        <div className={buttonSubmit ? 'w-4/5' : 'w-full'}>
          <input
            {...field}
            {...inputProps}
            onChange={onChange}
            onKeyPress={onKeyPress}
            className={`w-full px-3 py-2 border text-sm outline-none
              ${isError || error ? 'border-red-500' : 'border-gray-300'}
            `}
            style={{ height: `${heightInput}px`, ...inputProps?.style }}
          />
          {error && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputField;
