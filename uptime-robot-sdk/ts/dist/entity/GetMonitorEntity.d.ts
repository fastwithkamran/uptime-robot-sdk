import { UptimeRobotEntityBase } from '../UptimeRobotEntityBase';
import type { UptimeRobotSDK } from '../UptimeRobotSDK';
import type { Control } from '../types';
import type { GetMonitor, GetMonitorCreateData } from '../UptimeRobotTypes';
declare class GetMonitorEntity extends UptimeRobotEntityBase<GetMonitor> {
    constructor(client: UptimeRobotSDK, entopts: any);
    make(this: GetMonitorEntity): GetMonitorEntity;
    create(this: any, reqdata?: GetMonitorCreateData, ctrl?: Control): Promise<GetMonitorEntity>;
}
export { GetMonitorEntity };
