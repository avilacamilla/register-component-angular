import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FormField {
  id: string;
  label: string;
  type: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() fields: FormField[] = [];
}
