import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormField {
  id: string;
  label: string;
  type: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() fields: FormField[] = [];
  
  // Estado para gerenciar os dados do formulário
  formData: { [key: string]: any } = {};
  
  // Estado para controlar a exibição das mensagens de sucesso e erro
  showSuccessMessage = false;
  showErrorMessage = false;

  // Método de envio do formulário
  onSubmit(): void {
    // Verificar se todos os campos estão preenchidos
    const allFieldsFilled = this.fields.every(field => this.formData[field.id]);

    if (allFieldsFilled) {
      // Se todos os campos estiverem preenchidos: 
      //Exibir a mensagem de sucesso
      this.showSuccessMessage = true;
      this.showErrorMessage = false;

      // Limpar os valores dos inputs
      this.formData = {};

      // Ocultar a mensagem após 3 segundos
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    } else {
      // Exibir a mensagem de erro
      this.showErrorMessage = true;

      // Ocultar a mensagem de erro após 3 segundos
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 3000);
    }
  }
}
