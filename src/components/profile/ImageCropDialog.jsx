import { Slider } from "@/components/ui/slider";

const ImageCropDialog = ({
  isOpen,
  onClose,
  currentImage,
  isProfileUpload,
  crop,
  zoom,
  onZoomChange,
  onSave,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>
            Adjust {isProfileUpload ? "Profile" : "Banner"} Image
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div
            className={`relative ${
              isProfileUpload ? "h-96" : "h-48"
            } bg-black/10 rounded-lg overflow-hidden`}
          >
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

            <div
              className={`absolute inset-0 ${
                isProfileUpload ? "bg-black/40" : "bg-black/40"
              }`}
            >
              <div
                className={`absolute ${
                  isProfileUpload
                    ? "w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    : "w-full h-full"
                } bg-transparent border-2 border-white`}
              />
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
              onValueChange={([value]) => onZoomChange(value)}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onSave}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCropDialog;
