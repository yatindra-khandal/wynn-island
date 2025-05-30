type RadioInputProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: React.ReactNode;
};

const RadioInput: React.FC<RadioInputProps> = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="inline-flex cursor-pointer select-none gap-3 relative py-3 px-1">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span
        className={`w-4 h-4 rounded-[10px] border border-[#383C3E] flex items-center justify-center bg-white`}
        style={{ position: 'relative', top: 4, left: 4 }}
      >
        {checked && (
          <span className="w-4 h-4 rounded-[10px]" style={{ backgroundColor: '#006F62' }} />
        )}
      </span>
      <span>{label}</span>
    </label>
  );
};

export default RadioInput;
