import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  payload: Array<any> = [];
  getEmitPayload(payload:Array<any>){this.payload = payload;}

}
