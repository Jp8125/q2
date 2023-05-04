import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { Cell, Movies } from './mv';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent {
  datamv:Movies={} as Movies
  cellarr:Array<Cell>=[]
  cellobj:Cell={} as Cell
  booked:number=0;
  amount:number=0
  tax:number;
  constructor(private servdata:ApidataService){
    this.servdata.getData().subscribe(obj=>{
      this.datamv = obj as Movies
      console.log(this.datamv);
    })
    this.tax=this.datamv.BasicPrice*0.20;
  }
  cellValue(start:number,end:number){
    for (let i = start; i <= end; i++) {
        if(this.cellarr.findIndex(obj=>obj.id==i)==-1)
        this.cellarr.push({id: i,selected:false})
    }
    
  }

  change(value:number){
    this.cellobj=this.cellarr.find(obj=>obj.id==value) as Cell
    this.cellarr[value-1].selected=true;
    console.log(value);
    this.booked++;
    this.amount=this.datamv.BasicPrice*this.booked;
    this.tax=this.tax*this.booked;

  }
}
