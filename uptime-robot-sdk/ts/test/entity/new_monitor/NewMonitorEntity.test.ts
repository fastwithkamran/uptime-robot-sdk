

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { UptimeRobotSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('NewMonitorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when UPTIME_ROBOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('UPTIME_ROBOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UptimeRobotSDK.test()
    const ent = testsdk.NewMonitor()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = UptimeRobotSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.NewMonitor().create({"api_key":1,"friendly_name":"x","type":1,"url":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.UPTIME_ROBOT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'new_monitor.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"api_key":{"a":true,"h":"Api Key","n":"api_key","r":true,"t":"`$STRING`","key$":"api_key","index$":0},"friendly_name":{"a":true,"h":"Friendly Name","n":"friendly_name","r":true,"t":"`$STRING`","key$":"friendly_name","index$":1},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"1 = HTTP(s), 2 = Keyword, 3 = Ping, 4 = Port","t":"`$INTEGER`","key$":"type","index$":2},"url":{"a":true,"h":"Url","n":"url","r":true,"t":"`$STRING`","key$":"url","index$":3}},"name":"new_monitor","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /newMonitor","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/newMonitor","q":{},"r":{},"rb":{"fields":[{"name":"api_key"},{"name":"friendly_name"},{"name":"type"},{"name":"url"}],"kind":"form","media":"application/x-www-form-urlencoded"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"newMonitor"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"new_monitor","name__orig":"new_monitor","Name":"NewMonitor","name_":"new_monitor","name-":"new-monitor","NAME":"NEW_MONITOR","index$":2}, {"active":true,"entity":"new_monitor","key$":"BasicNewMonitorFlow","kind":"basic","name":"BasicNewMonitorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"new_monitor_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'NewMonitor', {"POST /newMonitor":{"protocol":"http","requestBody":{"required":true,"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","required":["api_key","friendly_name","url","type"],"properties":{"api_key":{"type":"string","key$":"api_key"},"friendly_name":{"type":"string","key$":"friendly_name"},"url":{"type":"string","key$":"url"},"type":{"type":"integer","description":"1 = HTTP(s), 2 = Keyword, 3 = Ping, 4 = Port","key$":"type"}},"index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const new_monitor_ref01_ent = client.NewMonitor()
    let new_monitor_ref01_data = setup.data.new.new_monitor['new_monitor_ref01']

    new_monitor_ref01_data = (await new_monitor_ref01_ent.create(new_monitor_ref01_data)).data()
    assert(null != new_monitor_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/new_monitor/NewMonitorTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = UptimeRobotSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['new_monitor01','new_monitor02','new_monitor03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'UPTIME_ROBOT_TEST_NEW_MONITOR_ENTID': idmap,
    'UPTIME_ROBOT_TEST_LIVE': 'FALSE',
    'UPTIME_ROBOT_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['UPTIME_ROBOT_TEST_NEW_MONITOR_ENTID']

  const live = 'TRUE' === env.UPTIME_ROBOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['UPTIME_ROBOT_TEST_NEW_MONITOR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new UptimeRobotSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.UPTIME_ROBOT_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
