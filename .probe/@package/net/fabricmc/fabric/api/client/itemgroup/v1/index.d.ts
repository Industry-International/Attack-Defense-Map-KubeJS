import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getPageCount(): number;
        getPage(arg0: $CreativeModeTab_): number;
        getCurrentPage(): number;
        switchToPage(arg0: number): boolean;
        hasAdditionalPages(): boolean;
        switchToNextPage(): boolean;
        getSelectedItemGroup(): $CreativeModeTab;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        switchToPreviousPage(): boolean;
        get pageCount(): number;
        get currentPage(): number;
    }
}
