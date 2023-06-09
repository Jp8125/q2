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
  basic:number=300;
  tax:number=0;
  constructor(private servdata:ApidataService){
    this.servdata.getData().subscribe(obj=>{
      this.datamv = obj as Movies
      console.log(this.datamv);
    })
    
  }
  cellValue(start:number,end:number){
    for (let i = start; i <= end; i++) {
        if(this.cellarr.findIndex(obj=>obj.id==i)==-1)
        this.cellarr.push({id: i,selected:false})
    }
    
  }

  change(value:number,row:number){
    this.cellobj=this.cellarr.find(obj=>obj.id==value) as Cell
    this.cellarr[value-1].selected=true;
    
    if(row>3)
    {
      console.log(this.basic);
      
      this.basic=this.datamv.BasicPrice+(50*(row-3));
      this.booked++;
      console.log(this.basic);

      this.amount+=this.basic;
      this.tax=this.basic*0.20*this.booked
    }
    else
    {
      this.basic=this.datamv.BasicPrice
      this.booked++;
      console.log(this.basic);

      this.amount+=this.basic;
      this.tax=this.basic*0.20*this.booked
    }
    
  }
}
