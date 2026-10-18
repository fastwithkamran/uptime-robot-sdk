import { UptimeRobotEntityBase } from '../UptimeRobotEntityBase';
import type { UptimeRobotSDK } from '../UptimeRobotSDK';
import type { Control } from '../types';
import type { NewMonitor, NewMonitorCreateData } from '../UptimeRobotTypes';
declare class NewMonitorEntity extends UptimeRobotEntityBase<NewMonitor> {
    constructor(client: UptimeRobotSDK, entopts: any);
    make(this: NewMonitorEntity): NewMonitorEntity;
    create(this: any, reqdata?: NewMonitorCreateData, ctrl?: Control): Promise<NewMonitorEntity>;
}
export { NewMonitorEntity };
