import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getCurrentPage(): number;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        getSelectedItemGroup(): $CreativeModeTab;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        switchToPreviousPage(): boolean;
        getPageCount(): number;
        getPage(arg0: $CreativeModeTab_): number;
        switchToNextPage(): boolean;
        hasAdditionalPages(): boolean;
        switchToPage(arg0: number): boolean;
        get currentPage(): number;
        get pageCount(): number;
    }
}
