import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prestamos-valor',
  templateUrl: './prestamos-valor.component.html',
  styleUrls: ['./prestamos-valor.component.css']
})
export class PrestamosValorComponent implements OnInit {
 @Input() public valueRangeLoan:number = 10000;
 @Output() public setValueLoan = new EventEmitter<number>();
 
  constructor() { }

  priceFormatValueRange(formatedNumber: number){ 
    console.log(this.valueRangeLoan);  
    return new Intl.NumberFormat().format(formatedNumber);
  }
  
  formatLabel(valueLoan: number) {    
      return Math.round(valueLoan / 1000) + 'k';
  }

  //be carefully  
  emitValueTomainComponent(){
    this.setValueLoan.emit(this.valueRangeLoan);
  }

  ngOnInit(): void {   
  }
  
}
