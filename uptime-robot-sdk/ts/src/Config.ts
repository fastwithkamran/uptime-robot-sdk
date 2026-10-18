
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'UptimeRobot',
        slug: "uptime-robot",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://api.uptimerobot.com/v2",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        delete_monitor: {
        },
  
        get_monitor: {
        },
  
        new_monitor: {
        },
  
    }
  }


  entity = {
    "delete_monitor": {
      "fields": [
        {
          "name": "api_key",
          "title": "Api Key",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "req": true,
          "short": "The ID of the monitor to delete"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "deleteMonitor"
                }
              ],
              "parts": [
                "deleteMonitor"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "body": {
                "fields": [
                  {
                    "name": "api_key"
                  },
                  {
                    "name": "id"
                  }
                ],
                "kind": "form",
                "media": "application/x-www-form-urlencoded"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "get_monitor": {
      "fields": [
        {
          "name": "api_key",
          "title": "Api Key",
          "type": "`$STRING`",
          "req": true,
          "short": "Your UptimeRobot API Key"
        },
        {
          "name": "format",
          "title": "Format",
          "type": "`$STRING`"
        }
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
                  "lit": "getMonitors"
                }
              ],
              "parts": [
                "getMonitors"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "body": {
                "fields": [
                  {
                    "name": "api_key"
                  },
                  {
                    "name": "format"
                  }
                ],
                "kind": "form",
                "media": "application/x-www-form-urlencoded"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "new_monitor": {
      "fields": [
        {
          "name": "api_key",
          "title": "Api Key",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "friendly_name",
          "title": "Friendly Name",
          "type": "`$STRING`",
          "req": true
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$INTEGER`",
          "req": true,
          "short": "1 = HTTP(s), 2 = Keyword, 3 = Ping, 4 = Port"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "req": true
        }
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
                  "lit": "newMonitor"
                }
              ],
              "parts": [
                "newMonitor"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "body": {
                "fields": [
                  {
                    "name": "api_key"
                  },
                  {
                    "name": "friendly_name"
                  },
                  {
                    "name": "type"
                  },
                  {
                    "name": "url"
                  }
                ],
                "kind": "form",
                "media": "application/x-www-form-urlencoded"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

