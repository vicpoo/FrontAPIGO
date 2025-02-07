import { Component, Input } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-empleado-list',
  standalone: true,
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css'],
  imports: [NgFor]
})
export class EmpleadoListComponent {
  @Input() empleados: Empleado[] = [];
}