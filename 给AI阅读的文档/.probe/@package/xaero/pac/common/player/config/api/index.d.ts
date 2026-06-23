
declare module "@package/xaero/pac/common/player/config/api" {
    export class $IPlayerConfigPermissionAPI {
    }
    export interface $IPlayerConfigPermissionAPI {
        canClaimAs(): boolean;
        canView(): boolean;
        canEdit(): boolean;
        canIncludePlayersInGroups(): boolean;
        canIncludeGroupsInGroups(): boolean;
        canCreateGroups(): boolean;
    }
}
