import { $Function_ } from "@package/java/util/function";
import { $LoadedConfig } from "@package/net/blay09/mods/balm/api/config";
import { $ConfigPropertyBuilder, $ConfigCategory, $ConfigCategoryBuilder } from "@package/net/blay09/mods/balm/api/config/schema/builder";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Collection } from "@package/java/util";
import { $ConfiguredProperty, $BalmConfigSchema, $ConfigSchemaBuilder } from "@package/net/blay09/mods/balm/api/config/schema";

declare module "@package/net/blay09/mods/balm/api/config/schema/impl" {
    export class $ConfigSchemaImpl implements $BalmConfigSchema, $ConfigSchemaBuilder {
        identifier(): $ResourceLocation;
        defaults(): $LoadedConfig;
        property(arg0: string): $ConfigPropertyBuilder;
        category(arg0: string): $ConfigCategoryBuilder;
        categories(): $Collection<$ConfigCategory>;
        findRootProperty(arg0: string): $ConfiguredProperty<never>;
        findProperty(arg0: string, arg1: string): $ConfiguredProperty<never>;
        addAndReturn<T extends $ConfiguredProperty<never>>(arg0: T): T;
        rootProperties(): $Collection<$ConfiguredProperty<never>>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $ConfigCategoryImpl implements $ConfigCategoryBuilder, $ConfigCategory {
        name(): string;
        properties(): $List<$ConfiguredProperty<never>>;
        comment(): string;
        comment(arg0: string): $ConfigCategoryImpl;
        property(arg0: string): $ConfigPropertyBuilder;
        addProperty<T extends $ConfiguredProperty<never>>(arg0: T): void;
        parentSchema(): $BalmConfigSchema;
        via<T>(arg0: $Function_<$ConfigCategoryBuilder, T>): T;
        constructor(arg0: $ConfigSchemaImpl, arg1: string);
    }
}
