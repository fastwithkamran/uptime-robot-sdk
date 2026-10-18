
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UptimeRobotSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = UptimeRobotSDK.test()
    equal(testsdk instanceof UptimeRobotSDK, true,
      'UptimeRobotSDK.test() must return a client synchronously')
  })

})
