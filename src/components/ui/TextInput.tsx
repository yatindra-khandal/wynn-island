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
        <label htmlFor={name} className="font-big-calson text-sm capitalize">
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
        className={`border rounded px-4 py-4 focus:outline-none bg-[#FFFFFF] focus:ring-1 ${
          error ? 'border-[#B3261E] focus:ring-[#B3261E]' : 'border-[#E8E9E9] focus:ring-gray-400'
        } placeholder-gray-400`}
      />
    </div>
  );
};

export default TextInput;
