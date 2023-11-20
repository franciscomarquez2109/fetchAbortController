import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ResponseMod } from 'src/app/services/class/response';
import { MainServicesService } from 'src/app/services/main-services.service';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss']
})
export class SeekerComponent implements OnInit{
  data: Array<any> = [];
  valueText: string = '';
  @Output() payload = new EventEmitter<any[]>();
  constructor(
    private serv: MainServicesService
  ){}
  async ngOnInit() {}

  async search(){
    await this.serv.getApiList(this.valueText)
    .then((resp:ResponseMod)=>{
      if (resp.success) {
        this.data = resp.payload.results;
        this.payload.emit(this.data)
      }
    })
    .catch((err:ResponseMod)=>{
      this.payload.emit([])
      console.error(err.msg);
    })

  }
}
