export * as legacy from "@package/org/apache/maven/repository/legacy";

declare module "@package/org/apache/maven/repository" {
    export class $Proxy {
        getHost(): string;
        getPort(): number;
        getProtocol(): string;
        getUserName(): string;
        getPassword(): string;
        setHost(arg0: string): void;
        setPort(arg0: number): void;
        setPassword(arg0: string): void;
        setProtocol(arg0: string): void;
        setUserName(arg0: string): void;
        getNtlmHost(): string;
        setNtlmHost(arg0: string): void;
        setNtlmDomain(arg0: string): void;
        setNonProxyHosts(arg0: string): void;
        getNonProxyHosts(): string;
        getNtlmDomain(): string;
        static PROXY_HTTP: string;
        static PROXY_SOCKS4: string;
        static PROXY_SOCKS5: string;
        constructor();
    }
}
