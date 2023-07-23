import { TAbiEvent, TContract } from "@entities/contract";
import { EventArgsForm } from "./EventArgsForm";

type TProps = {
  contract: TContract;
  event: TAbiEvent;
};

export const FetchEvents = ({ contract, event }: TProps) => {
  // const form = useEventArgs(event);
  const submit = console.log;
  return <EventArgsForm onSubmit={submit} event={event} />;
  // return <>{event.name}</>;
};
