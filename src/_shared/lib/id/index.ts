import { v4 } from "uuid";

export type TUid = string;

export const uid = (): TUid => v4();
