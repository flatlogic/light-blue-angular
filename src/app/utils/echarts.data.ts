export const echartBarChartData: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  tooltip: {},
  xAxis: {
    show: false,
    data: Array.from({ length: 20 }).map((x: undefined, i: number) => 2000 + i),
    silent: false
  },
  yAxis: {
    show: false,
  },
  series: [{
    name: 'Nike',
    type: 'bar',
    data: Array.from({ length: 20 }).map((x: undefined, i: number) => ({
      value: (Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5,
      itemStyle: { color: '#feebb2' }
    })),
    animationDelay: function (idx) {
      return idx * 10;
    }
  }, {
    name: 'Puma',
    type: 'bar',
    data: Array.from({ length: 20 }).map((x: undefined, i: number) => ({
      value: (Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5,
      itemStyle: { color: '#f59f9f' }
    })),
    animationDelay: function (idx) {
      return idx * 10 + 100;
    }
  }],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
    return idx * 5;
  }
};

export const echartPieChartData: any = {
  tooltip: {},
  legend: {
    show: false
  },
  series: [{
    type: 'pie',
    radius: '80%',
    center: ['50%', '50%'],
    label: {
      show: false
    },
    data: [
      {
        name: 'Motorola Startac',
        value: Math.round(Math.random() * 100_000)
      },
      {
        name: 'Nokia 1011',
        value: Math.round(Math.random() * 100_000)
      },
      {
        name: 'Sony Ericsson W880I',
        value: Math.round(Math.random() * 100_000)
      },
      {
        name: 'Motorola RAZR V3',
        value: Math.round(Math.random() * 100_000)
      },
      {
        name: 'Nokia N95 ',
        value: Math.round(Math.random() * 100_000)
      },
      {
        name: 'Blackberry 7230 ',
        value: Math.round(Math.random() * 100_000)
      }
    ]
  }]
};

export const echartAreaChartData: any = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    show: false
  },
  toolbox: {
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '5%',
    top: '0'
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      show: false,
      data: ['Gaz', 'Uaz', 'Lada', 'Volga', 'Zil', 'Mosckvich', 'Zhiguli']
    }
  ],
  yAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  series: [
    {
      type: 'line',
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      type: 'line',
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      type: 'line',
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      type: 'line',
      areaStyle: { normal: {} },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      type: 'line',
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      areaStyle: { normal: {} },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

export const echartLineChartData: any = {
  color: ['#d1dcff'],
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    boundaryGap: false,
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    areaStyle: { color: '#d1dcff' }
  }]
};

export const echartPieChartData2: any = {
  tooltip: {},
  legend: {
    show: false
  },
  series: [{
    type: 'pie',
    radius: '80%',
    center: ['50%', '50%'],
    label: {
      show: false
    },
    data: [
      {
        name: 'Good',
        value: Math.round(Math.random() * 100_000)
      },
      {
        name: 'Evil',
        value: Math.round(Math.random() * 100_000)
      }
    ]
  }]
};

export const echartBarChartData2: any = {
  color: ['#b7b3ff'],
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false
    }
  ],
  yAxis: [{
    type: 'value',
    show: false
  }],
  series: [{
    name: 'Minerals',
    type: 'bar',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
};

export const echartLineChartData2: any = {
  color: ['#587ef2'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    boundaryGap: false,
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
};

export const echartBarChartData3: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#f0b518'],
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    type: 'bar',
    barWidth: '70%',
    data: [9, 12, 14, 15, 10, 14, 20]
  }]
};

export const echartBarChartData4: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#ffa587'],
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    type: 'bar',
    barWidth: '70%',
    data: [9, 12, 14, 15, 10, 14, 20]
  }]
};

export const echartAreaChartData2: any = {
  tooltip: {
    // trigger: 'axis',
    // axisPointer: {
    //   type: 'cross',
    //   label: {
    //     backgroundColor: '#6a7985'
    //   }
    // }
  },
  legend: {
    show: false
  },
  toolbox: {
  },
  grid: {
    left: '0',
    right: '0',
    bottom: '0',
    top: '0'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    show: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [
    {
      type: 'line',
      areaStyle: {},
      data: [82, 93, 75, 20, 71, 55, 33],
      color: '#dddddd'
    },
    {
      type: 'line',
      areaStyle: {},
      data: [99, 75, 80, 84, 33, 66, 22],
      color: '#a7b6d2'
    }
  ]
};
