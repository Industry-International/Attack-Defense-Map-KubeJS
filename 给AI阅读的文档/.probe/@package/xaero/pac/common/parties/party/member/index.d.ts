import { $ChatFormatting } from "@package/net/minecraft";
import { $Enum } from "@package/java/lang";
export * as api from "@package/xaero/pac/common/parties/party/member/api";

declare module "@package/xaero/pac/common/parties/party/member" {
    export class $PartyMemberRank extends $Enum<$PartyMemberRank> {
        static values(): $PartyMemberRank[];
        static valueOf(arg0: string): $PartyMemberRank;
        getColor(): $ChatFormatting;
        static CLAIMER: $PartyMemberRank;
        static ADMIN: $PartyMemberRank;
        static MEMBER: $PartyMemberRank;
        static MODERATOR: $PartyMemberRank;
        get color(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $PartyMemberRank}.
     */
    export type $PartyMemberRank_ = "member" | "claimer" | "moderator" | "admin";
}
