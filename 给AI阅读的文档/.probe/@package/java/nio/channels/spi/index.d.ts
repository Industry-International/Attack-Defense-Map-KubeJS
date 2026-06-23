import { $ProtocolFamily_ } from "@package/java/net";
import { $Selector, $Pipe, $DatagramChannel, $ServerSocketChannel, $Channel, $SocketChannel, $SelectableChannel, $InterruptibleChannel } from "@package/java/nio/channels";

declare module "@package/java/nio/channels/spi" {
    export class $AbstractSelector extends $Selector {
    }
    export class $AbstractSelectableChannel extends $SelectableChannel {
    }
    export class $AbstractInterruptibleChannel implements $Channel, $InterruptibleChannel {
        isOpen(): boolean;
        close(): void;
        get open(): boolean;
    }
    export class $SelectorProvider {
        openSocketChannel(arg0: $ProtocolFamily_): $SocketChannel;
        openSocketChannel(): $SocketChannel;
        static provider(): $SelectorProvider;
        inheritedChannel(): $Channel;
        openPipe(): $Pipe;
        openServerSocketChannel(arg0: $ProtocolFamily_): $ServerSocketChannel;
        openServerSocketChannel(): $ServerSocketChannel;
        openSelector(): $AbstractSelector;
        openDatagramChannel(): $DatagramChannel;
        openDatagramChannel(arg0: $ProtocolFamily_): $DatagramChannel;
    }
}
