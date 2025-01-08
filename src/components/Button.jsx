const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`
    ${
      backgroundColor
        ? ` ${backgroundColor} ${textColor} ${borderColor}`
        : " bg-coral-red border-coral-red text-white"
    }
    flex items-center justify-center py-4 text-lg leading-none  border rounded-full px-7 font-montserrat`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
