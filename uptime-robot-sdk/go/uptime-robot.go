package voxgiguptimerobotsdk

import (
	"github.com/voxgig-sdk/uptime-robot-sdk/go/core"
	"github.com/voxgig-sdk/uptime-robot-sdk/go/entity"
	"github.com/voxgig-sdk/uptime-robot-sdk/go/feature"
	_ "github.com/voxgig-sdk/uptime-robot-sdk/go/utility"
)

// Type aliases preserve external API.
type UptimeRobotSDK = core.UptimeRobotSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type UptimeRobotEntity = core.UptimeRobotEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type UptimeRobotError = core.UptimeRobotError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDeleteMonitorEntityFunc = func(client *core.UptimeRobotSDK, entopts map[string]any) core.UptimeRobotEntity {
		return entity.NewDeleteMonitorEntity(client, entopts)
	}
	core.NewGetMonitorEntityFunc = func(client *core.UptimeRobotSDK, entopts map[string]any) core.UptimeRobotEntity {
		return entity.NewGetMonitorEntity(client, entopts)
	}
	core.NewNewMonitorEntityFunc = func(client *core.UptimeRobotSDK, entopts map[string]any) core.UptimeRobotEntity {
		return entity.NewNewMonitorEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewUptimeRobotSDK = core.NewUptimeRobotSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewUptimeRobotSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *UptimeRobotSDK  { return NewUptimeRobotSDK(nil) }
func Test() *UptimeRobotSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
