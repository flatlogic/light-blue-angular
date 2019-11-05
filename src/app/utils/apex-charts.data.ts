import { ApexOptions } from 'ng-apexcharts';

export const apexOptions1: ApexOptions = {
  series: [
    { name: 'Visitors', data: lineChartDataRandomizer(25, 5) },
    { name: 'Charts', data: lineChartDataRandomizer(25, 4) }
  ],
  colors: ['#777', '#dd5826'],
  chart: {
    type: 'line',
    height: '200px',
    background: 'transparent'
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
    show: false
  }
};

export const apexOptions2: ApexOptions = {
  series: [
    { name: 'Controllers', data: lineChartDataRandomizer(25, 5) },
    { name: 'Scopes', data: lineChartDataRandomizer(25, 3) }
  ],
  colors: ['#777', '#f0b518'],
  chart: {
    type: 'line',
    height: '340px',
    background: 'transparent'
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
  colors: ['#ffdb6f', '#ffaa73', '#ffc247'],
  chart: {
    type: 'line',
    height: '260px',
    background: 'transparent'
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
    }
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#fff',
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    enabled: false
  }
};

export const apexOptions4: ApexOptions = {
  chart: {
    height: '260px',
    type: 'bar'
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
    categories: ['Jen', 'Feb', 'Mar', 'Apr', 'May']
  },
  colors: ['#a7beff', '#ace5d1', '#ffd7de'],
  legend: {
    show: true,
    position: 'right',
    floating: true
  },
  tooltip: {
    enabled: false
  },
  grid: {
    borderColor: '#56606b'
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
  colors: ['#fff8e3', '#ffebb2', '#ffc247'],
  chart: {
    type: 'line',
    height: '250px',
    background: 'transparent'
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
    }
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: '#fff',
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    enabled: false
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
  colors: ['#8fe5d4', '#ffd7de'],
  chart: {
    type: 'line',
    height: '340px',
    background: 'transparent'
  },
  stroke: {
    width: 2,
  },
  legend: {
    show: true
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

export const apexOptions7: ApexOptions = {
  chart: {
    type: 'pie',
    height: '200px'
  },
  labels: ['Rolex', 'Tissot', 'Orient', 'Other'],
  series: Array.from(Array(4), () => Math.floor(Math.random() * 100) + 1),
  legend: {
    show: false
  },
  colors: ['#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3']
};

export const apexOptions8: ApexOptions = {
  chart: {
    type: 'donut',
    height: '150px'
  },
  labels: ['Rolex', 'Tissot', 'Orient', 'Other'],
  series: Array.from(Array(4), () => Math.floor(Math.random() * 100) + 1),
  legend: {
    position: 'right'
  },
  colors: ['#ffd7de', '#8fe5d4', '#ace5d1', '#ffebb2', '#fff8e3']
};

export const apexOptions9: ApexOptions = {
  chart: {
    height: '200px',
    type: 'bar',
    stacked: true,
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%'
    },
  },
  series: [{
    name: 'PRODUCT A',
    data: [22, 33, 41, 67, 22, 43, 73, 23, 33]
  }, {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27, 11, 23, 22]
  }, {
    name: 'PRODUCT C',
    data: [11, 17, 15, 15, 21, 14, 22, 32, 33]
  }, {
    name: 'PRODUCT D',
    data: [21, 7, 25, 13, 22, 8, 15, 3, 22]
  }],
  colors: ['#E5E5FF', '#C0BDFF', '#D7E0FF'],
  dataLabels: {
    enabled: false
  }
};

function lineChartDataRandomizer(lenght: number = 25, multiplier: number = 5): number[] {
  return new Array(lenght)
    .fill(undefined)
    .map((x: undefined, index: number) => Math.floor(multiplier * index) + Math.floor(Math.random() * 30) + 10);
}
