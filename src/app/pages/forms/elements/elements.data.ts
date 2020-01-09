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

export const simpleOptions: NgOption[] = [
  { index: 0, label: 'Option One' },
  { index: 1, label: 'Options Two' },
  { index: 2, label: 'Option Three' }
];

export const fromOneToThree: NgOption[] = [
  { index: 0, label: 'Ichi' },
  { index: 1, label: 'Ni' },
  { index: 2, label: 'San' }
];

export const fromFourToSix: NgOption[] = [
  { index: 3, label: 'Shi' },
  { index: 4, label: 'Go' },
  { index: 5, label: 'Roku' }
];

export const fromSevenToTen: NgOption[] = [
  { index: 6, label: 'Hichi' },
  { index: 7, label: 'Hachi' },
  { index: 8, label: 'Ku' },
  { index: 9, label: 'Ju' }
];
