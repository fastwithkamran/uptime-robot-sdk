# Typed models for the UptimeRobot SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class DeleteMonitor(TypedDict):
    api_key: str
    id: int


class DeleteMonitorCreateData(TypedDict):
    api_key: str
    id: int


class GetMonitorRequired(TypedDict):
    api_key: str


class GetMonitor(GetMonitorRequired, total=False):
    format: str


class GetMonitorCreateDataRequired(TypedDict):
    api_key: str


class GetMonitorCreateData(GetMonitorCreateDataRequired, total=False):
    format: str


class NewMonitor(TypedDict):
    api_key: str
    friendly_name: str
    type: int
    url: str


class NewMonitorCreateData(TypedDict):
    api_key: str
    friendly_name: str
    type: int
    url: str
