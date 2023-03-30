import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GekkoPage } from './gekko.page';

describe('GekkoPage', () => {
  let component: GekkoPage;
  let fixture: ComponentFixture<GekkoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GekkoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
