type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = '' }) => {
  return (
    <div className={`relative mb-4 inline-block ${className}`}>
      <h3 className="font-big-calson text-[22px] text-[#1D1F22]">{title}</h3>
      <div
        className="absolute bottom-[-8px] left-0 h-[1px] bg-[#1D1F22]"
        style={{ width: 'calc(100% + 20px)' }}
      />
    </div>
  );
};

export default SectionTitle;
