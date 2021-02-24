export declare type RowData = any;
export declare type RowMetadata = {
    depth: number;
    index: number;
    height: number;
    hasChildren: boolean;
};
export declare type RowState = {
    isVisible: boolean;
    isExpanded: boolean;
    top: number;
};
export declare class RowModel {
    static DEFAULT_HEIGHT: number;
    readonly data: RowData;
    readonly metadata: RowMetadata;
    readonly $state: RowState;
    constructor(data: RowData, metadata: RowMetadata, state: RowState);
}
export interface RowAPI {
    toggleChildren: () => void;
    updateData: (newData: RowData) => void;
}
export default class Row extends RowModel implements RowAPI {
    toggleChildren: () => void;
    updateData: (newData: RowData) => void;
    constructor(model: RowModel, api: RowAPI);
}
