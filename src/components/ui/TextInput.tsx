type TextInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  tooltip?: string;
};

const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  tooltip,
}: TextInputProps) => {
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
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={`${name}-error`}
        placeholder={placeholder}
        className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
        }`}
      />
    </div>
  );
};

export default TextInput;
