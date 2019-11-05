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

function lineChartDataRandomizer(lenght: number = 25, multiplier: number = 5): number[] {
  return new Array(lenght)
    .fill(undefined)
    .map((x: undefined, index: number) => Math.floor(multiplier * index) + Math.floor(Math.random() * 30) + 10);
}
