import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Options } from 'sortablejs';

interface ListItem {
  id: number;
  name: string;
  list: ListItem[];
}

@Component({
  selector: '[ui-list-groups]',
  templateUrl: './list-groups.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./list-groups.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListGroupsComponent {
  public itemsOptions: Options = {
    animation: 150,
    ghostClass: 'list-group-item-placeholder'
  };

  public items: Array<{ id: number, index: string, name: string }> = [
    { id: 3, index: '03', name: 'Barnard\'s Star' },
    { id: 1, index: '01', name: 'The Sun' },
    { id: 4, index: '04', name: 'Wolf 359' },
    { id: 2, index: '02', name: 'Proxima Centauri' },
    { id: 5, index: '05', name: 'Lalande 21185' }
  ];

  public sharedListOptions: Options = {
    group: 'shared',
    animation: 150,
    fallbackOnBody: true,
    invertSwap: true
  };

  public sharedList1: ListItem[] = [
    { id: 1, name: 'Item 1', list: [] },
    {
      id: 2, name: 'Item 2', list: [
        { id: 3, name: 'Item 3', list: [] },
        { id: 4, name: 'Item 4', list: [] },
        {
          id: 5, name: 'Item 5', list: [
            { id: 6, name: 'Item 6', list: [] },
            { id: 7, name: 'Item 7', list: [] },
            { id: 8, name: 'Item 8', list: [] }
          ]
        },
        { id: 9, name: 'Item 9', list: [] }
      ]
    }
  ];

  public sharedList2: ListItem[] = [
    { id: 13, name: 'Item 13', list: [] },
    { id: 14, name: 'Item 14', list: [] },
    {
      id: 15, name: 'Item 15', list: [
        { id: 16, name: 'Item 16', list: [] },
        { id: 17, name: 'Item 17', list: [] },
        { id: 18, name: 'Item 18', list: [] }
      ]
    }
  ];
}
