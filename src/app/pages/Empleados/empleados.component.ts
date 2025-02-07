import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../interfaces/empleado.interface';
import { EmpleadoListComponent } from '../../components/EmpleadoList/empleado-list.component'; 
import { EmpleadoFormComponent } from '../../components/EmpleadoForm/empleado-form.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [EmpleadoListComponent, EmpleadoFormComponent, CommonModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];
  isModalVisible: boolean = false;
  modalType: 'add' | 'update' | 'delete' = 'add';
  selectedEmpleado: Empleado | null = null;

  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmpleados();
  }

  loadEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (data) => {
        console.log("Empleados obtenidos:", data);
        this.empleados = data;
      },
      error: (err) => {
        console.error("Error al obtener empleados:", err);
      }
    });
  }

  navigateToMenu(): void {
    this.router.navigate(['/menu']);
  }

  openModal(type: 'add' | 'update' | 'delete'): void {
    this.modalType = type;
    this.isModalVisible = true;

    if (type === 'update' || type === 'delete') {
      const id = prompt('Ingrese el ID del empleado:');
      if (id) {
        this.empleadoService.getEmpleadoById(+id).subscribe(empleado => {
          this.selectedEmpleado = empleado;
        });
      }
    } else {
      this.selectedEmpleado = null;
    }
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  handleSave(empleado: Empleado): void {
    if (this.modalType === 'add') {
      this.empleadoService.createEmpleado(empleado).subscribe(() => this.loadEmpleados());
    } else if (this.modalType === 'update' && empleado.id) {
      this.empleadoService.updateEmpleado(empleado.id, empleado).subscribe(() => this.loadEmpleados());
    } else if (this.modalType === 'delete' && empleado.id) {
      this.empleadoService.deleteEmpleado(empleado.id).subscribe(() => this.loadEmpleados());
    }

    this.closeModal();
  }
}