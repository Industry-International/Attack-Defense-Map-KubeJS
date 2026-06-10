import { $Reader, $InputStream, $Writer, $OutputStream, $File_ } from "@package/java/io";
import { $Path_ } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $FileNotFoundAction_ } from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/file";
import { $Config, $UnmodifiableConfig, $ConfigFormat } from "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core";
import { $Charset } from "@package/java/nio/charset";
import { $List_, $Map_ } from "@package/java/util";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/dev/lambdaurora/lambdynlights/shadow/nightconfig/core/io" {
    export class $WritingMode extends $Enum<$WritingMode> {
        static values(): $WritingMode[];
        static valueOf(name: string): $WritingMode;
        static REPLACE_ATOMIC: $WritingMode;
        static REPLACE: $WritingMode;
        static APPEND: $WritingMode;
    }
    /**
     * Values that may be interpreted as {@link $WritingMode}.
     */
    export type $WritingMode_ = "replace" | "replace_atomic" | "append";
    export class $ParsingMode extends $Enum<$ParsingMode> {
        put(map: $Map_<string, $Object>, key: string, value: $Object): $Object;
        put(config: $Config, key: string, value: $Object): $Object;
        put(config: $Config, key: $List_<string>, value: $Object): $Object;
        static values(): $ParsingMode[];
        static valueOf(name: string): $ParsingMode;
        prepareParsing(config: $Config): void;
        static ADD: $ParsingMode;
        static MERGE: $ParsingMode;
        static REPLACE: $ParsingMode;
    }
    /**
     * Values that may be interpreted as {@link $ParsingMode}.
     */
    export type $ParsingMode_ = "replace" | "merge" | "add";
    export class $ConfigParser<C extends $Config> {
    }
    export interface $ConfigParser<C extends $Config> {
        parse(file: $Path_, notFoundAction: $FileNotFoundAction_): C;
        parse(file: $File_, destination: $Config, parsingMode: $ParsingMode_, notFoundAction: $FileNotFoundAction_, charset: $Charset): void;
        parse(file: $File_, destination: $Config, parsingMode: $ParsingMode_, notFoundAction: $FileNotFoundAction_): void;
        parse(file: $File_, notFoundAction: $FileNotFoundAction_, charset: $Charset): C;
        parse(url: $URL, destination: $Config, parsingMode: $ParsingMode_): void;
        parse(url: $URL): C;
        parse(file: $Path_, destination: $Config, parsingMode: $ParsingMode_, notFoundAction: $FileNotFoundAction_, charset: $Charset): void;
        parse(file: $Path_, destination: $Config, parsingMode: $ParsingMode_, notFoundAction: $FileNotFoundAction_): void;
        parse(file: $Path_, notFoundAction: $FileNotFoundAction_, charset: $Charset): C;
        parse(input: string, destination: $Config, parsingMode: $ParsingMode_): void;
        parse(input: string): C;
        parse(arg0: $Reader, arg1: $Config, arg2: $ParsingMode_): void;
        parse(arg0: $Reader): C;
        parse(file: $File_, notFoundAction: $FileNotFoundAction_): C;
        parse(input: $InputStream, destination: $Config, parsingMode: $ParsingMode_, charset: $Charset): void;
        parse(input: $InputStream, destination: $Config, parsingMode: $ParsingMode_): void;
        parse(input: $InputStream, charset: $Charset): C;
        parse(input: $InputStream): C;
        getFormat(): $ConfigFormat<C>;
        get format(): $ConfigFormat<C>;
    }
    export class $ConfigWriter {
    }
    export interface $ConfigWriter {
        write(config: $UnmodifiableConfig, file: $Path_, writingMode: $WritingMode_, charset: $Charset): void;
        write(config: $UnmodifiableConfig, file: $File_, writingMode: $WritingMode_): void;
        write(config: $UnmodifiableConfig, file: $File_, writingMode: $WritingMode_, charset: $Charset): void;
        write(config: $UnmodifiableConfig, url: $URL): void;
        write(arg0: $UnmodifiableConfig, arg1: $Writer): void;
        write(config: $UnmodifiableConfig, output: $OutputStream, charset: $Charset): void;
        write(config: $UnmodifiableConfig, output: $OutputStream): void;
        write(config: $UnmodifiableConfig, file: $Path_, writingMode: $WritingMode_): void;
        writeToString(config: $UnmodifiableConfig): string;
    }
    /**
     * Values that may be interpreted as {@link $ConfigWriter}.
     */
    export type $ConfigWriter_ = ((arg0: $UnmodifiableConfig, arg1: $Writer) => void);
}
