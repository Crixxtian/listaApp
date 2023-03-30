import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NeonPage } from './neon.page';

describe('NeonPage', () => {
  let component: NeonPage;
  let fixture: ComponentFixture<NeonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NeonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
