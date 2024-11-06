import { DropdownMenuItem } from "./ui/dropdown-menu";

const NotificationDropDown = () => {
  return (
    <>
      <DropdownMenuItem>
        <div className="flex flex-col gap-1">
          <p className="text-sm">New message from Sarah</p>
          <p className="text-xs text-muted-foreground">2 minutes ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Project update</p>
          <p className="text-xs text-muted-foreground">1 hour ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div className="flex flex-col gap-1">
          <p className="text-sm">Him accepted you connection</p>
          <p className="text-xs text-muted-foreground">3 hour ago</p>
        </div>
      </DropdownMenuItem>
    </>
  );
};

export default NotificationDropDown;
