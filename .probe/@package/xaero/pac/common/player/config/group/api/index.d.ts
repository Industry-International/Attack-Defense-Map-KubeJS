import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";

declare module "@package/xaero/pac/common/player/config/group/api" {
    export class $PlayerConfigGroupActionError extends $Enum<$PlayerConfigGroupActionError> {
        static values(): $PlayerConfigGroupActionError[];
        static valueOf(arg0: string): $PlayerConfigGroupActionError;
        shouldRefreshGroupScreen(): boolean;
        getCommandMessage(): $Component;
        getDesyncScreenMessage(): $Component;
        static GROUP_TO_REMOVE_NOT_FOUND: $PlayerConfigGroupActionError;
        static GROUP_ID_TOO_LONG: $PlayerConfigGroupActionError;
        static UNKNOWN_PLAYER: $PlayerConfigGroupActionError;
        static INVALID_PLAYER_NAME: $PlayerConfigGroupActionError;
        static GROUP_ALREADY_EXISTS: $PlayerConfigGroupActionError;
        static INVALID_GROUP_ID: $PlayerConfigGroupActionError;
        static GROUP_COUNT_LIMIT: $PlayerConfigGroupActionError;
        static OUT_OF_SPACE: $PlayerConfigGroupActionError;
        static NO_EFFECT: $PlayerConfigGroupActionError;
        static MEMBER_ALREADY_INCLUDED: $PlayerConfigGroupActionError;
        static MEMBER_NOT_FOUND: $PlayerConfigGroupActionError;
        static GROUP_INCLUSION_NOT_FOUND: $PlayerConfigGroupActionError;
        static GROUP_ALREADY_INCLUDED: $PlayerConfigGroupActionError;
        static GROUP_TO_EDIT_NOT_FOUND: $PlayerConfigGroupActionError;
        get commandMessage(): $Component;
        get desyncScreenMessage(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PlayerConfigGroupActionError}.
     */
    export type $PlayerConfigGroupActionError_ = "group_already_exists" | "invalid_group_id" | "group_id_too_long" | "group_to_remove_not_found" | "group_to_edit_not_found" | "member_already_included" | "member_not_found" | "group_inclusion_not_found" | "group_already_included" | "no_effect" | "group_count_limit" | "out_of_space" | "unknown_player" | "invalid_player_name";
}
