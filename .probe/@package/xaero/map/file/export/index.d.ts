import { $Registry } from "@package/net/minecraft/core";
import { $OldFormatSupport } from "@package/xaero/map/file";
import { $Path_, $Path } from "@package/java/nio/file";
import { $MapProcessor } from "@package/xaero/map";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $MapTileSelection } from "@package/xaero/map/gui";
import { $DimensionType_ } from "@package/net/minecraft/world/level/dimension";

declare module "@package/xaero/map/file/export" {
    export class $PNGExporter {
        "export"(arg0: $MapProcessor, arg1: $Registry<$Biome_>, arg2: $Registry<$DimensionType_>, arg3: $MapTileSelection, arg4: $OldFormatSupport): $PNGExportResult;
        constructor(arg0: $Path_);
    }
    export class $PNGExportResult {
        getMessage(): $Component;
        getType(): $PNGExportResultType;
        getFolderToOpen(): $Path;
        constructor(arg0: $PNGExportResultType, arg1: $Path_);
        get message(): $Component;
        get type(): $PNGExportResultType;
        get folderToOpen(): $Path;
    }
}
