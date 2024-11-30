import { BadgeCheck } from "lucide-react";

const VerifiedIcon = ({ w = 6, h = 6 }) => {
  return (
    <BadgeCheck
      strokeWidth={3}
      className={`h-${h} w-${w} text-blue-600 fill-blue-100`}
    />
  );
};

export default VerifiedIcon;
