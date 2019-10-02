import React from 'react';
import Button from 'react-bootstrap/Button'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const ExportCSV = ({csvData, fileName}) => {

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
    const workSheet = XLSX.utils.json_to_sheet(csvData);
    const workBook = { Sheets: {'data': workSheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <Button type="button" className="btn-warning" onClick={(event) => exportToCSV(csvData,fileName)}>Export</Button>
  )
}
