import { Component } from 'react';
import { ColumnProps } from './Column';
export declare type TreeTableHeaderProps = {
    columns: Array<ColumnProps>;
    height?: number;
};
export default class TreeTableHeader extends Component<TreeTableHeaderProps, {}> {
    static defaultProps: {
        height: number;
    };
    render(): JSX.Element;
}
