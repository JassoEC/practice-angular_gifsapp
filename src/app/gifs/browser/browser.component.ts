import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styles: [],
})
export class BrowserComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search = (value: string) => {
    if (value.trim().length === 0) {
      return;
    }
    
    this.gifsService.findGifs(this.txtSearch.nativeElement.value);
    this.txtSearch.nativeElement.value = '';
  };
}
