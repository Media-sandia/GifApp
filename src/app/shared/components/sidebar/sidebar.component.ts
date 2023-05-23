import { Onclick } from './../../../gifs/interfaces/gifs.interfaces';
import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService : GifsService){} 

  
 get tags(){
    return this.gifsService.tagHistory;
 } 

 searchGif(gif : string):void{
  //console.log(gif);
  this.gifsService.serchTang(gif);
 }
}
