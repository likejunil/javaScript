const simpleComp = (params) => {
  return params.value;
};

class ClassComp {
  init(param) {
    console.log(`init()이 호출되었다. params=${param.value}`);
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `
      <button class="gui-btn">${param.value}</button>
    `;
    
    this.btn = this.eGui.querySelector(".gui-btn");
    this.btn.onclick = () => alert(`text:${param.btnText}, value:${param.value}`);
    // this.btn.addEventListener('click', () => alert(`ok`));
    
  }
  
  getGui() {
    console.log(`getGui()이 호출되었다.`);
    return this.eGui;
  }
  
  refresh() {
    console.log(`refresh()이 호출되었다.`);
    
  }
  
  destroy() {
    console.log(`destroy()이 호출되었다.`);
    
  }
}

const gridOptions = {
  columnDefs: [
    {
      field: "country",
      sortable: false,
      cellRenderer: ClassComp,
      cellRendererParams: {btnText: "red"},
    },
    {
      field: "athlete",
      cellRenderer: simpleComp,
    },
    {
      field: "age",
      cellRenderer: ClassComp,
      cellRendererParams: {btnText: "black"},
    },
    {
      field: "year",
      cellRendererSelector: p => {
        if (p.value === 2000) {
          return {component: param => `<em><strong>${param.value}</strong></em>`};
        } else if (p.value < 2010) {
          return {component: simpleComp};
        } else {
          return {component: ClassComp};
        }
      },
    },
    {field: "date"},
    {field: "sport"},
    {field: "gold"},
    {field: "silver"},
    {field: "bronze"},
    {field: "total"},
  ],
  
  // defaultColDef 에 선언하면 모든 column 에 적용된다.
  defaultColDef: {
    sortable: true,
    filter: true,
    // cellRenderer: ClassComp,
  },
}

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
