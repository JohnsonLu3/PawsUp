import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiKeyService {

  public apiKey = "";

  constructor(private service: ApiKeyService) { }

  getKey(){
    return this.apiKey;
  }
  
}
