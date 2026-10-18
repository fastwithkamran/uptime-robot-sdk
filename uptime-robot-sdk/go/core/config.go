package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "UptimeRobot",
			"slug": "uptime-robot",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.uptimerobot.com/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"delete_monitor": map[string]any{},
				"get_monitor": map[string]any{},
				"new_monitor": map[string]any{},
			},
		},
		"entity": map[string]any{
			"delete_monitor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_key",
						"title": "Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
						"short": "The ID of the monitor to delete",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "delete_monitor",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/deleteMonitor",
								"segments": []any{
									map[string]any{
										"lit": "deleteMonitor",
									},
								},
								"parts": []any{
									"deleteMonitor",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"body": map[string]any{
									"fields": []any{
										map[string]any{
											"name": "api_key",
										},
										map[string]any{
											"name": "id",
										},
									},
									"kind": "form",
									"media": "application/x-www-form-urlencoded",
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"get_monitor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_key",
						"title": "Api Key",
						"type": "`$STRING`",
						"req": true,
						"short": "Your UptimeRobot API Key",
					},
					map[string]any{
						"name": "format",
						"title": "Format",
						"type": "`$STRING`",
					},
				},
				"name": "get_monitor",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/getMonitors",
								"segments": []any{
									map[string]any{
										"lit": "getMonitors",
									},
								},
								"parts": []any{
									"getMonitors",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"body": map[string]any{
									"fields": []any{
										map[string]any{
											"name": "api_key",
										},
										map[string]any{
											"name": "format",
										},
									},
									"kind": "form",
									"media": "application/x-www-form-urlencoded",
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"new_monitor": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_key",
						"title": "Api Key",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "friendly_name",
						"title": "Friendly Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$INTEGER`",
						"req": true,
						"short": "1 = HTTP(s), 2 = Keyword, 3 = Ping, 4 = Port",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "new_monitor",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/newMonitor",
								"segments": []any{
									map[string]any{
										"lit": "newMonitor",
									},
								},
								"parts": []any{
									"newMonitor",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"body": map[string]any{
									"fields": []any{
										map[string]any{
											"name": "api_key",
										},
										map[string]any{
											"name": "friendly_name",
										},
										map[string]any{
											"name": "type",
										},
										map[string]any{
											"name": "url",
										},
									},
									"kind": "form",
									"media": "application/x-www-form-urlencoded",
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
