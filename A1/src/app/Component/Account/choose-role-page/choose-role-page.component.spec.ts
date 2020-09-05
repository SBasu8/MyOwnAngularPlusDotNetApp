import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRolePageComponent } from './choose-role-page.component';

describe('ChooseRolePageComponent', () => {
  let component: ChooseRolePageComponent;
  let fixture: ComponentFixture<ChooseRolePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseRolePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
