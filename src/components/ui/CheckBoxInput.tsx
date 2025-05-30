type CheckboxInputProps = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  tooltip?: string;
};

const CheckboxInput = ({ label, name, checked, onChange, error, tooltip }: CheckboxInputProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={`${name}-error`}
          className={`mr-2 ${error ? 'ring-1 ring-red-500' : ''}`}
        />
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
        {tooltip && (
          <span className="ml-2 text-xs text-gray-500" title={tooltip}>
            ⓘ
          </span>
        )}
      </div>
    </div>
  );
};

export default CheckboxInput;
