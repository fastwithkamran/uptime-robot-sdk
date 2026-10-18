export interface DeleteMonitor {
    api_key: string;
    id: number;
}
export interface DeleteMonitorCreateData {
    api_key: string;
    id: number;
}
export interface GetMonitor {
    api_key: string;
    format?: string;
}
export interface GetMonitorCreateData {
    api_key: string;
    format?: string;
}
export interface NewMonitor {
    api_key: string;
    friendly_name: string;
    type: number;
    url: string;
}
export interface NewMonitorCreateData {
    api_key: string;
    friendly_name: string;
    type: number;
    url: string;
}
