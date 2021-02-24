import { Component } from 'react';
import { ColumnProps } from './Column';
import TreeState from '../model/tree-state';
import { RowModel } from '../model/row';
export declare type VirtualListRowProps = {
    data: Readonly<TreeState>;
    model: RowModel;
    columns: Array<ColumnProps>;
    onChange: (value: Readonly<TreeState>) => void;
    index: number;
    relIndex: number;
};
export default class VirtualListRow extends Component<VirtualListRowProps, {}> {
    render(): JSX.Element;
    private handleChange;
}
