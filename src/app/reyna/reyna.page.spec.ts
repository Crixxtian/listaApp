import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReynaPage } from './reyna.page';

describe('ReynaPage', () => {
  let component: ReynaPage;
  let fixture: ComponentFixture<ReynaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReynaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
