import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../interfaces/equipo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  standalone: true,
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  imports: [NgFor] // Agregar NgFor aquí
})
export class EquiposComponent implements OnInit {
  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {
    this.loadEquipos();
  }

  loadEquipos(): void {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data;
    });
  }

  deleteEquipo(id: number): void {
    this.equipoService.deleteEquipo(id).subscribe(() => {
      this.loadEquipos();
    });
  }

  navigateToAdd(): void {
    this.router.navigate(['/equipos/add']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate([`/equipos/edit/${id}`]);
  }
}
