import React from "react";
import styled from "styled-components";

export const DataRow = styled.div`
  width: 100%;
  height: 30px;
  border-top: 1px solid slategray;
  &:nth-of-type(1) {
    border-top: none;
  }
`;

export const DataCell = styled.div`
  width: 33.33%;
  height: 100%;
  line-height: 30px;
  border-left: 1px solid slategray;
  display: inline-block;
  text-align: center;
  &:nth-child(1) {
    border-left: none;
  }
`;

export const HeaderRow = styled.header`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid black;
  position: absolute;
  top: 0;
`;
export const HeaderCell = DataCell.extend`
  font-weight: bold;
  border-left: none;
`;

const mapCell = (col, data) => (
  <DataCell key={data.id}>{col.formatter(data)}</DataCell>
);
const genRow = (cols, data) => {
  const cells = cols.map(c => mapCell(c, data[c.key]));
  return <DataRow key={data.id}>{cells}</DataRow>;
};

const TableHeader = ({ columns }) => {
  return (
    <HeaderRow>
      {columns.map(c => <HeaderCell key={c.label}>{c.label}</HeaderCell>)}
    </HeaderRow>
  );
};

const StyledTable = styled.div`
  padding-top: 30px;
  position: relative;
  overflow-y: auto;
  border: 1px solid slategray;
  width: 100%;
  background: white;
`;

const DataTable = props => {
  let mpp = props.maxPerPage || 5;
  return (
    <StyledTable width={props.width} height={props.height}>
      <TableHeader columns={props.cols} />
      {props.rows.map(r => genRow(props.cols, r))}
    </StyledTable>
  );
};

const PaginationButton = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: ${p => (p.active ? "#004080" : "#0070B0")};
  color: white;
  margin: 0 2px;
  border-radius: 15px;
  transition: 0.2s;
  cursor: pointer;
`;

const Pagination = ({ current, pageCount, changeCallback }) => {
  let pageNumbers = [...Array(pageCount).keys()].map(k => k + 1);
  let buttons = pageNumbers.map(pn => (
    <PaginationButton
      onClick={() => changeCallback(pn)}
      active={pn == current}
      key={pn}>
      {pn}
    </PaginationButton>
  ));
  return (
    <div style={{ textAlign: "center", marginTop: "10px", width: "100%" }}>
      {buttons}
    </div>
  );
};
export default class DataTableWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.maxPerPage = props.maxPerPage || 10;
    this.state = { page: 1 };
  }
  changePage(page) {
    this.setState({ page });
  }
  render() {
    let { height, width, rows, cols } = this.props;
    let pageCount = Math.ceil(rows.length / this.maxPerPage);
    return (
      <div style={{width, height}}>
        <DataTable
          cols={cols}
          rows={this.paginate(rows, this.state.page)}
        />
        <Pagination
          current={this.state.page}
          pageCount={pageCount}
          changeCallback={this.changePage.bind(this)}
        />
      </div>
    );
  }
  paginate(rows, page) {
    let max = page * this.maxPerPage;
    let min = max - this.maxPerPage;
    return rows.slice(min, max);
  }
}
