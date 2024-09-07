import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa as ferramentas de teste do Angular
import { FormsModule } from '@angular/forms'; // Importa o FormsModule para suporte ao ngModel
import { By } from '@angular/platform-browser'; // Importa By para consultar elementos no DOM
import { FormComponent } from './form.component'; // Importa o componente que será testado

describe('FormComponent', () => {
  let component: FormComponent; // Declaração da variável do componente
  let fixture: ComponentFixture<FormComponent>; // Declaração do fixture, que representa o ambiente de teste do componente

  // Configuração inicial que é executada antes de cada teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent, FormsModule], // Configura o módulo de teste, incluindo o componente e o FormsModule necessário para ngModel
    }).compileComponents(); // Compila os componentes do módulo

    fixture = TestBed.createComponent(FormComponent); // Cria uma instância do componente para teste
    component = fixture.componentInstance; // Obtém a instância do componente
    fixture.detectChanges(); // Detecta mudanças iniciais para renderizar o template
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Teste básico para verificar se o componente foi criado corretamente
  });

  it('should display success message when all fields are filled', () => {
    // Configura campos de entrada com IDs e tipos
    component.fields = [
      { id: 'name', label: 'Name', type: 'text' },
      { id: 'email', label: 'Email', type: 'email' }
    ];
    component.formData = {
      name: 'Camilla Avila', // Preenche o campo 'name'
      email: 'camilla.avila@catto.com' // Preenche o campo 'email'
    };

    fixture.detectChanges(); // Atualiza o DOM com os novos valores

    // Simula o envio do formulário chamando o método onSubmit()
    component.onSubmit();

    fixture.detectChanges(); // Atualiza o DOM após a submissão

    // Busca o elemento da mensagem de sucesso no DOM
    const successMessage = fixture.debugElement.query(By.css('.form-message-success'));
    expect(successMessage).toBeTruthy(); // Verifica se a mensagem de sucesso está presente no DOM
    expect(successMessage.nativeElement.textContent).toContain('Cadastro enviado com sucesso!'); // Verifica o texto da mensagem de sucesso

    // Verifica que a mensagem de erro não está presente
    const errorMessage = fixture.debugElement.query(By.css('.form-message-error hidden-message'));
    expect(errorMessage).toBeFalsy(); // Espera que a mensagem de erro não apareça
  });

  it('should display error message when any field is empty', () => {
    // Configura campos de entrada com IDs e tipos
    component.fields = [
      { id: 'name', label: 'Name', type: 'text' },
      { id: 'email', label: 'Email', type: 'email' }
    ];
    component.formData = {
      name: '', // Campo 'name' vazio
      email: 'camilla.avila@catto.com' // Preenche o campo 'email'
    };

    fixture.detectChanges(); // Atualiza o DOM com os novos valores

    // Simula o envio do formulário chamando o método onSubmit()
    component.onSubmit();

    fixture.detectChanges(); // Atualiza o DOM após a submissão

    // Busca o elemento da mensagem de erro no DOM
    const errorMessage = fixture.debugElement.query(By.css('.form-message-error'));
    expect(errorMessage).toBeTruthy(); // Verifica se a mensagem de erro está presente no DOM
    expect(errorMessage.nativeElement.textContent).toContain('Preencha todos os campos!'); // Verifica o texto da mensagem de erro

    // Verifica que a mensagem de sucesso não está presente
    const successMessage = fixture.debugElement.query(By.css('.form-message-success hidden-message'));
    expect(successMessage).toBeFalsy(); // Espera que a mensagem de sucesso não apareça
  });

  it('should clear input fields after successful submission', () => {
    // Configura campos de entrada com IDs e tipos
    component.fields = [
      { id: 'name', label: 'Name', type: 'text' },
      { id: 'email', label: 'Email', type: 'email' }
    ];
    component.formData = {
      name: 'Camilla Avila', // Preenche o campo 'name'
      email: 'camilla.avila@catto.com' // Preenche o campo 'email'
    };

    fixture.detectChanges(); // Atualiza o DOM com os novos valores

    // Simula o envio do formulário chamando o método onSubmit()
    component.onSubmit();

    fixture.detectChanges(); // Atualiza o DOM após a submissão

    // Verifica se o formData foi limpo corretamente
    expect(component.formData).toEqual({}); // Espera que o formData esteja vazio após o envio
  });
});

// describe('', () => {

// });
