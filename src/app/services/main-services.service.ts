import { Injectable } from '@angular/core';
import { ResponseMod } from './class/response';
@Injectable({
  providedIn: 'root'
})
export class MainServicesService {
  private abortController: AbortController | null = null;
  constructor(
  ) { }

  async getApiList(TextValue:string):Promise<any>{
    try {

      this.cancelPreviousRequest();

      this.abortController = new AbortController();
      const signal = this.abortController.signal;

      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${TextValue}`, {
        method: 'GET',
        signal
      });
      if (response.status == 200) {
        const resp = await response.json();
        return new ResponseMod(true,'',resp);
      }
      if (response.status == 404) { throw new ResponseMod(false,'No se encontraron datos',null)};
    } catch (err) {
      throw err;
    }
  }
  cancelPreviousRequest() {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }
}
