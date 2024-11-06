import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ImageUploadDialog = ({
  isOpen,
  onClose,
  onImageSelect,
  isProfileUpload,
  dragActive,
  handleDrag,
  handleDrop,
}) => {
  const handleFileInput = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Upload {isProfileUpload ? "Profile" : "Banner"} Image
          </DialogTitle>
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
            {isProfileUpload
              ? "Recommended: Square image (1:1 ratio)"
              : "Recommended: 1024x180 pixels"}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageUploadDialog;
