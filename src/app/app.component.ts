import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ssnInputValidator } from './ssnInputValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public maxSSNInput = 11;
  public showSSN = false;
  public ssnSample = new FormGroup({
    ssn: new FormControl('', [ssnInputValidator])
  })

  public inputSSN(): void {
    this.ssn?.setValue(this.getSSNValidFormat(this.ssn.value))
  }

  public get ssn(): AbstractControl | null {
    return this.ssnSample.get('ssn');
  }

  private getSSNValidFormat(ssn: string): string| null {
    if (ssn === null || ssn === undefined) { return null; }
    
    const pattern = /\d{3}-\d{2}-\d{4}/g;
    let formattedSSN = ssn as any;
    const result = pattern.test(formattedSSN);
    if (!result) {
      formattedSSN = formattedSSN.match(/\d*/g).join('')
      .match(/(\d{0,3})(\d{0,2})(\d{0,4})/).slice(1).join('-')
      .replace(/-*$/g, '');
    }
    
    return formattedSSN;
  }

  public toggleSSNValue() : void {
    this.showSSN = !this.showSSN;
  }

  public getSSNType(): string {
    return this.showSSN ? 'text' : 'password';
  }

  constructor() { }
}
