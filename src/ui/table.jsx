const React = require("react");
const { styled } = require("styled-components");

const Base = styled.div`
  border: 1px solid black;
`;

const Table = styled(Base).attrs({ as: 'table' })`
  border-collapse: collapse;
`;

const TableRow = styled(Base).attrs({ as: 'tr' })``;
const TableData = styled(Base).attrs({ as: 'td' })``;
const TableHeader = styled(Base).attrs({ as: 'th' })``;

module.exports = {
  Table,
  TableRow,
  TableData,
  TableHeader
}
