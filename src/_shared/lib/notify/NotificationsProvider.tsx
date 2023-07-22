import { ReactNode, createContext, useCallback } from "react";
import { notification } from "antd";
import { TWithChildren } from "../props";

export type Status = "success" | "error" | "info";

type TNotificationContext = {
  notify: (text: ReactNode, status?: Status) => void;
};

export const NotificationsContext = createContext<TNotificationContext>({
  notify: () => null,
});

export const NotificationsProvider = ({ children }: TWithChildren) => {
  const [api, context] = notification.useNotification();

  const notify = useCallback(
    (text: ReactNode, status?: Status) => {
      const method = status || "info";
      api[method]({ placement: "topRight", message: text, duration: 5 });
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
