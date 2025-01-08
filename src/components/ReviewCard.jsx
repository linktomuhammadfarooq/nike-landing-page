import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt={customerName}
        className="object-cover h-[120px] w-[120px] rounded-full"
      />
      <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
      <div className="flex items-center justify-center gap-2.5 mt-3">
        <img
          src={star}
          alt="rating star"
          width={24}
          height={24}
          className="object-contain m-0 "
        />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-bold font-palanquin">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
