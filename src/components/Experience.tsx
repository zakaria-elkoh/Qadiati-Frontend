import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Briefcase } from "lucide-react";
import { ExperienceModal } from "./ExperienceModal";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "Senior Developer",
      company: "Tech Corp",
      duration: "2020 - Present",
      skills: "React, Node.js, TypeScript",
    },
  ]);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentExperience(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (experience) => {
    setIsEditing(true);
    setCurrentExperience(experience);
    setIsModalOpen(true);
  };

  const handleAddExperience = (newExperience) => {
    setExperiences((prev) => [
      ...prev,
      { ...newExperience, id: Math.max(...prev.map((e) => e.id), 0) + 1 },
    ]);
  };

  const handleUpdateExperience = (updatedExperience) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === updatedExperience.id ? updatedExperience : exp
      )
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Experience</CardTitle>
        <Button size="icon" variant="outline" onClick={handleAddClick}>
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex items-start space-x-4 border rounded-lg p-4"
            >
              <div className="mt-1">
                <Avatar className="h-8 w-8 bg-primary/10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </Avatar>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{experience.title}</h4>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleEditClick(experience)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {experience.company}
                </p>
                <p className="text-sm text-muted-foreground">
                  {experience.duration}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.split(",").map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      {isModalOpen && (
        <ExperienceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isEditing={isEditing}
          experience={currentExperience}
          onAdd={handleAddExperience}
          onUpdate={handleUpdateExperience}
        />
      )}
    </Card>
  );
}
