import { UptimeRobotEntityBase } from '../UptimeRobotEntityBase';
import type { UptimeRobotSDK } from '../UptimeRobotSDK';
import type { Control } from '../types';
import type { DeleteMonitor, DeleteMonitorCreateData } from '../UptimeRobotTypes';
declare class DeleteMonitorEntity extends UptimeRobotEntityBase<DeleteMonitor> {
    constructor(client: UptimeRobotSDK, entopts: any);
    make(this: DeleteMonitorEntity): DeleteMonitorEntity;
    create(this: any, reqdata?: DeleteMonitorCreateData, ctrl?: Control): Promise<DeleteMonitorEntity>;
}
export { DeleteMonitorEntity };
