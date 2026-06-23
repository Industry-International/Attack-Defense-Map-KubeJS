import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getCurrentPage(): number;
        switchToPreviousPage(): boolean;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        setSelectedItemGroup(arg0: $CreativeModeTab_): boolean;
        getSelectedItemGroup(): $CreativeModeTab;
        getPageCount(): number;
        getPage(arg0: $CreativeModeTab_): number;
        hasAdditionalPages(): boolean;
        switchToNextPage(): boolean;
        switchToPage(arg0: number): boolean;
        get currentPage(): number;
        get pageCount(): number;
    }
}
