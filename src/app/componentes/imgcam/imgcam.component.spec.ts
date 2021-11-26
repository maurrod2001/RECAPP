import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcamComponent } from './imgcam.component';

describe('ImgcamComponent', () => {
  let component: ImgcamComponent;
  let fixture: ComponentFixture<ImgcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
