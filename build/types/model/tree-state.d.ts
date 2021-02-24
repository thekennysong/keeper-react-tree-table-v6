import { RowModel, RowData } from './row';
export interface TreeNode {
    data: any;
    children?: Array<TreeNode>;
    height?: number;
}
export default class TreeState {
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
