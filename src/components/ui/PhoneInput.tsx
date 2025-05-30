import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type PhoneInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  tooltip?: string;
};

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
  tooltip,
}) => {
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
      <div className="w-full">
        <ReactPhoneInput
          country={'ae'}
          value={value}
          onChange={(_, __, e) => onChange(e)}
          placeholder={placeholder}
          inputClass={`!w-full !h-auto border rounded px-4 py-4 focus:outline-none bg-[#FFFFFF] focus:ring-1 ${
            error
              ? '!border-[#B3261E] focus:ring-[#B3261E]'
              : 'border-[#E8E9E9] focus:ring-gray-400'
          }`}
          buttonClass={`!border-r-0 !bg-transparent ${error ? '!border-[#B3261E] focus:ring-[#B3261E]' : ''}`}
          dropdownClass="!text-sm"
          specialLabel=""
          inputProps={{ name, id: name }}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
