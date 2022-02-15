import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestamos-valor',
  templateUrl: './prestamos-valor.component.html',
  styleUrls: ['./prestamos-valor.component.css']
})
export class PrestamosValorComponent implements OnInit {
 @Input() public valueRange:number = 10000;
  constructor() { }
  
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 1000) + 'k';
    }    
    return value;
  }

  priceFormatValueRange(formatedNumber: number){    
    console.log(new Intl.NumberFormat().format(formatedNumber));
    return new Intl.NumberFormat().format(formatedNumber);
  }
  
  ngOnInit(): void {
    this.priceFormatValueRange(this.valueRange);
  }
  
}
