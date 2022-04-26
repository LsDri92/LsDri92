import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLabComponent } from './experiencia-lab.component';

describe('ExperienciaLabComponent', () => {
  let component: ExperienciaLabComponent;
  let fixture: ComponentFixture<ExperienciaLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
