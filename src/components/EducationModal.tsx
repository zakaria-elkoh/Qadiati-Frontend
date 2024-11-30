import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EducationModal({
  isOpen,
  onClose,
  isEditing,
  education,
  onAdd,
  onUpdate,
}) {
  const [formData, setFormData] = useState({
    id: education?.id || null,
    school: education?.school || "",
    degree: education?.degree || "",
    field: education?.field || "",
    duration: education?.duration || "",
    skills: education?.skills || "",
    imageUrl: education?.imageUrl || "/placeholder.svg?height=48&width=48",
    schoolImageUrl: education?.schoolImageUrl || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Update Education" : "Add Education"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="school">School/Institution</Label>
            <Input
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="degree">Degree</Label>
            <Input
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="field">Field of Study</Label>
            <Input
              id="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="Sep 2023 - May 2025"
            />
          </div>
          <div>
            <Label htmlFor="skills">Skills (comma-separated)</Label>
            <Input
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              placeholder="REST APIs, JavaScript, React"
            />
          </div>
          <div>
            <Label htmlFor="imageUrl">School Logo URL (optional)</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="/placeholder.svg?height=48&width=48"
            />
          </div>
          <div>
            <Label htmlFor="schoolImageUrl">School Image URL (optional)</Label>
            <Input
              id="schoolImageUrl"
              name="schoolImageUrl"
              value={formData.schoolImageUrl}
              onChange={handleChange}
              placeholder="/placeholder.svg?height=100&width=200"
            />
          </div>
          <Button type="submit" className="w-full">
            {isEditing ? "Update" : "Add"} Education
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
