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

function lineChartDataRandomizer(lenght: number = 25, multiplier: number = 5): number[] {
  return new Array(lenght)
    .fill(undefined)
    .map((x: undefined, index: number) => Math.floor(multiplier * index) + Math.floor(Math.random() * 30) + 10);
}
