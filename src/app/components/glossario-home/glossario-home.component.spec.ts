import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarioHomeComponent } from './glossario-home.component';

describe('GlossarioHomeComponent', () => {
  let component: GlossarioHomeComponent;
  let fixture: ComponentFixture<GlossarioHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlossarioHomeComponent]
    });
    fixture = TestBed.createComponent(GlossarioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
