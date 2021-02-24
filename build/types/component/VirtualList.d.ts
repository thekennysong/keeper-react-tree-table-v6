import { Component } from 'react';
import { ColumnProps } from './Column';
import TreeState from '../model/tree-state';
export declare type VirtualListProps = {
    data: Readonly<TreeState>;
    columns: Array<ColumnProps>;
    height: number;
    onChange: (value: Readonly<TreeState>) => void;
    onScroll: (scrollTop: number) => void;
};
export declare type VirtualListState = {
    topOffset: number;
    overscanHeight: number;
};
export default class VirtualList extends Component<VirtualListProps, VirtualListState> {
    state: {
        topOffset: number;
        overscanHeight: number;
    };
    private containerRef;
    render(): JSX.Element;
    private handleScroll;
    scrollTo: (posY: number) => void;
}
