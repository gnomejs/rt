import { LoggingMessageBus } from "./message-bus.ts";

export type ExecutionStatus =
    | "none"
    | "pending"
    | "running"
    | "completed"
    | "failed"
    | "cancelled"
    | "skipped";

interface ExecutionContext {
    bus: LoggingMessageBus;

    outputs: Record<string, unknown>;

    signal: AbortSignal;

    env: Record<string, string | undefined>;

    secrets: Record<string, string | undefined>;

    defaults: Record<string, unknown>;
}