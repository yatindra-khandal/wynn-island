type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  label: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'secondary',
  label,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${className} px-8 py-4 rounded cursor-pointer border-[#006F62] border uppercase tracking-wider ${variant === 'primary' ? 'bg-[#006F62] text-white' : 'text-[#006F62]'}`}
    >
      {label}
    </button>
  );
};

export default Button;
