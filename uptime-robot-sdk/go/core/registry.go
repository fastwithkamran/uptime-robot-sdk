package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDeleteMonitorEntityFunc func(client *UptimeRobotSDK, entopts map[string]any) UptimeRobotEntity

var NewGetMonitorEntityFunc func(client *UptimeRobotSDK, entopts map[string]any) UptimeRobotEntity

var NewNewMonitorEntityFunc func(client *UptimeRobotSDK, entopts map[string]any) UptimeRobotEntity

