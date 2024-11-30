import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, GraduationCap } from "lucide-react";
import { EducationModal } from "./EducationModal";

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEducation, setCurrentEducation] = useState(null);
  const [educations, setEducations] = useState([
    {
      id: 1,
      school: "YouCode",
      degree: "Première année développement Full-Stack",
      field: "Informatique",
      duration: "Sep 2023 - May 2025",
      skills: "REST APIs, JavaScript",
      imageUrl: "/placeholder.svg?height=48&width=48",
      schoolImageUrl: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      school: "ISTHT Founty Agadir",
      degree: "Technicien Spécialisé en Animation Touristique",
      field: "Animation Touristique",
      duration: "Sep 2019 - Jun 2021",
      skills: "Time Management, Communication",
      imageUrl: "/placeholder.svg?height=48&width=48",
    },
  ]);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentEducation(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (education) => {
    setIsEditing(true);
    setCurrentEducation(education);
    setIsModalOpen(true);
  };

  const handleAddEducation = (newEducation) => {
    setEducations((prev) => [
      ...prev,
      { ...newEducation, id: Math.max(...prev.map((e) => e.id), 0) + 1 },
    ]);
  };

  const handleUpdateEducation = (updatedEducation) => {
    setEducations((prev) =>
      prev.map((edu) =>
        edu.id === updatedEducation.id ? updatedEducation : edu
      )
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Education</CardTitle>
        <Button size="icon" variant="outline" onClick={handleAddClick}>
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {educations.map((education) => (
            <div
              key={education.id}
              className="flex space-x-4 border rounded-lg p-4 relative"
            >
              <Avatar className="w-12 h-12">
                {education.imageUrl ? (
                  <AvatarImage
                    alt={education.school}
                    src={education.imageUrl}
                  />
                ) : (
                  <GraduationCap className="h-6 w-6" />
                )}
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{education.school}</h3>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEditClick(education)}
                    className="absolute top-2 right-2"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {education.degree}, {education.field}
                </p>
                <p className="text-sm text-muted-foreground">
                  {education.duration}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {education.skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
                {education.schoolImageUrl && (
                  <div className="mt-3">
                    <img
                      alt={`${education.school}`}
                      className="rounded"
                      height="100"
                      src={education.schoolImageUrl}
                      style={{
                        aspectRatio: "200/100",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      {isModalOpen && (
        <EducationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isEditing={isEditing}
          education={currentEducation}
          onAdd={handleAddEducation}
          onUpdate={handleUpdateEducation}
        />
      )}
    </Card>
  );
};

export default Education;
