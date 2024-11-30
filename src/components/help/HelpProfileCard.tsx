import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, RefreshCw } from "lucide-react";
import RatingStars from "./RatingStars";
import { Link } from "react-router-dom";
import VerifiedIcon from "../ui/VerifiedIcon";

interface ProfileCardProps {
  name: string;
  title: string;
  rating: number;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
}

const HelpProfileCard = ({
  name,
  title,
  rating,
  description,
  price,
  duration,
  imageUrl,
}: ProfileCardProps) => {
  return (
    <Card className="w-full overflow-hidden border-gray-300 border-2">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image */}
          <div className="w-full md:w-72 h-64 md:h-auto relative">
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <VerifiedIcon w={6} h={6} />
                </div>
                <p className="text-lg text-muted-foreground">{title}</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-sm text-muted-foreground">From</p>
                <p className="text-xl font-bold">{price}</p>
                <p className="text-sm text-muted-foreground">/{duration}</p>
              </div>
            </div>

            {/* Rating */}
            <RatingStars rating={rating} />

            {/* Services */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                <span>Video Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                <span>Follow-Up Sessions</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4">{description}</p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-500 text-black">
                Consult Now
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Link to={"/profile"} className="">
                  See profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelpProfileCard;
