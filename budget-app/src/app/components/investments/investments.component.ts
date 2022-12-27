import { Component } from '@angular/core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent {

  showChart: boolean = true;
  showTable: boolean = false;

  changeShow() {
    this.showChart = !this.showChart;
  }


  
}
