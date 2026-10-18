# UptimeRobot SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "UptimeRobot",
            "slug": "uptime-robot",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.uptimerobot.com/v2",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "delete_monitor": {},
                "get_monitor": {},
                "new_monitor": {},
            },
        },
        "entity": {
      "delete_monitor": {
        "fields": [
          {
            "name": "api_key",
            "title": "Api Key",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "req": True,
            "short": "The ID of the monitor to delete",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "delete_monitor",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/deleteMonitor",
                "segments": [
                  {
                    "lit": "deleteMonitor",
                  },
                ],
                "parts": [
                  "deleteMonitor",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "body": {
                  "fields": [
                    {
                      "name": "api_key",
                    },
                    {
                      "name": "id",
                    },
                  ],
                  "kind": "form",
                  "media": "application/x-www-form-urlencoded",
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "get_monitor": {
        "fields": [
          {
            "name": "api_key",
            "title": "Api Key",
            "type": "`$STRING`",
            "req": True,
            "short": "Your UptimeRobot API Key",
          },
          {
            "name": "format",
            "title": "Format",
            "type": "`$STRING`",
          },
        ],
        "name": "get_monitor",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/getMonitors",
                "segments": [
                  {
                    "lit": "getMonitors",
                  },
                ],
                "parts": [
                  "getMonitors",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "body": {
                  "fields": [
                    {
                      "name": "api_key",
                    },
                    {
                      "name": "format",
                    },
                  ],
                  "kind": "form",
                  "media": "application/x-www-form-urlencoded",
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "new_monitor": {
        "fields": [
          {
            "name": "api_key",
            "title": "Api Key",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "friendly_name",
            "title": "Friendly Name",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$INTEGER`",
            "req": True,
            "short": "1 = HTTP(s), 2 = Keyword, 3 = Ping, 4 = Port",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "new_monitor",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/newMonitor",
                "segments": [
                  {
                    "lit": "newMonitor",
                  },
                ],
                "parts": [
                  "newMonitor",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "body": {
                  "fields": [
                    {
                      "name": "api_key",
                    },
                    {
                      "name": "friendly_name",
                    },
                    {
                      "name": "type",
                    },
                    {
                      "name": "url",
                    },
                  ],
                  "kind": "form",
                  "media": "application/x-www-form-urlencoded",
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
