import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegranteComponent } from './integrante.component';

describe('IntegranteComponent', () => {
  let component: IntegranteComponent;
  let fixture: ComponentFixture<IntegranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegranteComponent]
    });
    fixture = TestBed.createComponent(IntegranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
