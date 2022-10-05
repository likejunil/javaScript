const columnDefs = [
  {
    field: "country",
    rowGroup: true,
    rowGroupIndex: 2,
    hide: true,
  },
  {
    field: "athlete",
    rowGroup: true,
    rowGroupIndex: 1,
    hide: true,
  },
  {
    field: "age",
    filter: "agNumberColumnFilter",
  },
  {field: "year",},
  {
    field: "date",
    filter: "agDateColumnFilter",
  },
  {
    field: "sport",
    filter: "agTextColumnFilter",
  },
  {field: "gold"},
  {field: "silver"},
  {field: "bronze"},
  {field: "total"},
];

const defaultColDef = {
  sortable: true,
  filter: true,
  resizable: true,
  // enableRowGroup: true,
  // 버튼은 4개까지 가능하다. apply | clear | cancel | reset
  filterParams: {buttons: ['apply', 'clear']},
};

const gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: defaultColDef,
  
  rowGroupPanelShow: 'always',
  animateRows: true,
  
  // groupDisplayType: 'singleColumn',
  groupDisplayType: 'multipleColumns',
  // groupDisplayType: 'groupRows',
  groupHideOpenParents: true,
  // showOpenedGroup: true,
  
  autoGroupColumnDef: {
    // headerName: "GROUP",
    cellRenderer: "agGroupCellRenderer", // default
    cellRendererParams: {
      suppressCount: true,
      checkbox: true,
      innerRenderer: p => `<strong><em>${p.value}</em></strong>`,
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDiv, gridOptions);
  
  const url = "https://www.ag-grid.com/example-assets/olympic-winners.json";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      gridOptions.api.setRowData(data)
    });
});

const columnInfo = document.querySelector(".col-info");
columnInfo.onclick = () => {
  const info = gridOptions.columnApi.getAllGridColumns();
  console.log(info);
}
