const NewsLetter = () => {
  return (
    <div className="bg-white flex justify-between items-center gap-[10px] px-[70px] py-[20px]">
      <h2>Get News & Updates</h2>
      <p className="text-[#565759]">
        Get latest developments and exciting news on how we are shaping the future!
      </p>
      <form className="flex justify-between py-3 px-5 rounded border-[1.5px] border-[#E8E9E9]">
        <input
          type="email"
          placeholder="Your email address"
          className="placeholder:text-gray-500"
        />
        <button type="submit">Join the Newsletter</button>
      </form>
    </div>
  );
};

export default NewsLetter;
