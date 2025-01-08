import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h2 className="text-4xl font-bold text-center font-palanquin">
          What Our <span className="text-coral-red">Customers</span> say?
        </h2>
        <p className="max-w-lg m-auto mt-4 text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex items-center flex-1 mt-24 justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.imgURL} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
