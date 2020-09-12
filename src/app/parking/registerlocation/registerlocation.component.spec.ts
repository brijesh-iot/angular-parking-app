import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterlocationComponent } from './registerlocation.component';

describe('RegisterlocationComponent', () => {
  let component: RegisterlocationComponent;
  let fixture: ComponentFixture<RegisterlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
