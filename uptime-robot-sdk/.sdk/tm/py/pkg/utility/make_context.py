# UptimeRobot SDK utility: make_context

from projectname_sdk.core.context import UptimeRobotContext


def make_context_util(ctxmap, basectx):
    return UptimeRobotContext(ctxmap, basectx)
