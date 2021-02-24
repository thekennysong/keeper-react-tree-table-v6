import React, { Component } from 'react';
import Column from './Column';
import TreeState from '../model/tree-state';
export declare type TreeTableProps = {
    value: Readonly<TreeState>;
    onChange?: (value: Readonly<TreeState>) => void;
    children?: Array<React.ReactElement<Column>>;
    onScroll?: (scrollTop: number) => void;
    height?: number;
    headerHeight?: number;
    className?: string;
};
export default class TreeTable extends Component<TreeTableProps, {}> {
    static Column: typeof Column;
    private vListRef;
    render(): JSX.Element;
    private handleChange;
    scrollTo(posY: number): void;
}
