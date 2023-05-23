import { Component, ElementRef, ViewChild,  } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
    selector: 'gif-search-box',
    template: `
        <h5>Buscar</h5>
        <input type="text" class="form-control" placeholder="Buscar Gifs..." (keyup.enter)="searchTang()" #textTagInput>
    `
})

export class SearchBoxComponent {
    constructor( private gifsService : GifsService) { }

    @ViewChild('textTagInput')
   public tagInput!: ElementRef<HTMLInputElement>

    searchTang():void{
        const newTang = this.tagInput.nativeElement.value;
        this.gifsService.serchTang(newTang);

        this.tagInput.nativeElement.value = '';
        
    }
  
}