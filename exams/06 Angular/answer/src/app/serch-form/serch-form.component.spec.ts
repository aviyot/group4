import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchFormComponent } from './serch-form.component';

describe('SerchFormComponent', () => {
  let component: SerchFormComponent;
  let fixture: ComponentFixture<SerchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
