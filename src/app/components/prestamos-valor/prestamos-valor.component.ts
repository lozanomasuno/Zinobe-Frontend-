import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamos-valor',
  templateUrl: './prestamos-valor.component.html',
  styleUrls: ['./prestamos-valor.component.css']
})
export class PrestamosValorComponent implements OnInit {
 @Input() public valueRangeLoan:number = 10000;
  constructor() { }

  formatLabel(valueLoan: number) {
    if (valueLoan >= 100) {
      return Math.round(valueLoan / 1000) + 'k';
    }    
    return valueLoan;
  }

  priceFormatValueRange(formatedNumber: number){   
    return new Intl.NumberFormat().format(formatedNumber);
  }
  ngOnInit(): void {
    
  }
  
}
