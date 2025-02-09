import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservedSubjectComponent } from './observed-subject.component';

describe('ObservedSubjectComponent', () => {
  let component: ObservedSubjectComponent;
  let fixture: ComponentFixture<ObservedSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservedSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservedSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
