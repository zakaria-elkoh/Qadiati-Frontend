import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, X } from "lucide-react";
import { TagsInput } from "./TagsInpust";

const STORAGE_KEY = "draft_post";

const initialPostState = {
  content: "",
  image: null,
  imagePreview: "",
  hashtags: [],
  privacyLevel: "public",
  allowComments: true,
};

const AddPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [newPost, setNewPost] = useState(initialPostState);
  const [hasChanges, setHasChanges] = useState(false);

  // Load draft from localStorage when dialog opens
  useEffect(() => {
    if (isOpen) {
      const savedDraft = localStorage.getItem(STORAGE_KEY);
      if (savedDraft) {
        const parsedDraft = JSON.parse(savedDraft);
        setNewPost(parsedDraft);
      }
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(newPost);
    localStorage.removeItem(STORAGE_KEY); // Clear draft after successful submission
    setIsOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setNewPost(initialPostState);
    setHasChanges(false);
  };

  const updatePost = (field, value) => {
    setNewPost((prev) => ({
      ...prev,
      [field]: value,
    }));
    setHasChanges(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      updatePost("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePost("imagePreview", reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      updatePost("image", null);
      updatePost("imagePreview", "");
    }
  };

  const removeImage = () => {
    updatePost("image", null);
    updatePost("imagePreview", "");
  };

  const handleClose = () => {
    if (hasChanges) {
      setShowConfirmDialog(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleSaveAndClose = () => {
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPost));
    setShowConfirmDialog(false);
    setIsOpen(false);
  };

  const handleDiscardAndClose = () => {
    localStorage.removeItem(STORAGE_KEY);
    setShowConfirmDialog(false);
    setIsOpen(false);
    resetForm();
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            handleClose();
          } else {
            setIsOpen(true);
          }
        }}
      >
        <DialogTrigger asChild>
          <Button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2"
          >
            <Plus size={20} />
            Add New Post
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl p-0">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle>Add New Post</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="What's on your mind?"
                    value={newPost.content}
                    onChange={(e) => updatePost("content", e.target.value)}
                    required
                  />
                </div>

                <div className="">
                  <Label htmlFor="tags">Tags</Label>
                  <TagsInput
                    value={newPost.hashtags}
                    onValueChange={(tags) => updatePost("hashtags", tags)}
                  />
                </div>

                <div className="">
                  <Label htmlFor="image">Image</Label>
                  <div className="relative">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full"
                    />
                    {newPost.imagePreview && (
                      <div className="relative mt-2 w-full h-48 border border-red-400">
                        <img
                          src={newPost.imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={removeImage}
                        >
                          <X size={16} />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="allowComments"
                      checked={newPost.allowComments}
                      onCheckedChange={(checked) =>
                        updatePost("allowComments", checked)
                      }
                    />
                    <Label htmlFor="allowComments">Allow Comments</Label>
                  </div>
                  <div className="flex min-w-20 items-center">
                    <Label htmlFor="privacy" className="min-w-24">
                      Privacy Level
                    </Label>
                    <Select
                      value={newPost.privacyLevel}
                      onValueChange={(value) =>
                        updatePost("privacyLevel", value)
                      }
                    >
                      <SelectTrigger id="privacy">
                        <SelectValue placeholder="Select privacy level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Add Post
                </Button>
              </CardFooter>
            </form>
          </Card>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Save Changes?</AlertDialogTitle>
            <AlertDialogDescription>
              You have unsaved changes. Would you like to save them as a draft
              or discard them?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleDiscardAndClose}>
              Don't Save
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleSaveAndClose}>
              Save Draft
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AddPost;
