import React, { Component } from 'react';

declare type RowData = any;
declare type RowMetadata = {
    depth: number;
    index: number;
    height: number;
    hasChildren: boolean;
};
declare type RowState = {
    isVisible: boolean;
    isExpanded: boolean;
    top: number;
};
declare class RowModel {
    static DEFAULT_HEIGHT: number;
    readonly data: RowData;
    readonly metadata: RowMetadata;
    readonly $state: RowState;
    constructor(data: RowData, metadata: RowMetadata, state: RowState);
}
interface RowAPI {
    toggleChildren: () => void;
    updateData: (newData: RowData) => void;
}
declare class Row extends RowModel implements RowAPI {
    toggleChildren: () => void;
    updateData: (newData: RowData) => void;
    constructor(model: RowModel, api: RowAPI);
}

declare type ColumnProps = {
    renderCell: (row: Row) => React.ReactNode;
    renderHeaderCell: () => React.ReactNode;
    grow?: number;
    basis?: string;
};
declare class Column extends Component<ColumnProps, {}> {
    static displayName: string;
    render(): null;
}

interface TreeNode {
    data: any;
    children?: Array<TreeNode>;
    height?: number;
}
declare class TreeState {
    readonly data: ReadonlyArray<RowModel>;
    readonly height: number;
    readonly hasData: boolean;
    protected constructor(data: ReadonlyArray<RowModel>);
    static create(data: Array<TreeNode>): Readonly<TreeState>;
    static createEmpty(): Readonly<TreeState>;
    static sliceRows(source: Readonly<TreeState>, from: number, to: number): ReadonlyArray<RowModel>;
    private static _hideRowsInRange;
    private static _showRowsInRange;
    static expandAll(source: Readonly<TreeState>, depthLimit?: number): Readonly<TreeState>;
    private static _showRowsInStarLevel;
    static expandStarsOnly(source: Readonly<TreeState>, starsMapper: any): Readonly<TreeState>;
    private static _showRowsInRangeAccountLevel;
    static expandToAccountLevel(source: Readonly<TreeState>, depthLimit?: number): Readonly<TreeState>;
    static collapseAll(source: Readonly<TreeState>): Readonly<TreeState>;
    private static _showRowsInRangeOG;
    static expandAncestors(source: Readonly<TreeState>, model: RowModel): Readonly<TreeState>;
    static toggleChildren(source: Readonly<TreeState>, model: RowModel): Readonly<TreeState>;
    static updateData(source: Readonly<TreeState>, model: RowModel, newData: RowData): Readonly<TreeState>;
    findRowModel(node: TreeNode): RowModel | undefined;
    indexAtYPos(yPos: number): number;
    yPosAtIndex(index: number): number;
}

declare type TreeTableProps = {
    value: Readonly<TreeState>;
    onChange?: (value: Readonly<TreeState>) => void;
    children?: Array<React.ReactElement<Column>>;
    onScroll?: (scrollTop: number) => void;
    height?: number;
    headerHeight?: number;
    className?: string;
};
declare class TreeTable extends Component<TreeTableProps, {}> {
    static Column: typeof Column;
    private vListRef;
    render(): JSX.Element;
    private handleChange;
    scrollTo(posY: number): void;
}

export { Row, RowModel, TreeState, TreeTable };
