type SelectInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: string;
  tooltip?: string;
};

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  tooltip,
}: SelectInputProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-1">
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        {tooltip && (
          <span className="text-xs text-gray-500" title={tooltip}>
            ⓘ
          </span>
        )}
      </div>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={`${name}-error`}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
        }`}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
