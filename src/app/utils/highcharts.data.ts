import * as Highstock from 'highcharts/highstock';

export const highchartsOptions1: Highstock.Options = {
  navigator: {
    enabled: false
  },
  rangeSelector: {
    enabled: false,
    buttonTheme: {
      display: 'none'
    },
    labelStyle: {
      display: 'none'
    }
  },
  xAxis: {
    labels: {
      style: {
        color: 'white'
      }
    }
  },
  scrollbar: {
    enabled: false
  },
  chart: {
    resetZoomButton: {
      theme: {
        display: 'none'
      }
    },
    backgroundColor: 'transparent',
    style: {
      color: 'white'
    }
  },
  title: {
    text: 'AAPL Stock Price',
    style: {
      color: 'white'
    }
  },

  legend: {
    enabled: true,
    itemStyle: {
      color: 'white'
    }
  },

  plotOptions: {
    series: {
      showInLegend: true
    }
  },

  series: [
    {
      type: 'ohlc',
      id: 'aapl',
      name: 'AAPL Stock Price',
      data: [
        [1528983000000, 191.55, 191.57, 190.22, 190.8],
        [1529069400000, 190.03, 190.16, 188.26, 188.84],
        [1529328600000, 187.88, 189.22, 187.2, 188.74],
        [1529415000000, 185.14, 186.33, 183.45, 185.69],
        [1529501400000, 186.35, 187.2, 185.73, 186.5],
        [1529587800000, 187.25, 188.35, 184.94, 185.46],
        [1529674200000, 186.12, 186.15, 184.7, 184.92],
        [1529933400000, 183.4, 184.92, 180.73, 182.17],
        [1530019800000, 182.99, 186.53, 182.54, 184.43],
        [1530106200000, 185.23, 187.28, 184.03, 184.16],
        [1530192600000, 184.1, 186.21, 183.8, 185.5],
        [1530279000000, 186.29, 187.19, 182.91, 185.11],
        [1530538200000, 183.82, 187.3, 183.42, 187.18],
        [1530624600000, 187.79, 187.95, 183.54, 183.92],
        [1530797400000, 185.26, 186.41, 184.28, 185.4],
        [1530883800000, 185.42, 188.43, 185.2, 187.97],
        [1531143000000, 189.5, 190.68, 189.3, 190.58],
        [1531229400000, 190.71, 191.28, 190.18, 190.35],
        [1531315800000, 188.5, 189.78, 187.61, 187.88],
        [1531402200000, 189.53, 191.41, 189.31, 191.03],
        [1531488600000, 191.08, 191.84, 190.9, 191.33],
        [1531747800000, 191.52, 192.65, 190.42, 190.91],
        [1531834200000, 189.75, 191.87, 189.2, 191.45],
        [1531920600000, 191.78, 191.8, 189.93, 190.4],
        [1532007000000, 189.69, 192.55, 189.69, 191.88],
        [1532093400000, 191.78, 192.43, 190.17, 191.44],
        [1532352600000, 190.68, 191.96, 189.56, 191.61],
        [1532439000000, 192.45, 193.66, 192.05, 193],
        [1532525400000, 193.06, 194.85, 192.43, 194.82],
        [1532611800000, 194.61, 195.96, 193.61, 194.21],
        [1532698200000, 194.99, 195.19, 190.1, 190.98],
        [1532957400000, 191.9, 192.2, 189.07, 189.91],
        [1533043800000, 190.3, 192.14, 189.34, 190.29],
        [1533130200000, 199.13, 201.76, 197.31, 201.5],
        [1533216600000, 200.58, 208.38, 200.35, 207.39],
        [1533303000000, 207.03, 208.74, 205.48, 207.99],
        [1533562200000, 208, 209.25, 207.07, 209.07],
        [1533648600000, 209.32, 209.5, 206.76, 207.11],
        [1533735000000, 206.05, 207.81, 204.52, 207.25],
        [1533821400000, 209.53, 209.78, 207.2, 208.88],
        [1533907800000, 207.36, 209.1, 206.67, 207.53],
        [1534167000000, 209.31, 210.95, 207.7, 208.87],
        [1534253400000, 210.16, 210.56, 208.26, 209.75],
        [1534339800000, 209.22, 210.74, 208.33, 210.24],
        [1534426200000, 211.75, 213.81, 211.47, 213.32],
        [1534512600000, 213.44, 217.95, 213.16, 217.58],
        [1534771800000, 218.1, 219.18, 215.11, 215.46],
        [1534858200000, 216.8, 217.19, 214.03, 215.04],
        [1534944600000, 214.1, 216.36, 213.84, 215.05],
        [1535031000000, 214.65, 217.05, 214.6, 215.49],
        [1535117400000, 216.6, 216.9, 215.11, 216.16],
        [1535376600000, 217.15, 218.74, 216.33, 217.94],
        [1535463000000, 219.01, 220.54, 218.92, 219.7],
        [1535549400000, 220.15, 223.49, 219.41, 222.98],
        [1535635800000, 223.25, 228.26, 222.4, 225.03],
        [1535722200000, 226.51, 228.87, 226, 227.63],
        [1536067800000, 228.41, 229.18, 226.63, 228.36],
        [1536154200000, 228.99, 229.67, 225.1, 226.87],
        [1536240600000, 226.23, 227.35, 221.3, 223.1],
        [1536327000000, 221.85, 225.37, 220.71, 221.3],
        [1536586200000, 220.95, 221.85, 216.47, 218.33],
        [1536672600000, 218.01, 224.3, 216.56, 223.85],
        [1536759000000, 224.94, 225, 219.84, 221.07],
        [1536845400000, 223.52, 228.35, 222.57, 226.41],
        [1536931800000, 225.75, 226.84, 222.52, 223.84],
        [1537191000000, 222.15, 222.95, 217.27, 217.88],
        [1537277400000, 217.79, 221.85, 217.12, 218.24],
        [1537363800000, 218.5, 219.62, 215.3, 218.37],
        [1537450200000, 220.24, 222.28, 219.15, 220.03],
        [1537536600000, 220.78, 221.36, 217.29, 217.66],
        [1537795800000, 216.82, 221.26, 216.63, 220.79],
        [1537882200000, 219.75, 222.82, 219.7, 222.19],
        [1537968600000, 221, 223.75, 219.76, 220.42],
        [1538055000000, 223.82, 226.44, 223.54, 224.95],
        [1538141400000, 224.79, 225.84, 224.02, 225.74],
        [1538400600000, 227.95, 229.42, 226.35, 227.26],
        [1538487000000, 227.25, 230, 226.63, 229.28],
        [1538573400000, 230.05, 233.47, 229.78, 232.07],
        [1538662700000, 230.78, 232.33, 229.07, 230.15]

      ]
    },
    {
      type: 'zigzag',
      linkedTo: 'aapl'
    },
    {
      type: 'zigzag',
      linkedTo: 'aapl',
      params: {
        deviation: 5
      }
    }
  ]
};

export const highchartsOptions2 = {
  chart: {
    type: 'variablepie',
    backgroundColor: 'transparent'
  },
  accessibility: {
    exporting: {
      enabled: false
    }
  },
  title: {
    style: {
      display: 'none'
    }
  },
  tooltip: {
    headerFormat: '',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      'Area (square km): <b>{point.y}</b><br/>' +
      'Population density (people per square km): <b>{point.z}</b><br/>'
  },
  series: [{
    minPointSize: 10,
    innerSize: '20%',
    zMin: 0,
    name: 'countries',
    label: {
      style: { color: 'white' }
    },
    data: [{
      name: 'Spain',
      y: 505370,
      z: 92.9
    }, {
      name: 'France',
      y: 551500,
      z: 118.7
    }, {
      name: 'Poland',
      y: 312685,
      z: 124.6
    }, {
      name: 'Czech Republic',
      y: 78867,
      z: 137.5
    }, {
      name: 'Italy',
      y: 301340,
      z: 201.8
    }, {
      name: 'Switzerland',
      y: 41277,
      z: 214.5
    }, {
      name: 'Germany',
      y: 357022,
      z: 235.6
    }]
  }]
};

export const highchartsOptions3 = {
  chart: {
    type: 'area',
    backgroundColor: 'transparent',
  },
  title: {
    style: {
      display: 'none'
    }
  },
  subtitle: {
    style: {
      display: 'none'
    }
  },
  xAxis: {
    categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
    tickmarkPlacement: 'on',
    title: {
      enabled: false
    }
  },
  yAxis: {
    labels: {
      format: '{value}%'
    },
    title: {
      enabled: false
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
    split: true
  },
  plotOptions: {
    area: {
      stacking: 'percent',
      lineColor: '#ffffff',
      lineWidth: 1,
      marker: {
        lineWidth: 1,
        lineColor: '#ffffff'
      },
      accessibility: {
        pointDescriptionFormatter: function (point) {
          function round(x) {
            return Math.round(x * 100) / 100;
          }
          return (point.index + 1) + ', ' + point.category + ', ' +
            point.y + ' millions, ' + round(point.percentage) + '%, ' +
            point.series.name;
        }
      }
    }
  },
  series: [{
    name: 'Asia',
    data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
    name: 'Africa',
    data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
    name: 'Europe',
    data: [163, 203, 276, 408, 547, 729, 628]
  }, {
    name: 'America',
    data: [18, 31, 54, 156, 339, 818, 1201]
  }, {
    name: 'Oceania',
    data: [2, 2, 2, 6, 13, 30, 46]
  }]
};

export const highchartsOptions4 = {
  chart: {
    height: '90%',
    backgroundColor: 'transparent'
  },
  title: {
    style: {
      display: 'none'
    }
  },
  series: [{
    type: 'sunburst',
    data: [{
      id: '0.0',
      parent: '',
      name: 'The World'
    }, {
      id: '1.3',
      parent: '0.0',
      name: 'Asia'
    }, {
      id: '1.1',
      parent: '0.0',
      name: 'Africa'
    }, {
      id: '1.2',
      parent: '0.0',
      name: 'America'
    }, {
      id: '1.4',
      parent: '0.0',
      name: 'Europe'
    }, {
      id: '1.5',
      parent: '0.0',
      name: 'Oceanic'
    },

    /* Africa */
    {
      id: '2.1',
      parent: '1.1',
      name: 'Eastern Africa'
    },

    {
      id: '3.1',
      parent: '2.1',
      name: 'Ethiopia',
      value: 104957438
    }, {
      id: '3.2',
      parent: '2.1',
      name: 'Tanzania',
      value: 57310019
    }, {
      id: '3.3',
      parent: '2.1',
      name: 'Kenya',
      value: 49699862
    }, {
      id: '3.4',
      parent: '2.1',
      name: 'Uganda',
      value: 42862958
    }, {
      id: '3.5',
      parent: '2.1',
      name: 'Mozambique',
      value: 29668834
    }, {
      id: '3.6',
      parent: '2.1',
      name: 'Madagascar',
      value: 25570895
    }, {
      id: '3.7',
      parent: '2.1',
      name: 'Malawi',
      value: 18622104
    }, {
      id: '3.8',
      parent: '2.1',
      name: 'Zambia',
      value: 17094130
    }, {
      id: '3.9',
      parent: '2.1',
      name: 'Zimbabwe',
      value: 16529904
    }, {
      id: '3.10',
      parent: '2.1',
      name: 'Somalia',
      value: 14742523
    }, {
      id: '3.11',
      parent: '2.1',
      name: 'South Sudan',
      value: 12575714
    }, {
      id: '3.12',
      parent: '2.1',
      name: 'Rwanda',
      value: 12208407
    }, {
      id: '3.13',
      parent: '2.1',
      name: 'Burundi',
      value: 10864245
    }, {
      id: '3.14',
      parent: '2.1',
      name: 'Eritrea',
      value: 5068831
    }, {
      id: '3.15',
      parent: '2.1',
      name: 'Mauritius',
      value: 1265138
    }, {
      id: '3.16',
      parent: '2.1',
      name: 'Djibouti',
      value: 956985
    }, {
      id: '3.17',
      parent: '2.1',
      name: 'Réunion',
      value: 876562
    }, {
      id: '3.18',
      parent: '2.1',
      name: 'Comoros',
      value: 813912
    }, {
      id: '3.19',
      parent: '2.1',
      name: 'Mayotte',
      value: 253045
    }, {
      id: '3.20',
      parent: '2.1',
      name: 'Seychelles',
      value: 94737
    },

    {
      id: '2.5',
      parent: '1.1',
      name: 'Western Africa'
    },

    {
      id: '3.42',
      parent: '2.5',
      name: 'Nigeria',
      value: 190886311
    }, {
      id: '3.43',
      parent: '2.5',
      name: 'Ghana',
      value: 28833629
    }, {
      id: '3.44',
      parent: '2.5',
      name: 'Côte Ivoire',
      value: 24294750
    }, {
      id: '3.45',
      parent: '2.5',
      name: 'Niger',
      value: 21477348
    }, {
      id: '3.46',
      parent: '2.5',
      name: 'Burkina Faso',
      value: 19193382
    }, {
      id: '3.47',
      parent: '2.5',
      name: 'Mali',
      value: 18541980
    }, {
      id: '3.48',
      parent: '2.5',
      name: 'Senegal',
      value: 15850567
    }, {
      id: '3.49',
      parent: '2.5',
      name: 'Guinea',
      value: 12717176
    }, {
      id: '3.50',
      parent: '2.5',
      name: 'Benin',
      value: 11175692
    }, {
      id: '3.51',
      parent: '2.5',
      name: 'Togo',
      value: 7797694
    }, {
      id: '3.52',
      parent: '2.5',
      name: 'Sierra Leone',
      value: 7557212
    }, {
      id: '3.53',
      parent: '2.5',
      name: 'Liberia',
      value: 4731906
    }, {
      id: '3.54',
      parent: '2.5',
      name: 'Mauritania',
      value: 4420184
    }, {
      id: '3.55',
      parent: '2.5',
      name: 'The Gambia',
      value: 2100568
    }, {
      id: '3.56',
      parent: '2.5',
      name: 'Guinea-Bissau',
      value: 1861283
    }, {
      id: '3.57',
      parent: '2.5',
      name: 'Cabo Verde',
      value: 546388
    }, {
      id: '3.58',
      parent: '2.5',
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      value: 4049
    },

    {
      id: '2.3',
      parent: '1.1',
      name: 'North Africa'
    },

    {
      id: '3.30',
      parent: '2.3',
      name: 'Egypt',
      value: 97553151
    }, {
      id: '3.31',
      parent: '2.3',
      name: 'Algeria',
      value: 41318142
    }, {
      id: '3.32',
      parent: '2.3',
      name: 'Sudan',
      value: 40533330
    }, {
      id: '3.33',
      parent: '2.3',
      name: 'Morocco',
      value: 35739580
    }, {
      id: '3.34',
      parent: '2.3',
      name: 'Tunisia',
      value: 11532127
    }, {
      id: '3.35',
      parent: '2.3',
      name: 'Libya',
      value: 6374616
    }, {
      id: '3.36',
      parent: '2.3',
      name: 'Western Sahara',
      value: 552628
    },

    {
      id: '2.2',
      parent: '1.1',
      name: 'Central Africa'
    },

    {
      id: '3.21',
      parent: '2.2',
      name: 'Democratic Republic of the Congo',
      value: 81339988
    }, {
      id: '3.22',
      parent: '2.2',
      name: 'Angola',
      value: 29784193
    }, {
      id: '3.23',
      parent: '2.2',
      name: 'Cameroon',
      value: 24053727
    }, {
      id: '3.24',
      parent: '2.2',
      name: 'Chad',
      value: 14899994
    }, {
      id: '3.25',
      parent: '2.2',
      name: 'Congo',
      value: 5260750
    }, {
      id: '3.26',
      parent: '2.2',
      name: 'Central African Republic',
      value: 4659080
    }, {
      id: '3.27',
      parent: '2.2',
      name: 'Gabon',
      value: 2025137
    }, {
      id: '3.28',
      parent: '2.2',
      name: 'Equatorial Guinea',
      value: 1267689
    }, {
      id: '3.29',
      parent: '2.2',
      name: 'Sao Tome and Principe',
      value: 204327
    },

    {
      id: '2.4',
      parent: '1.1',
      name: 'South America'
    },

    {
      id: '3.37',
      parent: '2.4',
      name: 'South Africa',
      value: 56717156
    }, {
      id: '3.38',
      parent: '2.4',
      name: 'Namibia',
      value: 2533794
    }, {
      id: '3.39',
      parent: '2.4',
      name: 'Botswana',
      value: 2291661
    }, {
      id: '3.40',
      parent: '2.4',
      name: 'Lesotho',
      value: 2233339
    }, {
      id: '3.41',
      parent: '2.4',
      name: 'Swaziland',
      value: 1367254
    },

    /***********/

    /* America */
    {
      id: '2.9',
      parent: '1.2',
      name: 'South America'
    },

    {
      id: '3.98',
      parent: '2.9',
      name: 'Brazil',
      value: 209288278
    }, {
      id: '3.99',
      parent: '2.9',
      name: 'Colombia',
      value: 49065615
    }, {
      id: '3.100',
      parent: '2.9',
      name: 'Argentina',
      value: 44271041
    }, {
      id: '3.101',
      parent: '2.9',
      name: 'Peru',
      value: 32165485
    }, {
      id: '3.102',
      parent: '2.9',
      name: 'Venezuela',
      value: 31977065
    }, {
      id: '3.103',
      parent: '2.9',
      name: 'Chile',
      value: 18054726
    }, {
      id: '3.104',
      parent: '2.9',
      name: 'Ecuador',
      value: 16624858
    }, {
      id: '3.105',
      parent: '2.9',
      name: 'Bolivia',
      value: 11051600
    }, {
      id: '3.106',
      parent: '2.9',
      name: 'Paraguay',
      value: 6811297
    }, {
      id: '3.107',
      parent: '2.9',
      name: 'Uruguay',
      value: 3456750
    }, {
      id: '3.108',
      parent: '2.9',
      name: 'Guyana',
      value: 777859
    }, {
      id: '3.109',
      parent: '2.9',
      name: 'Suriname',
      value: 563402
    }, {
      id: '3.110',
      parent: '2.9',
      name: 'French Guiana',
      value: 282731
    }, {
      id: '3.111',
      parent: '2.9',
      name: 'Falkland Islands',
      value: 2910
    },

    {
      id: '2.8',
      parent: '1.2',
      name: 'Northern America'
    },

    {
      id: '3.93',
      parent: '2.8',
      name: 'United States',
      value: 324459463
    }, {
      id: '3.94',
      parent: '2.8',
      name: 'Canada',
      value: 36624199
    }, {
      id: '3.95',
      parent: '2.8',
      name: 'Bermuda',
      value: 61349
    }, {
      id: '3.96',
      parent: '2.8',
      name: 'Greenland',
      value: 56480
    }, {
      id: '3.97',
      parent: '2.8',
      name: 'Saint Pierre and Miquelon',
      value: 6320
    },

    {
      id: '2.7',
      parent: '1.2',
      name: 'Central America'
    },

    {
      id: '3.85',
      parent: '2.7',
      name: 'Mexico',
      value: 129163276
    }, {
      id: '3.86',
      parent: '2.7',
      name: 'Guatemala',
      value: 16913503
    }, {
      id: '3.87',
      parent: '2.7',
      name: 'Honduras',
      value: 9265067
    }, {
      id: '3.88',
      parent: '2.7',
      name: 'El Salvador',
      value: 6377853
    }, {
      id: '3.89',
      parent: '2.7',
      name: 'Nicaragua',
      value: 6217581
    }, {
      id: '3.90',
      parent: '2.7',
      name: 'Costa Rica',
      value: 4905769
    }, {
      id: '3.91',
      parent: '2.7',
      name: 'Panama',
      value: 4098587
    }, {
      id: '3.92',
      parent: '2.7',
      name: 'Belize',
      value: 374681
    },

    {
      id: '2.6',
      parent: '1.2',
      name: 'Caribbean'
    },

    {
      id: '3.59',
      parent: '2.6',
      name: 'Cuba',
      value: 11484636
    }, {
      id: '3.60',
      parent: '2.6',
      name: 'Haiti',
      value: 10981229
    }, {
      id: '3.61',
      parent: '2.6',
      name: 'Dominican Republic',
      value: 10766998
    }, {
      id: '3.62',
      parent: '2.6',
      name: 'Puerto Rico',
      value: 3663131
    }, {
      id: '3.63',
      parent: '2.6',
      name: 'Jamaica',
      value: 2890299
    }, {
      id: '3.64',
      parent: '2.6',
      name: 'Trinidad and Tobago',
      value: 1369125
    }, {
      id: '3.65',
      parent: '2.6',
      name: 'Guadeloupe',
      value: 449568
    }, {
      id: '3.66',
      parent: '2.6',
      name: 'Bahamas',
      value: 395361
    }, {
      id: '3.67',
      parent: '2.6',
      name: 'Martinique',
      value: 384896
    }, {
      id: '3.68',
      parent: '2.6',
      name: 'Barbados',
      value: 285719
    }, {
      id: '3.69',
      parent: '2.6',
      name: 'Saint Lucia',
      value: 178844
    }, {
      id: '3.70',
      parent: '2.6',
      name: 'Curaçao',
      value: 160539
    }, {
      id: '3.71',
      parent: '2.6',
      name: 'Saint Vincent and the Grenadines',
      value: 109897
    }, {
      id: '3.72',
      parent: '2.6',
      name: 'Grenada',
      value: 107825
    }, {
      id: '3.73',
      parent: '2.6',
      name: 'Aruba',
      value: 105264
    }, {
      id: '3.74',
      parent: '2.6',
      name: 'United States Virgin Islands',
      value: 104901
    }, {
      id: '3.75',
      parent: '2.6',
      name: 'Antigua and Barbuda',
      value: 102012
    }, {
      id: '3.76',
      parent: '2.6',
      name: 'Dominica',
      value: 73925
    }, {
      id: '3.77',
      parent: '2.6',
      name: 'Cayman Islands',
      value: 61559
    }, {
      id: '3.78',
      parent: '2.6',
      name: 'Saint Kitts and Nevis',
      value: 55345
    }, {
      id: '3.79',
      parent: '2.6',
      name: 'Sint Maarten',
      value: 40120
    }, {
      id: '3.80',
      parent: '2.6',
      name: 'Turks and Caicos Islands',
      value: 35446
    }, {
      id: '3.81',
      parent: '2.6',
      name: 'British Virgin Islands',
      value: 31196
    }, {
      id: '3.82',
      parent: '2.6',
      name: 'Caribbean Netherlands',
      value: 25398
    }, {
      id: '3.83',
      parent: '2.6',
      name: 'Anguilla',
      value: 14909
    }, {
      id: '3.84',
      parent: '2.6',
      name: 'Montserrat',
      value: 5177
    },
    /***********/

    /* Asia */
    {
      id: '2.13',
      parent: '1.3',
      name: 'Southern Asia'
    },

    {
      id: '3.136',
      parent: '2.13',
      name: 'India',
      value: 1339180127
    }, {
      id: '3.137',
      parent: '2.13',
      name: 'Pakistan',
      value: 197015955
    }, {
      id: '3.138',
      parent: '2.13',
      name: 'Bangladesh',
      value: 164669751
    }, {
      id: '3.139',
      parent: '2.13',
      name: 'Iran',
      value: 81162788
    }, {
      id: '3.140',
      parent: '2.13',
      name: 'Afghanistan',
      value: 35530081
    }, {
      id: '3.141',
      parent: '2.13',
      name: 'Nepal',
      value: 29304998
    }, {
      id: '3.142',
      parent: '2.13',
      name: 'Sri Lanka',
      value: 20876917
    }, {
      id: '3.143',
      parent: '2.13',
      name: 'Bhutan',
      value: 807610
    }, {
      id: '3.144',
      parent: '2.13',
      name: 'Maldives',
      value: 436330
    },

    {
      id: '2.11',
      parent: '1.3',
      name: 'Eastern Asia'
    },

    {
      id: '3.117',
      parent: '2.11',
      name: 'China',
      value: 1409517397
    }, {
      id: '3.118',
      parent: '2.11',
      name: 'Japan',
      value: 127484450
    }, {
      id: '3.119',
      parent: '2.11',
      name: 'South Korea',
      value: 50982212
    }, {
      id: '3.120',
      parent: '2.11',
      name: 'North Korea',
      value: 25490965
    }, {
      id: '3.121',
      parent: '2.11',
      name: 'Taiwan',
      value: 23626456
    }, {
      id: '3.122',
      parent: '2.11',
      name: 'Hong Kong',
      value: 7364883
    }, {
      id: '3.123',
      parent: '2.11',
      name: 'Mongolia',
      value: 3075647
    }, {
      id: '3.124',
      parent: '2.11',
      name: 'Macau',
      value: 622567
    },

    {
      id: '2.12',
      parent: '1.3',
      name: 'South-Eastern Asia'
    },

    {
      id: '3.125',
      parent: '2.12',
      name: 'Indonesia',
      value: 263991379
    }, {
      id: '3.126',
      parent: '2.12',
      name: 'Philippines',
      value: 104918090
    }, {
      id: '3.127',
      parent: '2.12',
      name: 'Vietnam',
      value: 95540800
    }, {
      id: '3.128',
      parent: '2.12',
      name: 'Thailand',
      value: 69037513
    }, {
      id: '3.129',
      parent: '2.12',
      name: 'Myanmar',
      value: 53370609
    }, {
      id: '3.130',
      parent: '2.12',
      name: 'Malaysia',
      value: 31624264
    }, {
      id: '3.131',
      parent: '2.12',
      name: 'Cambodia',
      value: 16005373
    }, {
      id: '3.132',
      parent: '2.12',
      name: 'Laos',
      value: 6858160
    }, {
      id: '3.133',
      parent: '2.12',
      name: 'Singapore',
      value: 5708844
    }, {
      id: '3.134',
      parent: '2.12',
      name: 'Timor-Leste',
      value: 1296311
    }, {
      id: '3.135',
      parent: '2.12',
      name: 'Brunei',
      value: 428697
      // 'color': ''
    },

    {
      id: '2.14',
      parent: '1.3',
      name: 'Western Asia'
    },

    {
      id: '3.145',
      parent: '2.14',
      name: 'Turkey',
      value: 80745020
    }, {
      id: '3.146',
      parent: '2.14',
      name: 'Iraq',
      value: 38274618
    }, {
      id: '3.147',
      parent: '2.14',
      name: 'Saudi Arabia',
      value: 32938213
    }, {
      id: '3.148',
      parent: '2.14',
      name: 'Yemen',
      value: 28250420
    }, {
      id: '3.149',
      parent: '2.14',
      name: 'Syria',
      value: 18269868
    }, {
      id: '3.150',
      parent: '2.14',
      name: 'Azerbaijan',
      value: 9827589
    }, {
      id: '3.151',
      parent: '2.14',
      name: 'Jordan',
      value: 9702353
    }, {
      id: '3.152',
      parent: '2.14',
      name: 'United Arab Emirates',
      value: 9400145
    }, {
      id: '3.153',
      parent: '2.14',
      name: 'Israel',
      value: 8321570
    }, {
      id: '3.154',
      parent: '2.14',
      name: 'Lebanon',
      value: 6082357
    }, {
      id: '3.155',
      parent: '2.14',
      name: 'Palestine',
      value: 4920724
    }, {
      id: '3.156',
      parent: '2.14',
      name: 'Oman',
      value: 4636262
    }, {
      id: '3.157',
      parent: '2.14',
      name: 'Kuwait',
      value: 4136528
    }, {
      id: '3.158',
      parent: '2.14',
      name: 'Georgia',
      value: 3912061
    }, {
      id: '3.159',
      parent: '2.14',
      name: 'Armenia',
      value: 2930450
    }, {
      id: '3.160',
      parent: '2.14',
      name: 'Qatar',
      value: 2639211
    }, {
      id: '3.161',
      parent: '2.14',
      name: 'Bahrain',
      value: 1492584
    },

    {
      id: '2.10',
      parent: '1.3',
      name: 'Central Asia'
    },

    {
      id: '3.112',
      parent: '2.10',
      name: 'Uzbekistan',
      value: 31910641
    }, {
      id: '3.113',
      parent: '2.10',
      name: 'Kazakhstan',
      value: 18204499
    }, {
      id: '3.114',
      parent: '2.10',
      name: 'Tajikistan',
      value: 8921343
    }, {
      id: '3.115',
      parent: '2.10',
      name: 'Kyrgyzstan',
      value: 6045117
    }, {
      id: '3.116',
      parent: '2.10',
      name: 'Turkmenistan',
      value: 5758075
    },
    /***********/

    /* Europe */
    {
      id: '2.15',
      parent: '1.4',
      name: 'Eastern Europe'
    },

    {
      id: '3.162',
      parent: '2.15',
      name: 'Russia',
      value: 143989754
    }, {
      id: '3.163',
      parent: '2.15',
      name: 'Ukraine',
      value: 44222947
    }, {
      id: '3.164',
      parent: '2.15',
      name: 'Poland',
      value: 38170712
    }, {
      id: '3.165',
      parent: '2.15',
      name: 'Romania',
      value: 19679306
    }, {
      id: '3.166',
      parent: '2.15',
      name: 'Czechia',
      value: 10618303
    }, {
      id: '3.167',
      parent: '2.15',
      name: 'Hungary',
      value: 9721559
    }, {
      id: '3.168',
      parent: '2.15',
      name: 'Belarus',
      value: 9468338
    }, {
      id: '3.169',
      parent: '2.15',
      name: 'Bulgaria',
      value: 7084571
    }, {
      id: '3.170',
      parent: '2.15',
      name: 'Slovakia',
      value: 5447662
    }, {
      id: '3.171',
      parent: '2.15',
      name: 'Moldova',
      value: 4051212
    }, {
      id: '3.172',
      parent: '2.15',
      name: 'Cyprus',
      value: 1179551
    },

    {
      id: '2.16',
      parent: '1.4',
      name: 'Northern Europe'
    },

    {
      id: '3.173',
      parent: '2.16',
      name: 'United Kingdom',
      value: 66181585
    }, {
      id: '3.174',
      parent: '2.16',
      name: 'Sweden',
      value: 9910701
    }, {
      id: '3.175',
      parent: '2.16',
      name: 'Denmark',
      value: 5733551
    }, {
      id: '3.176',
      parent: '2.16',
      name: 'Finland',
      value: 5523231
    }, {
      id: '3.177',
      parent: '2.16',
      name: 'Norway',
      value: 5305383
    }, {
      id: '3.178',
      parent: '2.16',
      name: 'Ireland',
      value: 4761657
    }, {
      id: '3.179',
      parent: '2.16',
      name: 'Lithuania',
      value: 2890297
    }, {
      id: '3.180',
      parent: '2.16',
      name: 'Latvia',
      value: 1949670
    }, {
      id: '3.181',
      parent: '2.16',
      name: 'Estonia',
      value: 1309632
    }, {
      id: '3.182',
      parent: '2.16',
      name: 'Iceland',
      value: 335025
    }, {
      id: '3.183',
      parent: '2.16',
      name: 'Guernsey and  Jersey',
      value: 165314
    }, {
      id: '3.184',
      parent: '2.16',
      name: 'Isle of Man',
      value: 84287
    }, {
      id: '3.185',
      parent: '2.16',
      name: 'Faroe Islands',
      value: 49290
    },

    {
      id: '2.17',
      parent: '1.4',
      name: 'Southern Europe'
    },

    {
      id: '3.186',
      parent: '2.17',
      name: 'Italy',
      value: 59359900
    }, {
      id: '3.187',
      parent: '2.17',
      name: 'Spain',
      value: 46354321
    }, {
      id: '3.188',
      parent: '2.17',
      name: 'Greece',
      value: 11159773
    }, {
      id: '3.189',
      parent: '2.17',
      name: 'Portugal',
      value: 10329506
    }, {
      id: '3.190',
      parent: '2.17',
      name: 'Serbia',
      value: 8790574
    }, {
      id: '3.191',
      parent: '2.17',
      name: 'Croatia',
      value: 4189353
    }, {
      id: '3.192',
      parent: '2.17',
      name: 'Bosnia and Herzegovina',
      value: 3507017
    }, {
      id: '3.193',
      parent: '2.17',
      name: 'Albania',
      value: 2930187
    }, {
      id: '3.194',
      parent: '2.17',
      name: 'Republic of Macedonia',
      value: 2083160
    }, {
      id: '3.195',
      parent: '2.17',
      name: 'Slovenia',
      value: 2079976
    }, {
      id: '3.196',
      parent: '2.17',
      name: 'Montenegro',
      value: 628960
    }, {
      id: '3.197',
      parent: '2.17',
      name: 'Malta',
      value: 430835
    }, {
      id: '3.198',
      parent: '2.17',
      name: 'Andorra',
      value: 76965
    }, {
      id: '3.199',
      parent: '2.17',
      name: 'Gibraltar',
      value: 34571
    }, {
      id: '3.200',
      parent: '2.17',
      name: 'San Marino',
      value: 33400
    }, {
      id: '3.201',
      parent: '2.17',
      name: 'Vatican City',
      value: 792
    },

    {
      id: '2.18',
      parent: '1.4',
      name: 'Western Europe'
    },

    {
      id: '3.202',
      parent: '2.18',
      name: 'Germany',
      value: 82114224
    }, {
      id: '3.203',
      parent: '2.18',
      name: 'France',
      value: 64979548
    }, {
      id: '3.204',
      parent: '2.18',
      name: 'Netherlands',
      value: 17035938
    }, {
      id: '3.205',
      parent: '2.18',
      name: 'Belgium',
      value: 11429336
    }, {
      id: '3.206',
      parent: '2.18',
      name: 'Austria',
      value: 8735453
    }, {
      id: '3.207',
      parent: '2.18',
      name: 'Switzerland',
      value: 8476005
    }, {
      id: '3.208',
      parent: '2.18',
      name: 'Luxembourg',
      value: 583455
    }, {
      id: '3.209',
      parent: '2.18',
      name: 'Monaco',
      value: 38695
    }, {
      id: '3.210',
      parent: '2.18',
      name: 'Liechtenstein',
      value: 37922
    },
    /***********/

    /* Oceania */
    {
      id: '2.19',
      parent: '1.5',
      name: 'Australia and New Zealand'
    },

    {
      id: '3.211',
      parent: '2.19',
      name: 'Australia',
      value: 24450561
    }, {
      id: '3.212',
      parent: '2.19',
      name: 'New Zealand',
      value: 4705818
    },

    {
      id: '2.20',
      parent: '1.5',
      name: 'Melanesia'
    },

    {
      id: '3.213',
      parent: '2.20',
      name: 'Papua New Guinea'
    }, {
      id: '3.214',
      parent: '2.20',
      name: 'Fiji',
      value: 905502
    }, {
      id: '3.215',
      parent: '2.20',
      name: 'Solomon Islands',
      value: 611343
    }, {
      id: '3.216',
      parent: '2.20',
      name: 'New Caledonia',
      value: 276255
    }, {
      id: '3.217',
      parent: '2.20',
      name: 'Vanuatu',
      value: 276244
    },

    {
      id: '2.21',
      parent: '1.5',
      name: 'Micronesia'
    },

    {
      id: '3.218',
      parent: '2.21',
      name: 'Guam',
      value: 164229
    }, {
      id: '3.219',
      parent: '2.21',
      name: 'Kiribati',
      value: 116398
    }, {
      id: '3.220',
      parent: '2.21',
      name: 'Federated States of Micronesia',
      value: 105544
    }, {
      id: '3.221',
      parent: '2.21',
      name: 'Northern Mariana Islands',
      value: 55144
    }, {
      id: '3.222',
      parent: '2.21',
      name: 'Marshall Islands',
      value: 53127
    }, {
      id: '3.223',
      parent: '2.21',
      name: 'Palau',
      value: 21729
    }, {
      id: '3.224',
      parent: '2.21',
      name: 'Nauru',
      value: 11359
    },

    {
      id: '2.22',
      parent: '1.5',
      name: 'Polynesia'
    },

    {
      id: '3.225',
      parent: '2.22',
      name: 'French Polynesia',
      value: 283007
    }, {
      id: '3.226',
      parent: '2.22',
      name: 'Samoa',
      value: 196440
    }, {
      id: '3.227',
      parent: '2.22',
      name: 'Tonga',
      value: 108020
    }, {
      id: '3.228',
      parent: '2.22',
      name: 'American Samoa',
      value: 55641
    }, {
      id: '3.229',
      parent: '2.22',
      name: 'Cook Islands',
      value: 17380
    }, {
      id: '3.230',
      parent: '2.22',
      name: 'Wallis and Futuna',
      value: 11773
    }, {
      id: '3.231',
      parent: '2.22',
      name: 'Tuvalu',
      value: 11192
    }, {
      id: '3.232',
      parent: '2.22',
      name: 'Niue',
      value: 1618
    }, {
      id: '3.233',
      parent: '2.22',
      name: 'Tokelau',
      value: 1300
    }],
    allowDrillToNode: true,
    cursor: 'pointer',
    dataLabels: {
      format: '{point.name}',
      filter: {
        property: 'innerArcLength',
        operator: '>',
        value: 16
      }
    },
    levels: [{
      level: 1,
      levelIsConstant: false,
      dataLabels: {
        filter: {
          property: 'outerArcLength',
          operator: '>',
          value: 64
        }
      }
    }, {
      level: 2,
      colorByPoint: true
    },
    {
      level: 3,
      colorVariation: {
        key: 'brightness',
        to: -0.5
      }
    }, {
      level: 4,
      colorVariation: {
        key: 'brightness',
        to: 0.5
      }
    }]

  }],
  tooltip: {
    headerFormat: '',
    pointFormat: 'The population of <b>{point.name}</b> is <b>{point.value}</b>'
  }
};

export const highchartsOptions5 = {
  chart: {
    backgroundColor: 'transparent'
  },
  legend: {
    itemStyle: {
      color: 'white'
    }
  },
  title: {
    style: {
      display: 'none'
    }
  },
  tooltip: {
    valueDecimals: 2
  },
  xAxis: {
    type: 'datetime',
    labels: {
      style: {
        color: 'white'
      }
    }
  },
  yAxis: {
    labels: {
      style: {
        color: 'white'
      }
    }
  },
  series: [{
    data: getData(100),
    lineWidth: 2,
    name: 'Hourly data points'
  }]
};

export const highchartsOptions6 = {
  chart: {
    type: 'bar',
    backgroundColor: 'transparent'
  },
  legend: {
    itemStyle: {
      color: 'white'
    }
  },
  title: {
    style: {
      display: 'none'
    }
  },
  accessibility: {
    point: {
      descriptionFormatter: function (point) {
        var index = point.index + 1,
          category = point.category,
          val = Math.abs(point.y),
          series = point.series.name;

        return index + ', Age ' + category + ', ' + val + '%. ' + series + '.';
      }
    }
  },
  xAxis: [{
    categories: [
      '0-4', '5-9', '10-14', '15-19',
      '20-24', '25-29', '30-34', '35-39', '40-44',
      '45-49', '50-54', '55-59', '60-64', '65-69',
      '70-74', '75-79', '80-84', '85-89', '90-94',
      '95-99', '100 + '
    ],
    reversed: false,
    labels: {
      step: 1,
      style: {
        color: 'white'
      }
    },
    accessibility: {
      description: 'Age (male)'
    }
  }, { // mirror axis on right side
    opposite: true,
    reversed: false,
    categories: [
      '0-4', '5-9', '10-14', '15-19',
      '20-24', '25-29', '30-34', '35-39', '40-44',
      '45-49', '50-54', '55-59', '60-64', '65-69',
      '70-74', '75-79', '80-84', '85-89', '90-94',
      '95-99', '100 + '
    ],
    linkedTo: 0,
    labels: {
      step: 1,
      style: {
        color: 'white'
      }
    },
    accessibility: {
      description: 'Age (female)'
    }
  }],
  yAxis: {
    title: {
      text: null
    },
    labels: {
      formatter: function () {
        return Math.abs(this.value) + '%';
      },
      style: {
        color: 'white'
      }
    },
    accessibility: {
      description: 'Percentage population',
      rangeDescription: 'Range: 0 to 5%'
    }
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Male',
    data: [
      -2.2, -2.1, -2.2, -2.4,
      -2.7, -3.0, -3.3, -3.2,
      -2.9, -3.5, -4.4, -4.1,
      -3.4, -2.7, -2.3, -2.2,
      -1.6, -0.6, -0.3, -0.0,
      -0.0
    ]
  }, {
    name: 'Female',
    data: [
      2.1, 2.0, 2.1, 2.3, 2.6,
      2.9, 3.2, 3.1, 2.9, 3.4,
      4.3, 4.0, 3.5, 2.9, 2.5,
      2.7, 2.2, 1.1, 0.6, 0.2,
      0.0
    ]
  }]
};

function getData(n) {
  let arr = [],
    i,
    x,
    a,
    b,
    c,
    spike;
  for (
    i = 0, x = Date.UTC(new Date().getUTCFullYear(), 0, 1) - n * 36e5;
    i < n;
    i = i + 1, x = x + 36e5
  ) {
    if (i % 100 === 0) {
      a = 2 * Math.random();
    }
    if (i % 1000 === 0) {
      b = 2 * Math.random();
    }
    if (i % 10000 === 0) {
      c = 2 * Math.random();
    }
    if (i % 50000 === 0) {
      spike = 10;
    } else {
      spike = 0;
    }
    arr.push([
      x,
      2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
    ]);
  }
  return arr;
}
