import { useCallback, useState } from "react";
import { usePublicClient } from "wagmi";
import { TAbiEvent, TContract } from "@entities/contract";
import { TEventQuery } from "./types";
import { useNotifications } from "@shared/lib/notify";

export const useFetchEvents = (contract: TContract, event: TAbiEvent) => {
  const notify = useNotifications();

  const client = usePublicClient();

  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(
    ({ fromBlock, toBlock, topics }: TEventQuery) => {
      setLoading(true);

      const hasTopics = Object.values(topics).length > 0;

      const config = {
        address: contract.address,
        event: event,
        fromBlock: fromBlock ? BigInt(fromBlock) : "earliest",
        toBlock: toBlock ? BigInt(toBlock) : "latest",
        ...(hasTopics && {
          args: Object.fromEntries(
            Object.entries(topics).map(([key, value]) => [key, value.values[0]])
          ),
        }),
      };

      client
        // @ts-ignore: no way I am going to make it properly typescript-compatible
        .getLogs(config)
        .then((result) => {
          setEvents(result);
        })
        .catch((e) => {
          notify(e.details || e.toString(), "error", 8);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [client, contract.address, event, notify]
  );

  return {
    events,
    loading,
    fetch,
  };
};
