const ShoeCard = ({ imgURL, changeBidShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    console.log(imgURL);
    console.log(bigShoeImg);
    if (imgURL !== bigShoeImg) {
      changeBidShoeImage(imgURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        imgURL === bigShoeImg ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          width={127}
          height={103}
          className="object-contain"
          alt="shoe card image"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
