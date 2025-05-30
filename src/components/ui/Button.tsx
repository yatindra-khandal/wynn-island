type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary';
  label: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className = '', variant, label, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} ${variant === 'primary' ? 'bg-[#006F62]' : ''}
                px-8 py-4 rounded text-white `}
    >
      {label}
    </button>
  );
};

export default Button;
