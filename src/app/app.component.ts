import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";

interface FormField {
  id: string;
  label: string;
  type: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formFields: FormField[] = [
    { id: 'name', label: 'Nome:', type: 'text' },
    { id: 'email', label: 'E-mail:', type: 'email' },
    { id: 'dob', label: 'Data de nascimento:', type: 'date' }
  ];
}
