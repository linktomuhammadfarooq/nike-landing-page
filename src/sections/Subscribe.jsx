import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contactUs"
      className="flex items-center justify-between gap-10 max-lg:flex-col max-container"
    >
      <h3 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" className="input" placeholder="subscribe@nike.com" />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Subscribe" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
