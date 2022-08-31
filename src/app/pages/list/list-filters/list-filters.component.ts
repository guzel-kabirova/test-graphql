import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-filters',
  templateUrl: './list-filters.component.html',
  styleUrls: ['./list-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListFiltersComponent {
  @Input()
  public formats: string[] = [];

  @Input()
  public genres: string[] = [];

  constructor() { }
}
