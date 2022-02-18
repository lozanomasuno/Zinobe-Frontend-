import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-capital',
  templateUrl: './base-capital.component.html',
  styleUrls: ['./base-capital.component.css']
})
export class BaseCapitalComponent implements OnInit {
  public maxBaseCapital = 0;
  public lessTotalLoan = 270000;
  baseCapitalFormat(formatedNumber: number) {
    return new Intl.NumberFormat().format(formatedNumber);
  }

  constructor() { }

  ngOnInit(): void {
    this.maxBaseCapital = 1000000;
  }

}
