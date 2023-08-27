import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagDeviceComponent } from './flag-device.component';

describe('FlagDeviceComponent', () => {
  let component: FlagDeviceComponent;
  let fixture: ComponentFixture<FlagDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlagDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
