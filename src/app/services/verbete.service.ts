import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VerbeteService {

  private API_URL = enviroment.API_URL;

  constructor(private httpClient: HttpClient) { }
}
