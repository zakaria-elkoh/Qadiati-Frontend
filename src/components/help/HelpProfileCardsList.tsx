import React from "react";
import HelpProfileCard from "./HelpProfileCard";

const mockProfiles = [
  {
    id: 1,
    name: "SARAH JOHNSON",
    title: "Expert & Coach in Business Strategy",
    rating: 4.8,
    description:
      "Transform your business with our expert guidance in strategic planning and execution. Benefit from our extensive experience in business analysis, custom solutions, and innovative approaches to enhance your projects.",
    price: "400.00 USD",
    duration: "45 minutes",
    imageUrl:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
  },
  {
    id: 2,
    name: "MICHAEL CHEN",
    title: "Digital Marketing Specialist",
    rating: 1.3,
    description:
      "Elevate your digital presence with data-driven marketing strategies. Specialized in SEO, content marketing, and social media optimization to drive meaningful engagement and conversions.",
    price: "350.00 USD",
    duration: "60 minutes",
    imageUrl:
      "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
  },
  {
    id: 3,
    name: "EMMA RODRIGUEZ",
    title: "Financial Planning Consultant",
    rating: 2.7,
    description:
      "Expert financial guidance tailored to your goals. Comprehensive planning for investments, retirement, and wealth management with a focus on long-term growth and security.",
    price: "450.00 USD",
    duration: "50 minutes",
    imageUrl:
      "https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8=",
  },
  {
    id: 4,
    name: "DAVID KUMAR",
    title: "Tech Innovation Advisor",
    rating: 3.6,
    description:
      "Navigate the rapidly evolving tech landscape with expert guidance. Specialized in digital transformation, emerging technologies, and innovation strategy for businesses of all sizes.",
    price: "375.00 USD",
    duration: "55 minutes",
    imageUrl:
      "https://media.istockphoto.com/id/1404543950/photo/confident-intelligent-caucasian-businessman-sit-in-modern-office-listening-lecture-webinar.jpg?s=612x612&w=0&k=20&c=RtDM9RsLE6slOn8XPTQ7x7E8R9K6sFih7ZSzbs327Hk=",
  },
  {
    id: 5,
    name: "LISA ANDERSON",
    title: "Leadership Development Coach",
    rating: 4.5,
    description:
      "Unlock your leadership potential with personalized coaching. Focus on emotional intelligence, team management, and strategic decision-making to enhance your leadership impact.",
    price: "425.00 USD",
    duration: "45 minutes",
    imageUrl:
      "https://media.istockphoto.com/id/1191132083/photo/head-shot-portrait-of-young-happy-confident-businessman.jpg?s=612x612&w=0&k=20&c=G5HOxX9nuFHQS6b7j2iFch5odaKJ9ZwaVnZJcCydUf4=",
  },
];

const HelpProfileCardsList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        Expert Consultants
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-5">
        {mockProfiles.map((profile) => (
          <HelpProfileCard
            key={profile.id}
            name={profile.name}
            title={profile.title}
            rating={profile.rating}
            description={profile.description}
            price={profile.price}
            duration={profile.duration}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HelpProfileCardsList;
