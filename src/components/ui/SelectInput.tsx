import ChevronDownIcon from '../../assets/ChevronDownIcon';

type SelectInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: string;
  tooltip?: string;
};

const SelectInput = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  options,
  error,
  tooltip,
}: SelectInputProps) => {
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
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={`${name}-error`}
          className={`appearance-none w-full border rounded pl-4 pr-10 py-4 focus:outline-none bg-[#FFFFFF] focus:ring-1 ${
            error
              ? 'border-[#B3261E] focus:ring-[#B3261E]'
              : 'border-[#E8E9E9]  focus:ring-gray-400'
          } ${value === '' ? 'text-gray-400' : ''}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500">
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
};

export default SelectInput;
