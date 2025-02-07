import { Component, Input } from '@angular/core';
import { Equipo } from '../../interfaces/equipo.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-equipo-list',
  standalone: true,
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css'],
  imports: [NgFor]
})
export class EquipoListComponent {
  @Input() equipos: Equipo[] = [];
}