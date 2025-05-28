import { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section
      className="bg-white flex justify-between items-center flex-wrap gap-6 px-6 sm:px-10 md:px-[70px] py-[20px] font-medium"
      aria-labelledby="newsletter-heading"
    >
      <h2 id="newsletter-heading" className="text-[#1D1F22] text-[21px] font-[big-calson]">
        Get News & Updates
      </h2>
      <p className="text-[#565759] xl:w-[369px]">
        Get latest developments and exciting news on how we are shaping the future!
      </p>
      {subscribed ? (
        <div role="status" aria-live="polite" className="text-[#1D1F22]">
          Thank you! <span className="font-semibold">{email}</span> has been successfully subscribed
          to our newsletter.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 py-3 px-5 rounded text-sm border-[1.5px] border-[#E8E9E9] w-[530px]"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            required
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="placeholder:text-gray-500 grow p-1 outline-0 "
          />
          <button
            type="submit"
            className="px-6 py-1.5 text-[#006F62] border-2 rounded uppercase whitespace-nowrap "
          >
            Join the Newsletter
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsLetter;
