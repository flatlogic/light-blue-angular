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
      itemStyle: { color: '#db4912' }
    })),
    animationDelay: function (idx) {
      return idx * 10;
    }
  }, {
    name: 'Puma',
    type: 'bar',
    data: Array.from({ length: 20 }).map((x: undefined, i: number) => ({
      value: (Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5,
      itemStyle: { color: '#f0af03' }
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
        value: Math.round(Math.random() * 100_000),
        itemStyle: { color: '#8cbf26' }
      },
      {
        name: 'Nokia 1011',
        value: Math.round(Math.random() * 100_000),
        itemStyle: { color: '#4e85bd' }
      },
      {
        name: 'Sony Ericsson W880I',
        value: Math.round(Math.random() * 100_000),
        itemStyle: { color: '#db4912' }
      },
      {
        name: 'Motorola RAZR V3',
        value: Math.round(Math.random() * 100_000),
        itemStyle: { color: '#f0af03' }
      },
      {
        name: 'Nokia N95 ',
        value: Math.round(Math.random() * 100_000),
        itemStyle: { color: '#57b955' }
      },
      {
        name: 'Blackberry 7230 ',
        value: Math.round(Math.random() * 100_000),
        itemStyle: { color: '#4ebfbb' }
      }
    ]
  }]
};

export const echartPieChartData3: any = {
  color: ['#db4912', '#f0af03', '#57b955'],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    right: '0',
    top: '25%',
    data: ['SMX', 'Direct', 'Networks'],
    textStyle: {
      color: '#ffffff'
    }
  },
  series: [{
    type: 'pie',
    radius: ['50%', '70%'],
    center: ['25%', '50%'],
    label: {
      show: false
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    hoverAnimation: false,
    avoidLabelOverlap: false,
    data: [
      {
        name: 'SMX',
        value: Math.round(Math.random() * 100)
      },
      {
        name: 'Direct',
        value: Math.round(Math.random() * 100)
      },
      {
        name: 'Networks',
        value: Math.round(Math.random() * 100)
      },
    ]
  }]
};

export const echartAreaChartData: any = {
  color: ['#8cbf26', '#4e85bd', '#db4912', '#f0af03', '#57b955'],
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
  legend: {
    show: false
  },
  toolbox: {
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
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      type: 'line',
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      type: 'line',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      type: 'line',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      type: 'line',
      data: [420, 432, 401, 434, 490, 430, 420]
    }
  ]
};

export const echartLineChartData: any = {
  color: ['#4e85bd'],
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
    areaStyle: { color: '#4e85bd' }
  }]
};

export const echartPieChartData2: any = {
  tooltip: {},
  color: ['#8cbf26', '#4ebfbb'],
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
  color: ['#8cbf26'],
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
  color: ['#4ebfbb'],
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
  color: ['#f0af03'],
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
  color: ['#db4912'],
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
      color: '#4e85bd '
    },
    {
      type: 'line',
      areaStyle: {},
      data: [99, 75, 80, 84, 33, 66, 22],
      color: '#4ebfbb'
    }
  ]
};

export const echartBarChartData5: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#64bd63'],
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
    barWidth: '50%',
    data: [9, 12, 14, 15, 10, 14, 20]
  }]
};

export const echartLineBarData: any = {
  grid: {
    left: '0',
    right: '0',
    bottom: '0',
    top: '0'
  },
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {

  },
  legend: {
    show: false
  },
  xAxis: [
    {
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      axisPointer: {
        type: 'shadow'
      },
      show: false
    }
  ],
  yAxis: [
    {
      type: 'value',
      show: false
    },
    {
      type: 'value',
      show: false
    }
  ],
  series: [

    {
      name: 'Actives',
      type: 'bar',
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 35.6, 2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 25.6, 40.7, 28.7,
        26.4, 9.0, 5.9, 2.6, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 2.6, 5.9, 9.0, 26.4],
      itemStyle: { color: '#7bd47a' }
    },
    {
      name: 'Passives',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 35.6, 40.7, 35.6, 2.0,
        2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 25.6, 70.7, 28.7, 26.4, 9.0, 5.9, 2.6, 2.2, 3.3, 4.5],
      itemStyle: { color: '#b6dfb3' }
    }
  ]
};

export const echartLineChartData3: any = {
  color: ['#4ebfbb'],
  grid: {
    top: '20%',
    right: '5%',
    bottom: '0',
    left: '5%',
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    show: false
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    boundaryGap: false,
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: [{
    data: [4, 6, 5, 7, 5],
    type: 'line'
  }]
};

export const echartBarChartData6: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#618fb0'],
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
    barWidth: '90%',
    data: [13, 14, 16, 15, 4, 14, 20]
  }]
};

export const echartBarChartData7: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#999'],
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
    barWidth: '90%',
    data: [14, 12, 16, 11, 17, 19, 16]
  }]
};

export const echartBarChartData8: any = {
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
    barWidth: '90%',
    data: [11, 17, 19, 16, 14, 12, 16]
  }]
};

export const echartBarChartData9: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#e5603b'],
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
    barWidth: '90%',
    data: [13, 14, 20, 16, 15, 4, 14]
  }]
};

export const echartBarChartData10: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#618fb0'],
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
    barWidth: '90%',
    data: [16, 15, 4, 14, 13, 14, 20]
  }]
};

export const echartDynamicAreaData: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#4e85bd', '#8cbf26'],
  tooltip: {
  },
  legend: {
    show: false
  },
  toolbox: {
    show: false
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [
    {
      type: 'category',
      show: false,
      boundaryGap: false,
      data: (function () {
        let now = new Date();
        const res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })()
    },
    {
      type: 'category',
      boundaryGap: false,
      show: false,
      data: (function () {
        const res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })()
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: 'Price',
      max: 30,
      min: 0,
      boundaryGap: false,
      show: false,
    },
    {
      type: 'value',
      scale: true,
      name: 'Quantity',
      max: 1200,
      min: 0,
      boundaryGap: false,
      show: false,
    }
  ],
  series: [
    {
      name: 'Queue',
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: (function () {
        const res = [];
        let len = 10;
        while (len--) {
          res.push(Math.round(Math.random() * 1000));
        }
        return res;
      })(),
      areaStyle: { color: '#4e85bd' }
    },
    {
      name: 'Latest price',
      type: 'line',
      data: (function () {
        const res = [];
        let len = 0;
        while (len < 10) {
          res.push((parseFloat((Math.random() * 10 + 5).toFixed(1)) - 0));
          len++;
        }
        return res;
      })(),
      areaStyle: { color: '#8cbf26' }
    }
  ]
};

export const echartDynamicAreaData2: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#666666', '#343434'],
  tooltip: {
  },
  legend: {
    show: false
  },
  toolbox: {
    show: false
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [
    {
      type: 'category',
      show: false,
      boundaryGap: false,
      data: (function () {
        let now = new Date();
        const res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })()
    },
    {
      type: 'category',
      boundaryGap: false,
      show: false,
      data: (function () {
        const res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })()
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: 'Price',
      max: 30,
      min: 0,
      boundaryGap: false,
      show: false,
    },
    {
      type: 'value',
      scale: true,
      name: 'Quantity',
      max: 1200,
      min: 0,
      boundaryGap: false,
      show: false,
    }
  ],
  series: [
    {
      name: 'Uploads',
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: (function () {
        const res = [];
        let len = 10;
        while (len--) {
          res.push(parseInt(Math.round(Math.random() * 1000).toFixed(0), 10));
        }
        return res;
      })(),
      areaStyle: { color: '#666666' }
    },
    {
      name: 'Downloads',
      type: 'line',
      data: (function () {
        const res = [];
        let len = 0;
        while (len < 10) {
          res.push((parseInt((Math.random() * 10 + 5).toFixed(0), 10) - 0));
          len++;
        }
        return res;
      })(),
      areaStyle: { color: '#343434' }
    }
  ]
};


export const echartDynamicAreaData3: any = {
  grid: {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  color: ['#db4912', '#fff'],
  tooltip: {
  },
  legend: {
    show: false
  },
  toolbox: {
    show: false
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [
    {
      type: 'category',
      show: false,
      boundaryGap: false,
      data: (function () {
        let now = new Date();
        const res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })()
    },
    {
      type: 'category',
      boundaryGap: false,
      show: false,
      data: (function () {
        const res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })()
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: 'Price',
      max: 30,
      min: 0,
      boundaryGap: false,
      show: false,
    },
    {
      type: 'value',
      scale: true,
      name: 'Quantity',
      max: 1200,
      min: 0,
      boundaryGap: false,
      show: false,
    }
  ],
  series: [
    {
      name: 'Apple',
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: (function () {
        const res = [];
        let len = 10;
        while (len--) {
          res.push(parseInt(Math.round(Math.random() * 1000).toFixed(0), 10));
        }
        return res;
      })(),
      areaStyle: { color: '#db4912' }
    },
    {
      name: 'Google',
      type: 'line',
      data: (function () {
        const res = [];
        let len = 0;
        while (len < 10) {
          res.push((parseInt((Math.random() * 10 + 5).toFixed(0), 10) - 0));
          len++;
        }
        return res;
      })(),
      areaStyle: { color: '#fff' }
    }
  ]
};
