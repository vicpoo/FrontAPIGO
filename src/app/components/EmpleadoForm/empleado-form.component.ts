import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { CommonModule } from '@angular/common'; // Importar CommonModule para *ngIf

@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agregar FormsModule y CommonModule
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent {
  @Input() tipo: 'add' | 'update' | 'delete' = 'add';
  @Input() empleado: Empleado | null = null;
  @Output() save = new EventEmitter<Empleado>();
  @Output() close = new EventEmitter<void>();

  onSubmit(): void {
    if (this.empleado) {
      this.save.emit(this.empleado);
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}
