import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiButtonComponent } from './zi-button.component';

describe('ZiButtonComponent', () => {
  let component: ZiButtonComponent;
  let fixture: ComponentFixture<ZiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
