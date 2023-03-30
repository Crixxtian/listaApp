import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JettPage } from './jett.page';

describe('JettPage', () => {
  let component: JettPage;
  let fixture: ComponentFixture<JettPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JettPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
