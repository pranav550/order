import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHeader2Component } from './customer-header2.component';

describe('CustomerHeader2Component', () => {
  let component: CustomerHeader2Component;
  let fixture: ComponentFixture<CustomerHeader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHeader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
