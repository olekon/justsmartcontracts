import { useContext } from "react";
import { NotificationsContext } from "./NotificationsProvider";

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  return context.notify;
};
