import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDetailComponent } from './software-detail.component';

describe('SoftwareDetailComponent', () => {
  let component: SoftwareDetailComponent;
  let fixture: ComponentFixture<SoftwareDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
