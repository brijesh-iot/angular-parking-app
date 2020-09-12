import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicealertsComponent } from './devicealerts.component';

describe('DevicealertsComponent', () => {
  let component: DevicealertsComponent;
  let fixture: ComponentFixture<DevicealertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicealertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicealertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
