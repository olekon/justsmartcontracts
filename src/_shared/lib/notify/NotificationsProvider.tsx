import { createContext, useCallback } from "react";
import { notification } from "antd";
import { TWithChildren } from "../props";

type TNotificationContext = {
  notify: (text: string) => void;
};

export const NotificationsContext = createContext<TNotificationContext>({
  notify: () => null,
});

export const NotificationsProvider = ({ children }: TWithChildren) => {
  const [api, context] = notification.useNotification();

  const notify = useCallback(
    (text: string) => {
      api.info({ placement: "topRight", message: text });
    },
    [api]
  );
  return (
    <>
      {context}
      <NotificationsContext.Provider value={{ notify }}>
        {children}
      </NotificationsContext.Provider>
    </>
  );
};
