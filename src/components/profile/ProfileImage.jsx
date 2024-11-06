import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const ProfileImage = ({ onEditClick }) => {
  const [profileImage, setProfileImage] = useState("/api/placeholder/192/192");
  const [isUploadDialog, setIsUploadDialog] = useState(false);
  const [isCropDialog, setIsCropDialog] = useState(false);
  const [saving, setSaving] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleImageSelect(file);
    }
  };

  const handleImageSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setCurrentImage(e.target.result);
      setIsUploadDialog(false);
      setIsCropDialog(true);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const openUploadDialog = (isProfile) => {
    setIsUploadDialog(true);
  };

  const handleCropComplete = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setProfileImage(currentImage);
      setIsCropDialog(false);
      setCrop({ x: 0, y: 0 });
      setZoom(1);
    }, 3000);
  };

  return (
    <>
      <div className="absolute top-28 left-10">
        <div
          onClick={() => openUploadDialog(true)}
          className="relative w-48 h-48 border-4 bg-gray-100 border-white rounded-full cursor-pointer group dark:bg-black/85 dark:border-white/30"
        >
          <Avatar className="w-48 h-48">
            <AvatarImage
              alt="Profile picture"
              src={profileImage}
              className="object-cover rounded-full w-full h-full"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/85 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                openUploadDialog(true);
              }}
            >
              <PenSquare className="h-4 w-4 text-stone-800" />
            </Button>
          </Avatar>
        </div>
      </div>

      {/* Upload Dialog */}
      <Dialog open={isUploadDialog} onOpenChange={setIsUploadDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Profile Image</DialogTitle>
          </DialogHeader>

          <div
            className={`relative h-64 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center gap-4 
              ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Drag and drop your image here, or
              </p>
              <label className="mt-2 inline-block">
                <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                  click to browse
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileInput}
                />
              </label>
            </div>

            <div className="text-xs text-gray-500">
              Recommended: Square image (1:1 ratio)
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Crop Dialog */}
      <Dialog open={isCropDialog} onOpenChange={setIsCropDialog}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Adjust Profile Image</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="relative aspect-square w-full bg-black/10 rounded-lg overflow-hidden">
              {currentImage && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${currentImage})`,
                    backgroundPosition: `${50 + crop.x}% ${50 + crop.y}%`,
                    backgroundSize: `${zoom * 100}%`,
                    backgroundRepeat: "no-repeat",
                  }}
                />
              )}

              {/* Overlay for aspect ratio */}
              <div className="absolute inset-0 bg-black/40">
                <div className="absolute inset-4 rounded-full bg-transparent border-2 border-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Zoom</label>
              <Slider
                value={[zoom]}
                min={1}
                max={3}
                step={0.1}
                className="w-full"
                onValueChange={([value]) => setZoom(value)}
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsCropDialog(false);
                  setCrop({ x: 0, y: 0 });
                  setZoom(1);
                }}
              >
                Cancel
              </Button>
              <Button
                disabled={saving}
                onClick={handleCropComplete}>
                {saving ? "Saving..." : "Save"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileImage;
