import { TAbiEvent, TContract } from "@entities/contract";
import { EventArgsForm } from "./EventArgsForm";
import { TEventQuery } from "../model/types";
import { useFetchEvents } from "../model/useFetchEvents";
import { EventsTable } from "./EventsTable";

type TProps = {
  contract: TContract;
  event: TAbiEvent;
};

export const FetchEvents = ({ contract, event }: TProps) => {
  const { loading, fetch, events } = useFetchEvents(contract, event);

  const submit = (values: TEventQuery) => {
    fetch(values);
  };

  return (
    <>
      <EventArgsForm onSubmit={submit} event={event} loading={loading} />
      <EventsTable
        chain={contract.chain}
        event={event}
        items={events}
        loading={loading}
      />
    </>
  );
};
