import React from 'react';
import RadioInput from './RadioInput';

interface RadioGroupProps {
  name: string;
  options: { label: React.ReactNode; value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, options, value, onChange, className }) => {
  return (
    <div className={`flex justify-between items-center gap-2 ${className}`}>
      {options.map(({ label, value: optionValue }) => (
        <RadioInput
          key={optionValue}
          name={name}
          value={optionValue}
          checked={value === optionValue}
          onChange={() => onChange(optionValue)}
          label={label}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
