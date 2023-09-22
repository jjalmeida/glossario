import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment';
import { VerbeteResponseDTO } from '../models/interfaces/response/VerbeteResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class VerbeteService {

  private API_URL = enviroment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getAllVerbetes(): Observable<Array<VerbeteResponseDTO>>{
    return this.httpClient.get<Array<VerbeteResponseDTO>>(
      `${this.API_URL}`
    );
  }
}
