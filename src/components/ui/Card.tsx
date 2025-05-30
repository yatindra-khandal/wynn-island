type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return <div className={`radius p-6 bg-white ${className}`}>{children}</div>;
};

export default Card;
