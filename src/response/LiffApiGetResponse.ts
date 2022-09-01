import { LiffApp } from "../entity/LiffApp";

export type LiffApiCreateResponse = {
    liffId: string
};

export type LiffApiGetResponse = {
    apps: LiffApp[]
};