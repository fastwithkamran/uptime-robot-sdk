# UptimeRobot SDK exists test

import pytest
from uptimerobot_sdk import UptimeRobotSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UptimeRobotSDK.test(None, None)
        assert testsdk is not None
