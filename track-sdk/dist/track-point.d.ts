import { EventName, TrackConfig, CommonParams, EventParams } from './types.js';
declare class TrackPoint {
    private static instance;
    private config;
    private commonParams;
    private userEnvInfo;
    private requestQueue;
    private isProcessingQueue;
    private activeRequests;
    private constructor();
    static getInstance(): TrackPoint;
    register(config: TrackConfig): void;
    addCommonParams(params: CommonParams): void;
    sendEvent(eventName: EventName, params: EventParams): Promise<void>;
    private collectUserEnvInfo;
    private setupErrorCapture;
    private shouldSample;
    private processQueue;
    private sendToServer;
    private saveToLocalStorage;
    private processPendingEvents;
}
export declare const trackPoint: TrackPoint;
export declare const register: (config: TrackConfig) => void;
export declare const sendEvent: (eventName: EventName, params: EventParams) => Promise<void>;
export declare const addCommonParams: (params: CommonParams) => void;
export {};
