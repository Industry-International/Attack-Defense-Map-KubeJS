export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getHost(): string;
        getPort(): number;
        getProtocol(): string;
        setPassword(arg0: string): void;
        getUserName(): string;
        getPassword(): string;
        setProtocol(arg0: string): void;
        setHost(arg0: string): void;
        setPort(arg0: number): void;
        setNonProxyHosts(arg0: string): void;
        getNtlmHost(): string;
        setNtlmHost(arg0: string): void;
        setUserName(arg0: string): void;
        getNtlmDomain(): string;
        getNonProxyHosts(): string;
        setNtlmDomain(arg0: string): void;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
