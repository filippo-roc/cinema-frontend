import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSchedulingComponent } from './delete-scheduling.component';

describe('DeleteSchedulingComponent', () => {
  let component: DeleteSchedulingComponent;
  let fixture: ComponentFixture<DeleteSchedulingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSchedulingComponent]
    });
    fixture = TestBed.createComponent(DeleteSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
