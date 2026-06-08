import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getCurrentPage(): number;
        getPageCount(): number;
        getPage(arg0: $CreativeModeTab_): number;
        hasAdditionalPages(): boolean;
        switchToPage(arg0: number): boolean;
        switchToNextPage(): boolean;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        getSelectedItemGroup(): $CreativeModeTab;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        switchToPreviousPage(): boolean;
        get currentPage(): number;
        get pageCount(): number;
    }
}
