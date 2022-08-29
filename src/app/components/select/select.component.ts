import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() items: string[] = [];
  @Input() label = '';
  @Input() placeholder = '';

  public isOpen = false;
  private _selectedItems: string[] = [];

  get selectedCount(): number {
    return this._selectedItems.length;
  }

  constructor() { }

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
