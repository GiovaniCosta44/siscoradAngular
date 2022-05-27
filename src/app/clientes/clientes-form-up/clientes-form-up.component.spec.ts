import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFormUpComponent } from './clientes-form-up.component';

describe('ClientesFormUpComponent', () => {
  let component: ClientesFormUpComponent;
  let fixture: ComponentFixture<ClientesFormUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesFormUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesFormUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
