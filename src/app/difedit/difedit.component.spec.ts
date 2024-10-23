import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifeditComponent } from './difedit.component';

describe('DifeditComponent', () => {
  let component: DifeditComponent;
  let fixture: ComponentFixture<DifeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
