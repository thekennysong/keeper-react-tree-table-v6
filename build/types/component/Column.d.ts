import React, { Component } from 'react';
import Row from '../model/row';
export declare type ColumnProps = {
    renderCell: (row: Row) => React.ReactNode;
    renderHeaderCell: () => React.ReactNode;
    grow?: number;
    basis?: string;
};
export default class Column extends Component<ColumnProps, {}> {
    static displayName: string;
    render(): null;
}
