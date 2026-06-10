import { $EditBox } from "@package/net/minecraft/client/gui/components";

declare module "@package/xaero/common/validator" {
    export class $WaypointCoordinateFieldValidator extends $NumericFieldValidator {
        constructor();
    }
    export class $NumericFieldValidator {
        validate(arg0: $EditBox): void;
        constructor();
    }
    export class $FieldValidatorHolder {
        getWpCoordFieldValidator(): $WaypointCoordinateFieldValidator;
        getNumericFieldValidator(): $NumericFieldValidator;
        constructor(arg0: $NumericFieldValidator, arg1: $WaypointCoordinateFieldValidator);
        get wpCoordFieldValidator(): $WaypointCoordinateFieldValidator;
        get numericFieldValidator(): $NumericFieldValidator;
    }
}
