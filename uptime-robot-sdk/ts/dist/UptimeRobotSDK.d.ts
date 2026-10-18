import { DeleteMonitorEntity } from './entity/DeleteMonitorEntity';
import { GetMonitorEntity } from './entity/GetMonitorEntity';
import { NewMonitorEntity } from './entity/NewMonitorEntity';
export type * from './UptimeRobotTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { UptimeRobotEntityBase } from './UptimeRobotEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class UptimeRobotSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    DeleteMonitor(entopts?: Record<string, any>): DeleteMonitorEntity;
    GetMonitor(entopts?: Record<string, any>): GetMonitorEntity;
    NewMonitor(entopts?: Record<string, any>): NewMonitorEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): UptimeRobotSDK;
    tester(testopts?: any, sdkopts?: any): UptimeRobotSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof UptimeRobotSDK;
export { stdutil, config, BaseFeature, UptimeRobotEntityBase, UptimeRobotSDK, SDK, };
export type { DirectResult };
