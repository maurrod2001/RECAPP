import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapandvideoComponent } from './mapandvideo.component';

describe('MapandvideoComponent', () => {
  let component: MapandvideoComponent;
  let fixture: ComponentFixture<MapandvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapandvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapandvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
