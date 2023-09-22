import { Component, Input } from '@angular/core';
import { VerbeteResponseDTO } from 'src/app/models/interfaces/response/VerbeteResponseDTO';

@Component({
  selector: 'app-verbete-table',
  templateUrl: './verbete-table.component.html',
  styleUrls: []
})
export class VerbeteTableComponent {
  @Input() verbetes: Array<VerbeteResponseDTO> = [];
}
