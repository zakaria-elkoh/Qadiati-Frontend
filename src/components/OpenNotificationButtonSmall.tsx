import { Bell } from "lucide-react";

// Alternate version with smaller badge
const OpenNotificationButtonSmall = ({ count = 5 }) => {
  return (
    <>
      <Bell className="h-5 w-5" />
      {count > 0 && (
        <span
          className={`absolute -top-1 ${
            count > 99 ? " px-1 -right-4" : " -right-1"
          } flex items-center justify-center min-w-[16px] h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-medium`}
        >
          {count > 99 ? "99+" : count}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        </span>
      )}
      <span className="sr-only">Notifications ({count})</span>
    </>
  );
};

export { OpenNotificationButtonSmall };
