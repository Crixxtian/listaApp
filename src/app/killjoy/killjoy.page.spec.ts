import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KilljoyPage } from './killjoy.page';

describe('KilljoyPage', () => {
  let component: KilljoyPage;
  let fixture: ComponentFixture<KilljoyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KilljoyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
