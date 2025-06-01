import ChevronDownIcon from '../../assets/ChevronDownIcon';

type LanguageSelectorProps = {
  containerClass?: string;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ containerClass = '' }) => {
  return (
    <div data-testid="language-selector" className={`relative group ${containerClass}`}>
      <label htmlFor="language" className="sr-only">
        Select Language
      </label>
      <select
        id="language"
        name="language"
        aria-label="Select Language"
        className="appearance-none bg-white rounded px-3 py-1 text-sm pr-8 focus:outline-none"
        defaultValue="en"
      >
        <option value="en">EN</option>
        <option value="zh">ZH</option>
      </select>
      <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
        <ChevronDownIcon />
      </span>
    </div>
  );
};

export default LanguageSelector;
