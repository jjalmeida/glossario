import { MessageService } from 'primeng/api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { VerbeteService } from 'src/app/services/verbete.service';
import { Subject, takeUntil } from 'rxjs';
import { VerbeteResponseDTO } from 'src/app/models/interfaces/response/VerbeteResponseDTO';

@Component({
  selector: 'app-glossario-home',
  templateUrl: './glossario-home.component.html',
  styleUrls: []
})
export class GlossarioHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  public verbetesDatas: Array<VerbeteResponseDTO> = [];

  constructor(
    private verbeteService: VerbeteService,
    private messageService: MessageService){}

  ngOnInit(): void {
    this.getServiceVerbetesDatas();
  }

  getServiceVerbetesDatas() {
    this.verbeteService
      .getAllVerbetes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.length > 0){
            this.verbetesDatas = response;
          }
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar lista de verbetes',
            life: 2500
          })
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
