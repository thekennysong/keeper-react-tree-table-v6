import TreeState from '../model/tree-state';
import Row, { RowModel } from '../model/row';
export declare const createRow: (model: Readonly<RowModel>, source: Readonly<TreeState>, onChangeCb: (value: Readonly<TreeState>) => void) => Readonly<Row>;
