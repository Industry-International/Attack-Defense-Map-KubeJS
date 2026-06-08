import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $ParseResults } from "@package/com/mojang/brigadier";

declare module "@package/com/aizistral/nochatreports/common/mixins/client" {
    export class $AccessorClientPacketListener {
    }
    export interface $AccessorClientPacketListener {
        invokeParseCommand(arg0: string): $ParseResults<$SharedSuggestionProvider>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorClientPacketListener}.
     */
    export type $AccessorClientPacketListener_ = ((arg0: string) => $ParseResults<$SharedSuggestionProvider>);
}
