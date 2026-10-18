// Typed models for the UptimeRobot SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface DeleteMonitor {
  api_key: string
  id: number
}

export interface DeleteMonitorCreateData {
  api_key: string
  id: number
}

export interface GetMonitor {
  api_key: string
  format?: string
}

export interface GetMonitorCreateData {
  api_key: string
  format?: string
}

export interface NewMonitor {
  api_key: string
  friendly_name: string
  type: number
  url: string
}

export interface NewMonitorCreateData {
  api_key: string
  friendly_name: string
  type: number
  url: string
}

