import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mic-otp',
  templateUrl:  './mic-otp.component.html',
  styleUrls: [
    './mic-otp.component.css'
  ]
})
export class MicOtpComponent {
  

  private _data = {
    lblTitle: 'stencil-angularapp-demo',
    lblResend: 'Didn\'t receive code?',
    btnResend: 'Request again',
    btnVerify: 'Verify'

  };

  @Input()
  public set data (data:any){
    this._data = data;
  }

  public get data (){
    return this._data;
  }
  

  

  otp: string = '';
  otpDigits: string[] = ['', '', '', '', '', ''];
  @ViewChild('digit1') digit1!: ElementRef;
  @ViewChild('digit2') digit2!: ElementRef;
  @ViewChild('digit3') digit3!: ElementRef;
  @ViewChild('digit4') digit4!: ElementRef;
  @ViewChild('digit5') digit5!: ElementRef;
  @ViewChild('digit6') digit6!: ElementRef;




  get isInputComplete(): boolean {
    return this.otpDigits.every(digit => digit !== '');
  }

  onInput(event: any, index: number) {
    const value = event.target.value;
    if (value.length === 1) {
      this.otpDigits[index - 1] = value;
      this.setFocus(index);
    } else if (value.length === 0) {
      this.otpDigits[index - 1] = '';
      this.setFocus(index - 1);
    }
  }

  setFocus(index: number) {
    switch (index) {
      case 1:
        this.digit2.nativeElement.focus();
        break;
      case 2:
        this.digit3.nativeElement.focus();
        break;
      case 3:
        this.digit4.nativeElement.focus();
        break;
      case 4:
        this.digit5.nativeElement.focus();
        break;
      case 5:
        this.digit6.nativeElement.focus();
        break;
      case 6:
        this.digit6.nativeElement.blur();
        break;
      default:
        this.digit1.nativeElement.focus();
    }
  }

  
  @Output() verifyOTPEvent = new EventEmitter<string>();

  verifyOTP() {
    const otp = this.otpDigits.join('');
    console.log('Submitted OTP:', otp);

    // Perform your OTP validation logic here
    if (otp === '123456') {
      console.log('OTP is valid.');
    } else {
      console.log('Invalid OTP.');
    }
    this.verifyOTPEvent.emit(otp);
  }


}
