import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { Equipo } from '../../interfaces/equipo.interface';
import { EquipoListComponent } from '../../components/EquiposList/equipo-list.component';
import { EquipoFormComponent } from '../../components/EquiposForm/equipo-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [EquipoListComponent, EquipoFormComponent, CommonModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipos: Equipo[] = [];
  isModalVisible: boolean = false;
  modalType: 'add' | 'update' | 'delete' = 'add';
  selectedEquipo: Equipo | null = null;

  constructor(private equipoService: EquipoService, private router: Router) {}

  ngOnInit(): void {
    this.loadEquipos();
  }

  loadEquipos(): void {
    this.equipoService.getEquipos().subscribe({
      next: (data) => {
        this.equipos = data;
      },
      error: (err) => {
        console.error("Error al obtener equipos:", err);
      }
    });
  }

  // Método para navegar al menú
  navigateToMenu(): void {
    this.router.navigate(['/menu']);
  }

  openModal(type: 'add' | 'update' | 'delete', id?: number): void {
    this.modalType = type;
    this.isModalVisible = true;

    if (type === 'update' || type === 'delete') {
      if (id) {
        this.equipoService.getEquipoById(id).subscribe(equipo => {
          this.selectedEquipo = equipo;
        });
      }
    } else {
      this.selectedEquipo = null;
    }
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  handleSave(equipo: Equipo): void {
    if (this.modalType === 'add') {
      this.equipoService.createEquipo(equipo).subscribe(() => this.loadEquipos());
    } else if (this.modalType === 'update' && equipo.id) {
      this.equipoService.updateEquipo(equipo.id, equipo).subscribe(() => this.loadEquipos());
    } else if (this.modalType === 'delete' && equipo.id) {
      this.equipoService.deleteEquipo(equipo.id).subscribe(() => this.loadEquipos());
    }

    this.closeModal();
  }
}