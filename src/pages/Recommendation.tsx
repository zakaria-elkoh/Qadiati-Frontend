import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Palette, Music, Film, Microscope } from "lucide-react";

const TopicRecommender = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const interests = [
    { id: 1, name: "Technology", icon: Code },
    { id: 2, name: "Art", icon: Palette },
    { id: 3, name: "Music", icon: Music },
    { id: 4, name: "Literature", icon: BookOpen },
    { id: 5, name: "Films", icon: Film },
    { id: 6, name: "Science", icon: Microscope },
  ];

  const topicDatabase = {
    Technology: [
      "Web Development",
      "AI/ML",
      "Cybersecurity",
      "Mobile Apps",
      "Cloud Computing",
    ],
    Art: [
      "Digital Art",
      "Traditional Painting",
      "Sculpture",
      "Photography",
      "Graphic Design",
    ],
    Music: ["Classical", "Jazz", "Electronic", "Rock", "World Music"],
    Literature: [
      "Contemporary Fiction",
      "Poetry",
      "Science Fiction",
      "Non-fiction",
      "Literary Criticism",
    ],
    Films: [
      "Independent Cinema",
      "Documentary",
      "Animation",
      "World Cinema",
      "Film Analysis",
    ],
    Science: [
      "Physics",
      "Biology",
      "Astronomy",
      "Chemistry",
      "Environmental Science",
    ],
  };

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest.name)
        ? prev.filter((item) => item !== interest.name)
        : [...prev, interest.name]
    );
  };

  const generateRecommendations = () => {
    const newRecommendations = selectedInterests.flatMap((interest) => {
      const topics = topicDatabase[interest] || [];
      return topics.slice(0, 2).map((topic) => ({
        category: interest,
        topic: topic,
      }));
    });
    setRecommendations(newRecommendations);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Topic Recommender</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Select Your Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interests.map((interest) => {
              const Icon = interest.icon;
              const isSelected = selectedInterests.includes(interest.name);
              return (
                <Button
                  key={interest.id}
                  variant={isSelected ? "default" : "outline"}
                  className="flex items-center gap-2"
                  onClick={() => toggleInterest(interest)}
                >
                  <Icon className="w-4 h-4" />
                  {interest.name}
                </Button>
              );
            })}
          </div>
        </div>

        <Button
          className="w-full mb-6"
          onClick={generateRecommendations}
          disabled={selectedInterests.length === 0}
        >
          Get Recommendations
        </Button>

        {recommendations.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-3">Recommended Topics</h3>
            <div className="grid gap-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="text-sm text-gray-500">{rec.category}</div>
                  <div className="font-medium">{rec.topic}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TopicRecommender;
