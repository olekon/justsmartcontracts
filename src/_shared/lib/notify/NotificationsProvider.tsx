import { ReactNode, createContext, useCallback } from "react";
import { notification } from "antd";
import { TWithChildren } from "../props";

type TNotificationContext = {
  notify: (text: ReactNode, isError?: boolean) => void;
};

export const NotificationsContext = createContext<TNotificationContext>({
  notify: () => null,
});

export const NotificationsProvider = ({ children }: TWithChildren) => {
  const [api, context] = notification.useNotification();

  const notify = useCallback(
    (text: ReactNode, isError?: boolean) => {
      const method = isError ? "error" : "info";
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
