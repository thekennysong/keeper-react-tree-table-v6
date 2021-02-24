import React, { Component } from 'react';
import Row from '../model/row';
export declare type CellWrapperProps = {
    row: Row;
    indexKey: number;
    renderCell: (row: Row) => React.ReactNode;
    background?: string;
    grow?: number;
    columnTotal: number;
    basis?: string;
};
export default class CellWrapper extends Component<CellWrapperProps, {}> {
    static defaultProps: {
        grow: number;
        basis: string;
    };
    render(): JSX.Element;
}
