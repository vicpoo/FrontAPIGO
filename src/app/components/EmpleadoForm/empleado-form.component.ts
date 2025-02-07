import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-empleado-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
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