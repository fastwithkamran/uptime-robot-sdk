# UptimeRobot Python SDK Reference

Complete API reference for the UptimeRobot Python SDK.


## UptimeRobotSDK

### Constructor

```python
from uptimerobot_sdk import UptimeRobotSDK

client = UptimeRobotSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `UptimeRobotSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = UptimeRobotSDK.test()
```


### Instance Methods

#### `DeleteMonitor(data=None)`

Create a new `DeleteMonitorEntity` instance. Pass `None` for no initial data.

#### `GetMonitor(data=None)`

Create a new `GetMonitorEntity` instance. Pass `None` for no initial data.

#### `NewMonitor(data=None)`

Create a new `NewMonitorEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## DeleteMonitorEntity

```python
delete_monitor = client.DeleteMonitor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key` | `str` | Yes |  |
| `id` | `int` | Yes | The ID of the monitor to delete |

### Operations

#### `create(reqdata, ctrl=None) -> DeleteMonitorEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.DeleteMonitor().create({
    "api_key": "example_api_key",  # str
    "id": 1,  # int
})
```

Declares a `application/x-www-form-urlencoded` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeleteMonitorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GetMonitorEntity

```python
get_monitor = client.GetMonitor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key` | `str` | Yes | Your UptimeRobot API Key |
| `format` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> GetMonitorEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.GetMonitor().create({
    "api_key": "example_api_key",  # str
})
```

Declares a `application/x-www-form-urlencoded` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetMonitorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewMonitorEntity

```python
new_monitor = client.NewMonitor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key` | `str` | Yes |  |
| `friendly_name` | `str` | Yes |  |
| `type` | `int` | Yes | 1 = HTTP(s), 2 = Keyword, 3 = Ping, 4 = Port |
| `url` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> NewMonitorEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.NewMonitor().create({
    "api_key": "example_api_key",  # str
    "friendly_name": "example_friendly_name",  # str
    "type": 1,  # int
    "url": "example_url",  # str
})
```

Declares a `application/x-www-form-urlencoded` body, which this SDK does not encode yet: it sends the data as JSON.

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewMonitorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = UptimeRobotSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

