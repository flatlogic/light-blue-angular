import { Select2OptionData } from 'ng2-select2/ng2-select2';

export const select2DefaultData: Select2OptionData[] = [{
  id: 'Magellanic',
  text: 'Large Magellanic Cloud'
},
  {
    id: 'Andromeda',
    text: 'Andromeda Galaxy'
  },
  {
    id: 'Sextans',
    text: 'Sextans A'
  }];


export const select2GroupedData: Select2OptionData[] = [{
  id: '1',
  text: 'NFC EAST',
  children: [
    {
      id: '11',
      text: 'Dallas Cowboys'
    },
    {
      id: '12',
      text: 'New York Giants'
    },
    {
      id: '13',
      text: 'Philadelphia Eagles'
    },
    {
      id: '14',
      text: 'Washington Redskins'
    }
  ]
}, {
  id: '2',
  text: 'NFC NORTH',
  children: [
    {
      id: '21',
      text: 'Chicago Bears'
    },
    {
      id: '22',
      text: 'Detroit Lions'
    },
    {
      id: '23',
      text: 'Green Bay Packers'
    },
    {
      id: '24',
      text: 'Minnesota Vikings'
    }
  ]
}, {
  id: '3',
  text: 'NFC SOUTH',
  children: [
    {
      id: '31',
      text: 'Atlanta Falcons'
    },
    {
      id: '32',
      text: 'Carolina Panthers'
    },
    {
      id: '33',
      text: 'New Orleans Saints'
    },
    {
      id: '34',
      text: 'Tampa Bay Buccaneers'
    }
  ]
}];
