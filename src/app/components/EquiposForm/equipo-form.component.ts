import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Equipo } from '../../interfaces/equipo.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css']
})
export class EquipoFormComponent {
  @Input() tipo: 'add' | 'update' | 'delete' = 'add';
  @Input() equipo: Equipo | null = null;
  @Output() save = new EventEmitter<Equipo>();
  @Output() close = new EventEmitter<void>();

  onSubmit(): void {
    if (this.equipo) {
      this.save.emit(this.equipo);
    }
  }

  closeModal(): void {
    this.close.emit();
  }
}