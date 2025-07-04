
import React, { useState, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber, type Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
  Path,
   PathValue, 
} from "react-hook-form";

export type CustomPhoneInputProps<T extends Record<string, any>> = {
  label?: string;
  name: Path<T>;             // Use Path<T> here
  errors: FieldErrors<T>;
  setValue: UseFormSetValue<T>;
  watch: UseFormWatch<T>;
  required?: boolean;
  defaultCountry?: Country;
};

function CustomPhoneInput<T extends Record<string, any>>({

  label = "Phone Number",
  name,
  errors,
  setValue,
  watch,
  required = true,
  defaultCountry = "NP",
}: CustomPhoneInputProps<T>) {
  const phoneValue = watch(name) as string | undefined;
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(defaultCountry);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    if (phoneValue && selectedCountry && !isValidPhoneNumber(phoneValue, selectedCountry)) {
      setError(`Invalid phone number for ${selectedCountry}`);
    } else {
      setError(undefined);
    }
  }, [phoneValue, selectedCountry]);

   const handleChange = (val: string | undefined) => {
    setValue(name, (val || "") as PathValue<T, Path<T>>);
  };

  return (
    <div className="grid gap-2">
      <label htmlFor={String(name)} className="text-sm font-medium text-gray-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <PhoneInput
        international
        defaultCountry={defaultCountry}
        value={phoneValue}
        onChange={handleChange}
        onCountryChange={setSelectedCountry}
        className="flex items-center w-full rounded-lg px-2 py-1 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-none"
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
      {errors[name]?.message && (
        <span className="text-xs text-red-600">{String(errors[name]?.message)}</span>
      )}
    </div>
  );
}

export default CustomPhoneInput;
