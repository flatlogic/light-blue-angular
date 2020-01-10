import { ApexOptions } from 'ng-apexcharts';

export const apexOptions1: ApexOptions = {
  series: [
    { name: 'Visitors', data: lineChartDataRandomizer(25, 5) },
    { name: 'Charts', data: lineChartDataRandomizer(25, 4) }
  ],
  colors: ['#4ebfbb', '#db4912'],
  chart: {
    type: 'line',
    height: '200px',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 2
  },
  legend: {
    show: false
  },
  xaxis: {
    floating: true,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: {
    floating: true,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  grid: {
    padding: {
      left: 0,
      right: 0
    },
    show: false
  }
};

export const apexOptions2: ApexOptions = {
  series: [
    { name: 'Controllers', data: lineChartDataRandomizer(25, 5) },
    { name: 'Scopes', data: lineChartDataRandomizer(25, 3) }
  ],
  colors: ['#8cbf26', '#f0af03'],
  chart: {
    type: 'line',
    height: '200px',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 2
  },
  legend: {
    show: false
  },
  xaxis: {
    floating: true,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: {
    floating: true,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  grid: {
    padding: {
      right: 0,
      left: 0
    },
    show: false
  }
};

export const apexOptions3 = {
  series: [
    {
      name: 'Traffic',
      data: [
        { x: '1', y: 20 },
        { x: '2', y: 20 },
        { x: '3', y: 40 },
        { x: '4', y: 30 },
        { x: '5', y: 40 },
        { x: '6', y: 35 },
        { x: '7', y: 47 }
      ]
    },
    {
      name: 'Traffic',
      type: 'area',
      data: [
        { x: '1', y: 13 },
        { x: '2', y: 8 },
        { x: '3', y: 17 },
        { x: '4', y: 10 },
        { x: '5', y: 17 },
        { x: '6', y: 15 },
        { x: '7', y: 16 }
      ]
    },
    {
      name: 'Traffic',
      type: 'area',
      data: [
        { x: '1', y: 23 },
        { x: '2', y: 13 },
        { x: '3', y: 33 },
        { x: '4', y: 16 },
        { x: '5', y: 32 },
        { x: '6', y: 28 },
        { x: '7', y: 31 }
      ]
    }
  ],
  colors: ['#4ebfbb', '#f0af03', '#db4912'],
  chart: {
    type: 'line',
    height: '280px',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 2
  },
  legend: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: '#fff'
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#fff',
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        color: '#fff'
      }
    }
  },
  tooltip: {
    enabled: true
  }
};

export const apexOptions4 = {
  chart: {
    height: '260px',
    type: 'bar',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    show: false,
  },
  series: [
    {
      name: 'Apple',
      data: [120, 70, 100, 60, 35]
    },
    {
      name: 'Google',
      data: [90, 60, 30, 73, 30]
    },
    {
      name: 'Facebook',
      data: [80, 40, 47, 22, 24]
    }
  ],
  xaxis: {
    categories: ['Jen', 'Feb', 'Mar', 'Apr', 'May'],
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        color: '#fff'
      }
    }
  },
  colors: ['#4ebfbb', '#57b955', '#db4912'],
  legend: {
    show: true,
    position: 'bottom',
    floating: false,
    labels: {
      colors: '#fff'
    }
  },
  tooltip: {
    enabled: false
  },
  grid: {
    borderColor: '#fff'
  }
};

export const apexOptions5 = {
  series: [
    {
      name: 'Traffic',
      data: [
        { x: '1', y: 20 },
        { x: '2', y: 20 },
        { x: '3', y: 40 },
        { x: '4', y: 30 },
        { x: '5', y: 40 },
        { x: '6', y: 35 },
        { x: '7', y: 47 }
      ]
    },
    {
      name: 'Traffic',
      type: 'area',
      data: [
        { x: '1', y: 13 },
        { x: '2', y: 8 },
        { x: '3', y: 17 },
        { x: '4', y: 10 },
        { x: '5', y: 17 },
        { x: '6', y: 15 },
        { x: '7', y: 16 }
      ]
    },
    {
      name: 'Traffic',
      type: 'area',
      data: [
        { x: '1', y: 23 },
        { x: '2', y: 13 },
        { x: '3', y: 33 },
        { x: '4', y: 16 },
        { x: '5', y: 32 },
        { x: '6', y: 28 },
        { x: '7', y: 31 }
      ]
    }
  ],
  colors: ['#4ebfbb', '#4e85bd', '#57b955'],
  chart: {
    type: 'line',
    height: '250px',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 2
  },
  legend: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: '#fff'
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#fff',
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        color: '#fff'
      }
    }
  },
  tooltip: {
    enabled: true
  }
};

export const apexOptions6 = {
  series: [
    {
      name: 'sin(x)', data: Array.from({ length: 100 }).fill(0.1)
        .map((_: number, i: number, arr: number[]) =>
          parseFloat(arr.slice(0, i).reduce((x: number, y: number) => x + y, 0).toFixed(1))
        )
        .map((value: number) => ([value, Math.sin(value)]))
    },
    {
      name: 'cos(x)', data: Array.from({ length: 100 }).fill(0.1)
        .map((_: number, i: number, arr: number[]) =>
          parseFloat(arr.slice(0, i).reduce((x: number, y: number) => x + y, 0).toFixed(1))
        )
        .map((value: number) => ([value, Math.cos(value)]))
    }
  ],
  colors: ['#db4912', '#57b955'],
  chart: {
    type: 'line',
    height: '380px',
    background: 'transparent',
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 2,
  },
  legend: {
    show: true,
    labels: {
      colors: '#fff'
    }
  },
  xaxis: {
    min: 1,
    max: 6,
    tickAmount: 6,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    }
  },
  yaxis: {
    min: -1.2,
    max: 1.2,
    type: 'numeric',
    tickAmount: 2,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false,
    }
  },
  grid: {
  },
  tooltip: {
    theme: 'light',
    style: {
      fillSeriesColor: true
    }
  }
};

export const apexOptions7 = {
  chart: {
    type: 'pie',
    height: '200px',
    toolbar: {
      show: false
    }
  },
  labels: ['Rolex', 'Tissot', 'Orient', 'Other'],
  series: Array.from(Array(4), () => Math.floor(Math.random() * 100) + 1),
  legend: {
    show: true,
    position: 'right',
    labels: {
      colors: '#fff'
    }
  },
  colors: ['#8cbf26', '#f0af03', '#57b955', '#4ebfbb', '#4e85bd']
};

export const apexOptions8 = {
  chart: {
    type: 'donut',
    height: '150px',
    toolbar: {
      show: false
    }
  },
  labels: ['Rolex', 'Tissot', 'Orient', 'Other'],
  series: Array.from(Array(4), () => Math.floor(Math.random() * 100) + 1),
  legend: {
    show: true,
    position: 'right',
    labels: {
      colors: '#fff'
    }
  },
  colors: ['#8cbf26', '#f0af03', '#57b955', '#4ebfbb', '#4e85bd']
};

export const apexOptions9 = {
  chart: {
    height: '200px',
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%'
    },
  },
  legend: {
    labels: {
      colors: '#fff'
    }
  },
  series: [{
    name: 'Product A',
    data: [22, 33, 41, 67, 22, 43, 73, 23, 33]
  }, {
    name: 'Product B',
    data: [13, 23, 20, 8, 13, 27, 11, 23, 22]
  }, {
    name: 'Product C',
    data: [11, 17, 15, 15, 21, 14, 22, 32, 33]
  }, {
    name: 'Product D',
    data: [21, 7, 25, 13, 22, 8, 15, 3, 22]
  }],
  colors: ['#8cbf26', '#f0af03', '#57b955', '#4ebfbb'],
  dataLabels: {
    enabled: false
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: '#fff'
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#fff',
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        color: '#fff'
      }
    }
  }
};

function lineChartDataRandomizer(lenght: number = 25, multiplier: number = 5): number[] {
  return new Array(lenght)
    .fill(undefined)
    .map((x: undefined, index: number) => Math.floor(multiplier * index) + Math.floor(Math.random() * 30) + 10);
}
