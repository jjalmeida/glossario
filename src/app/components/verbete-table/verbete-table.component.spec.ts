import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbeteTableComponent } from './verbete-table.component';

describe('VerbeteTableComponent', () => {
  let component: VerbeteTableComponent;
  let fixture: ComponentFixture<VerbeteTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerbeteTableComponent]
    });
    fixture = TestBed.createComponent(VerbeteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
