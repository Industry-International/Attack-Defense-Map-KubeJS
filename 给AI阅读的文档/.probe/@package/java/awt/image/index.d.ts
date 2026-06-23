import { $BigInteger } from "@package/java/math";
import { $Rectangle2D, $Point2D } from "@package/java/awt/geom";
import { $ColorSpace } from "@package/java/awt/color";
import { $RenderingHints, $Point, $ImageCapabilities, $GraphicsConfiguration, $Graphics2D, $BufferCapabilities, $Image, $Transparency, $Graphics, $Rectangle } from "@package/java/awt";
import { $Object } from "@package/java/lang";
import { $Vector, $Hashtable } from "@package/java/util";
export * as renderable from "@package/java/awt/image/renderable";

declare module "@package/java/awt/image" {
    export class $Raster {
        getBounds(): $Rectangle;
        getParent(): $Raster;
        getMinX(): number;
        createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $Raster;
        getWidth(): number;
        getMinY(): number;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        static createBandedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: $Point): $WritableRaster;
        static createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        getNumDataElements(): number;
        getSampleFloat(arg0: number, arg1: number, arg2: number): number;
        getSampleDouble(arg0: number, arg1: number, arg2: number): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[];
        static createRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $Raster;
        createTranslatedChild(arg0: number, arg1: number): $Raster;
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        getPixel(arg0: number, arg1: number, arg2: number[]): number[];
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Point): $WritableRaster;
        static createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $Point): $WritableRaster;
        static createPackedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        getNumBands(): number;
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): $Object;
        getDataElements(arg0: number, arg1: number, arg2: $Object): $Object;
        getDataBuffer(): $DataBuffer;
        getSampleModelTranslateX(): number;
        getSampleModelTranslateY(): number;
        static createWritableRaster(arg0: $SampleModel, arg1: $DataBuffer, arg2: $Point): $WritableRaster;
        static createWritableRaster(arg0: $SampleModel, arg1: $Point): $WritableRaster;
        getTransferType(): number;
        getSampleModel(): $SampleModel;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[];
        getHeight(): number;
        createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): $WritableRaster;
        createCompatibleWritableRaster(arg0: $Rectangle): $WritableRaster;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        createCompatibleWritableRaster(): $WritableRaster;
        static createInterleavedRaster(arg0: $DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Point): $WritableRaster;
        static createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $Point): $WritableRaster;
        getSample(arg0: number, arg1: number, arg2: number): number;
        get bounds(): $Rectangle;
        get parent(): $Raster;
        get minX(): number;
        get width(): number;
        get minY(): number;
        get numDataElements(): number;
        get numBands(): number;
        get dataBuffer(): $DataBuffer;
        get sampleModelTranslateX(): number;
        get sampleModelTranslateY(): number;
        get transferType(): number;
        get sampleModel(): $SampleModel;
        get height(): number;
    }
    export class $WritableRenderedImage {
    }
    export interface $WritableRenderedImage extends $RenderedImage {
        setData(arg0: $Raster): void;
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        releaseWritableTile(arg0: number, arg1: number): void;
        set data(value: $Raster);
        get writableTileIndices(): $Point[];
    }
    export class $BufferedImage extends $Image implements $WritableRenderedImage, $Transparency {
        getProperty(arg0: string): $Object;
        getType(): number;
        getData(): $Raster;
        getData(arg0: $Rectangle): $Raster;
        getMinX(): number;
        getPropertyNames(): string[];
        getWidth(): number;
        setData(arg0: $Raster): void;
        getMinY(): number;
        copyData(arg0: $WritableRaster): $WritableRaster;
        createGraphics(): $Graphics2D;
        isAlphaPremultiplied(): boolean;
        coerceData(arg0: boolean): void;
        getAlphaRaster(): $WritableRaster;
        getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): $BufferedImage;
        addTileObserver(arg0: $TileObserver_): void;
        removeTileObserver(arg0: $TileObserver_): void;
        isTileWritable(arg0: number, arg1: number): boolean;
        getWritableTileIndices(): $Point[];
        hasTileWriters(): boolean;
        getWritableTile(arg0: number, arg1: number): $WritableRaster;
        releaseWritableTile(arg0: number, arg1: number): void;
        getSources(): $Vector<$RenderedImage>;
        getColorModel(): $ColorModel;
        getSampleModel(): $SampleModel;
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        getTile(arg0: number, arg1: number): $Raster;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void;
        setRGB(arg0: number, arg1: number, arg2: number): void;
        getHeight(): number;
        getTransparency(): number;
        getRaster(): $WritableRaster;
        getRGB(arg0: number, arg1: number): number;
        getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[];
        static TYPE_3BYTE_BGR: number;
        static TYPE_USHORT_565_RGB: number;
        static TYPE_INT_ARGB_PRE: number;
        static TYPE_USHORT_555_RGB: number;
        static TYPE_USHORT_GRAY: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static TYPE_BYTE_INDEXED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static TYPE_4BYTE_ABGR: number;
        static TYPE_INT_ARGB: number;
        static SCALE_DEFAULT: number;
        static TYPE_CUSTOM: number;
        static TYPE_INT_RGB: number;
        static TYPE_INT_BGR: number;
        static UndefinedProperty: $Object;
        static TYPE_BYTE_GRAY: number;
        static TYPE_4BYTE_ABGR_PRE: number;
        static TYPE_BYTE_BINARY: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $IndexColorModel);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ColorModel, arg1: $WritableRaster, arg2: boolean, arg3: $Hashtable<never, never>);
        get type(): number;
        get minX(): number;
        get propertyNames(): string[];
        get width(): number;
        get minY(): number;
        get alphaPremultiplied(): boolean;
        get alphaRaster(): $WritableRaster;
        get writableTileIndices(): $Point[];
        get sources(): $Vector<$RenderedImage>;
        get colorModel(): $ColorModel;
        get sampleModel(): $SampleModel;
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get height(): number;
        get transparency(): number;
        get raster(): $WritableRaster;
    }
    export class $VolatileImage extends $Image implements $Transparency {
        validate(arg0: $GraphicsConfiguration): number;
        getSnapshot(): $BufferedImage;
        contentsLost(): boolean;
        getWidth(): number;
        getCapabilities(): $ImageCapabilities;
        createGraphics(): $Graphics2D;
        getHeight(): number;
        getTransparency(): number;
        static SCALE_DEFAULT: number;
        static UndefinedProperty: $Object;
        static IMAGE_OK: number;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static IMAGE_RESTORED: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        static IMAGE_INCOMPATIBLE: number;
        get snapshot(): $BufferedImage;
        get width(): number;
        get capabilities(): $ImageCapabilities;
        get height(): number;
        get transparency(): number;
    }
    export class $BufferStrategy {
        dispose(): void;
        contentsLost(): boolean;
        getCapabilities(): $BufferCapabilities;
        show(): void;
        getDrawGraphics(): $Graphics;
        contentsRestored(): boolean;
        get capabilities(): $BufferCapabilities;
        get drawGraphics(): $Graphics;
    }
    export class $ImageObserver {
        static ABORT: number;
        static PROPERTIES: number;
        static SOMEBITS: number;
        static ALLBITS: number;
        static WIDTH: number;
        static ERROR: number;
        static HEIGHT: number;
        static FRAMEBITS: number;
    }
    export interface $ImageObserver {
        imageUpdate(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ImageObserver}.
     */
    export type $ImageObserver_ = ((arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => boolean);
    export class $ImageConsumer {
        static STATICIMAGEDONE: number;
        static SINGLEPASS: number;
        static RANDOMPIXELORDER: number;
        static TOPDOWNLEFTRIGHT: number;
        static IMAGEERROR: number;
        static SINGLEFRAMEDONE: number;
        static SINGLEFRAME: number;
        static COMPLETESCANLINES: number;
        static IMAGEABORTED: number;
    }
    export interface $ImageConsumer {
        setProperties(arg0: $Hashtable<never, never>): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $ColorModel, arg5: number[], arg6: number, arg7: number): void;
        setDimensions(arg0: number, arg1: number): void;
        setHints(arg0: number): void;
        imageComplete(arg0: number): void;
        setColorModel(arg0: $ColorModel): void;
        set properties(value: $Hashtable<never, never>);
        set hints(value: number);
        set colorModel(value: $ColorModel);
    }
    export class $ColorModel implements $Transparency {
        getColorSpace(): $ColorSpace;
        getComponents(arg0: number, arg1: number[], arg2: number): number[];
        getComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        hasAlpha(): boolean;
        getRed(arg0: $Object): number;
        getRed(arg0: number): number;
        getGreen(arg0: $Object): number;
        getGreen(arg0: number): number;
        getBlue(arg0: $Object): number;
        getBlue(arg0: number): number;
        isAlphaPremultiplied(): boolean;
        isCompatibleRaster(arg0: $Raster): boolean;
        coerceData(arg0: $WritableRaster, arg1: boolean): $ColorModel;
        getComponentSize(arg0: number): number;
        getComponentSize(): number[];
        getPixelSize(): number;
        getAlphaRaster(arg0: $WritableRaster): $WritableRaster;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getDataElements(arg0: number[], arg1: number, arg2: $Object): $Object;
        getDataElements(arg0: number, arg1: $Object): $Object;
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getDataElement(arg0: number[], arg1: number): number;
        getDataElement(arg0: number[], arg1: number): number;
        getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[];
        getNormalizedComponents(arg0: $Object, arg1: number[], arg2: number): number[];
        getTransferType(): number;
        getNumColorComponents(): number;
        isCompatibleSampleModel(arg0: $SampleModel): boolean;
        getAlpha(arg0: $Object): number;
        getAlpha(arg0: number): number;
        createCompatibleWritableRaster(arg0: number, arg1: number): $WritableRaster;
        static getRGBdefault(): $ColorModel;
        getNumComponents(): number;
        getTransparency(): number;
        getRGB(arg0: $Object): number;
        getRGB(arg0: number): number;
        constructor(arg0: number);
        get colorSpace(): $ColorSpace;
        get alphaPremultiplied(): boolean;
        get pixelSize(): number;
        get transferType(): number;
        get numColorComponents(): number;
        static get RGBdefault(): $ColorModel;
        get numComponents(): number;
        get transparency(): number;
    }
    export class $IndexColorModel extends $ColorModel {
        isValid(): boolean;
        isValid(arg0: number): boolean;
        getMapSize(): number;
        getTransparentPixel(): number;
        getReds(arg0: number[]): void;
        getGreens(arg0: number[]): void;
        getBlues(arg0: number[]): void;
        getAlphas(arg0: number[]): void;
        getRGBs(arg0: number[]): void;
        convertToIntDiscrete(arg0: $Raster, arg1: boolean): $BufferedImage;
        getValidPixels(): $BigInteger;
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number[]);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: number, arg5: $BigInteger);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[], arg5: number);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number[], arg4: number[]);
        constructor(arg0: number, arg1: number, arg2: number[], arg3: number, arg4: boolean, arg5: number, arg6: number);
        get mapSize(): number;
        get transparentPixel(): number;
        get validPixels(): $BigInteger;
    }
    export class $DataBuffer {
        getSize(): number;
        getOffset(): number;
        getOffsets(): number[];
        getNumBanks(): number;
        getElemFloat(arg0: number, arg1: number): number;
        getElemFloat(arg0: number): number;
        setElemFloat(arg0: number, arg1: number, arg2: number): void;
        setElemFloat(arg0: number, arg1: number): void;
        getElemDouble(arg0: number): number;
        getElemDouble(arg0: number, arg1: number): number;
        setElemDouble(arg0: number, arg1: number, arg2: number): void;
        setElemDouble(arg0: number, arg1: number): void;
        setElem(arg0: number, arg1: number): void;
        setElem(arg0: number, arg1: number, arg2: number): void;
        getElem(arg0: number, arg1: number): number;
        getElem(arg0: number): number;
        getDataType(): number;
        static getDataTypeSize(arg0: number): number;
        static TYPE_INT: number;
        static TYPE_DOUBLE: number;
        static TYPE_SHORT: number;
        static TYPE_UNDEFINED: number;
        static TYPE_BYTE: number;
        static TYPE_USHORT: number;
        static TYPE_FLOAT: number;
        get size(): number;
        get offset(): number;
        get offsets(): number[];
        get numBanks(): number;
        get dataType(): number;
    }
    export class $ImageProducer {
    }
    export interface $ImageProducer {
        addConsumer(arg0: $ImageConsumer): void;
        isConsumer(arg0: $ImageConsumer): boolean;
        removeConsumer(arg0: $ImageConsumer): void;
        startProduction(arg0: $ImageConsumer): void;
        requestTopDownLeftRightResend(arg0: $ImageConsumer): void;
    }
    export class $RenderedImage {
    }
    export interface $RenderedImage {
        getProperty(arg0: string): $Object;
        getData(arg0: $Rectangle): $Raster;
        getData(): $Raster;
        getMinX(): number;
        getPropertyNames(): string[];
        getWidth(): number;
        getMinY(): number;
        copyData(arg0: $WritableRaster): $WritableRaster;
        getSources(): $Vector<$RenderedImage>;
        getColorModel(): $ColorModel;
        getSampleModel(): $SampleModel;
        getNumXTiles(): number;
        getNumYTiles(): number;
        getMinTileX(): number;
        getMinTileY(): number;
        getTileWidth(): number;
        getTileHeight(): number;
        getTileGridXOffset(): number;
        getTileGridYOffset(): number;
        getTile(arg0: number, arg1: number): $Raster;
        getHeight(): number;
        get minX(): number;
        get propertyNames(): string[];
        get width(): number;
        get minY(): number;
        get sources(): $Vector<$RenderedImage>;
        get colorModel(): $ColorModel;
        get sampleModel(): $SampleModel;
        get numXTiles(): number;
        get numYTiles(): number;
        get minTileX(): number;
        get minTileY(): number;
        get tileWidth(): number;
        get tileHeight(): number;
        get tileGridXOffset(): number;
        get tileGridYOffset(): number;
        get height(): number;
    }
    export class $TileObserver {
    }
    export interface $TileObserver {
        tileUpdate(arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $TileObserver}.
     */
    export type $TileObserver_ = ((arg0: $WritableRenderedImage, arg1: number, arg2: number, arg3: boolean) => void);
    export class $BufferedImageOp {
    }
    export interface $BufferedImageOp {
        filter(arg0: $BufferedImage, arg1: $BufferedImage): $BufferedImage;
        getRenderingHints(): $RenderingHints;
        getBounds2D(arg0: $BufferedImage): $Rectangle2D;
        createCompatibleDestImage(arg0: $BufferedImage, arg1: $ColorModel): $BufferedImage;
        getPoint2D(arg0: $Point2D, arg1: $Point2D): $Point2D;
        get renderingHints(): $RenderingHints;
    }
    export class $SampleModel {
        getWidth(): number;
        getSampleSize(arg0: number): number;
        getSampleSize(): number[];
        createDataBuffer(): $DataBuffer;
        getNumDataElements(): number;
        createSubsetSampleModel(arg0: number[]): $SampleModel;
        getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): number[];
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: $DataBuffer): void;
        getDataType(): number;
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        getPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): number[];
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        setPixel(arg0: number, arg1: number, arg2: number[], arg3: $DataBuffer): void;
        getNumBands(): number;
        getDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): $Object;
        getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): $Object;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object, arg5: $DataBuffer): void;
        setDataElements(arg0: number, arg1: number, arg2: $Object, arg3: $DataBuffer): void;
        createCompatibleSampleModel(arg0: number, arg1: number): $SampleModel;
        getTransferType(): number;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): void;
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: $DataBuffer): number[];
        getHeight(): number;
        getSample(arg0: number, arg1: number, arg2: number, arg3: $DataBuffer): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get width(): number;
        get numDataElements(): number;
        get dataType(): number;
        get numBands(): number;
        get transferType(): number;
        get height(): number;
    }
    export class $WritableRaster extends $Raster {
        setRect(arg0: $Raster): void;
        setRect(arg0: number, arg1: number, arg2: $Raster): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSample(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
        getWritableParent(): $WritableRaster;
        createWritableTranslatedChild(arg0: number, arg1: number): $WritableRaster;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setPixel(arg0: number, arg1: number, arg2: number[]): void;
        setDataElements(arg0: number, arg1: number, arg2: $Object): void;
        setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Object): void;
        setDataElements(arg0: number, arg1: number, arg2: $Raster): void;
        createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): $WritableRaster;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void;
        get writableParent(): $WritableRaster;
    }
}
