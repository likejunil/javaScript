const defaultColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  rowSelection: 'multiple', // single | multiple
};

const columnDefs = [
  {field: 'country',},
  {field: 'athlete',},
  {field: 'age',},
  {field: 'year',},
  {field: 'sport',},
  {field: 'gold',},
  {field: 'silver',},
  {field: 'bronze',},
  {field: 'total',},
];

const getData = (gridOptions) => {
  const url = "https://www.ag-grid.com/example-assets/olympic-winners.json";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      gridOptions.api.setRowData(data);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector("#myGrid");
  const gridOptions = {
    defaultColDef: defaultColDef,
    columnDefs: columnDefs,
    animate: true,
  };
  agGrid.Grid(gridDiv, gridOptions);
  getData(gridOptions);
});

