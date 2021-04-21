import React, { Component, Children, CSSProperties } from 'react';
import memoizeOne from 'memoize-one';
import Column, { ColumnProps } from './Column';
import CellWrapper from './CellWrapper';
import TreeState from '../model/tree-state';
import Row, { RowModel } from '../model/row';
import { createRow } from '../util/row-creator';

export type VirtualListRowProps = {
  data: Readonly<TreeState>;
  model: RowModel;
  columns: Array<ColumnProps>;

  onChange: (value: Readonly<TreeState>) => void;

  index: number;
  relIndex: number;
};

export default class VirtualListRow extends Component<VirtualListRowProps, {}> {
  render() {
    //console.log(this.props);
    const { model, columns, data, index, relIndex } = this.props;
    const memoed = memoizeOne(createRow);
    const row: Row = memoed(model, data, this.handleChange);

    return (
      <div
        className={`cp_tree-table_row`}
        style={{
          ...STYLE_ROW,
          height: `${row.metadata.height}px`,
          background:
            row.data.type === 'transaction'
              ? (row.data.indexTxn + 1) % 2 !== 0
                ? '#e6e6eb'
                : 'white'
              : 'none',
          borderTop:
            row.data.type === 'transaction' && row.data.indexTxn === 0
              ? 'solid 2px black'
              : 'none',
          borderLeft:
            row.data.type === 'transaction' ? 'solid 2px black' : 'none',
          borderRight:
            row.data.type === 'transaction' ? 'solid 2px black' : 'none',
          borderBottom:
            row.data.type === 'transaction' &&
            row.data.indexTxn === row.data.totalTxns - 1
              ? 'solid 2px black'
              : 'none',
        }}
        data-index={index}
        data-relindex={relIndex}
      >
        {columns.map((column: ColumnProps, indexKey) => {
          return (
            <CellWrapper
              key={indexKey}
              indexKey={indexKey}
              row={row}
              renderCell={column.renderCell}
              grow={column.grow}
              basis={column.basis}
              columnTotal={columns.length}
              // background={
              //   !row.data.isStarReport || row.data.isShow
              //     ? row.data.isChecked === 'checked'
              //       ? '#e6f7ff'
              //       : row.data.isChecked === 'childrenChecked'
              //       ? 'rgb(230 247 255 / .5)'
              //       : row.data.upDownColor
              //       ? row.data.upDownColor
              //       : ''
              //     : ''
              // }
            />
          );
        })}
      </div>
    );
  }

  private handleChange = (value: Readonly<TreeState>): void => {
    const { onChange } = this.props;
    onChange(value);
  };
}

const STYLE_ROW: CSSProperties = {
  display: 'flex',

  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
};
