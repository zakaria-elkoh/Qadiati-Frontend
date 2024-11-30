import { Star } from "lucide-react";

const RatingStars = ({ rating = 0 }) => {
  // Ensure rating is between 0 and 5
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  // Calculate full and partial stars
  const fullStars = Math.floor(normalizedRating);
  const hasPartialStar = normalizedRating % 1 !== 0;
  const partialStarPercentage = (normalizedRating % 1) * 100;

  return (
    <div className="flex items-center gap-1 mb-4">
      <span className="text-sm mr-2">({normalizedRating.toFixed(1)}/5)</span>

      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <Star
          key={`full-star-${index}`}
          className="h-5 w-5 text-yellow-400 fill-yellow-400"
        />
      ))}

      {/* Render partial star if needed */}
      {hasPartialStar && (
        <div className="relative">
          <Star className="h-5 w-5 text-yellow-400" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partialStarPercentage}%` }}
          >
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      )}

      {/* Render remaining empty stars */}
      {[...Array(5 - fullStars - (hasPartialStar ? 1 : 0))].map((_, index) => (
        <Star key={`empty-star-${index}`} className="h-5 w-5 text-yellow-400" />
      ))}
    </div>
  );
};

export default RatingStars;
