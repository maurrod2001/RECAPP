import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parrafo1Component } from './parrafo1.component';

describe('Parrafo1Component', () => {
  let component: Parrafo1Component;
  let fixture: ComponentFixture<Parrafo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parrafo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parrafo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
