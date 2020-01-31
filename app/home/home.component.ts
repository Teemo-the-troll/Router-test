import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = 'my-calc';
  private vysledek = 0;
  private priklad = [];
  private prikladFake = '';
  private operators = [];
  private mezipamet = '';
  private vysledekFake = '';

  
  addNumberToMezipamet(x) {
    this.vysledekFake = '';
    console.log('pridavam cislo: ' + x)
    this.prikladFake += (x);
    this.mezipamet += (x);
    console.log('mezipamet po pridavku: ' + this.mezipamet)
  }

  flushMezipamet() {
    console.log('mezipamet flush: ' + this.mezipamet)
    this.priklad.push(parseInt(this.mezipamet));
    this.mezipamet = '';
  }

  addOperator(x) {
    this.prikladFake += (x);
    this.flushMezipamet();
    this.operators.push(x);
  }
  flushPriklad(){
    this.prikladFake = '';
    this.priklad = [];
  }

  getInt() {
    this.flushMezipamet();
    console.log('toto je priklad na vypocet: ' + this.priklad);
    console.log('toto je vysledek: ');
    console.log('delka pole prikladu: ' + this.priklad.length)
  this.vysledek = this.priklad[0];
    for (let i = 0; i < this.priklad.length; i++) {
      switch (this.operators[i]) {
        case '+':
          this.vysledek += this.priklad[i+1];
          break;

        case '-':
          this.vysledek -= this.priklad[i+1];
          break;
        
        case '*':
          this.vysledek *= this.priklad[i+1];
          break;
        
        case '/':      
          this.vysledek /= this.priklad[i+1];
          break;
        case '':
          this.vysledek = this.priklad[0];
          break
      }
      console.log(this.vysledek);
     this.vysledekFake = this.vysledek.toString();
     this.flushPriklad();
     
    }
  }


  ngOnInit() {
  }

}
