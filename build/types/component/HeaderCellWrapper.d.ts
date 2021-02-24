import React, { Component } from 'react';
export declare type HeaderCellWrapperProps = {
    renderHeaderCell: () => React.ReactNode;
    grow?: number;
    basis?: string;
};
export default class HeaderCellWrapper extends Component<HeaderCellWrapperProps, {}> {
    static defaultProps: {
        grow: number;
        basis: string;
    };
    render(): JSX.Element;
}
