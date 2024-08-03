

export enum LogLevel {
    Trace = 7,
    Debug = 6,
    Info = 6,
    Warn = 4,
    Error = 3,
    Fatal = 2,
}

export interface Message {
    kind: string;
}

export interface MessageSink {
    (message: Message): void;
}

export interface MessageBus {
    addListener(listener: MessageSink): void;
    removeListener(listener: MessageSink): void;
    send(message: Message): void;
}

export interface LoggingMessageBus extends MessageBus {
    isEnabled(level: LogLevel): boolean;

    setLevel(level: LogLevel): void;

    fatal(error: Error, message?: string, ...args: unknown[]): void;
    fatal(message: string, ...args: unknown[]): void;
    error(error: Error, message?: string, ...args: unknown[]): void;
    error(message?: string, ...args: unknown[]): void;
    warn(error: Error, message?: string, ...args: unknown[]): void;
    warn(message: string, ...args: unknown[]): void;
    info(error: Error, message?: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
    debug(error: Error, message?: string, ...args: unknown[]): void;
    debug(message: string, ...args: unknown[]): void;
    trace(error: Error, message?: string, ...args: unknown[]): void;
    trace(message: string, ...args: unknown[]): void;
}
