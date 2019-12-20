import { NgOption } from '@ng-select/ng-select';

export const defaultData: NgOption[] = [
  {
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
  }
];

export const groupedData: NgOption[] = [
  { label: 'Dallas Cowboys', group: 'NFC EAST' },
  { label: 'New York Giants', group: 'NFC EAST' },
  { label: 'Philadelphia Eagles', group: 'NFC EAST' },
  { label: 'Washington Redskins', group: 'NFC EAST' },
  { label: 'Chicago Bears', group: 'NFC NORTH' },
  { label: 'Detroit Lions', group: 'NFC NORTH' },
  { label: 'Green Bay Packers', group: 'NFC NORTH' },
  { label: 'Minnesota Vikings', group: 'NFC NORTH' },
  { label: 'Atlanta Falcons', group: 'NFC SOUTH' },
  { label: 'Carolina Panthers', group: 'NFC SOUTH' },
  { label: 'New Orleans Saints', group: 'NFC SOUTH' },
  { label: 'Tampa Bay Buccaneers', group: 'NFC SOUTH' },
];
