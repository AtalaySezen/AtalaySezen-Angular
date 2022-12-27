import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeditdialogComponent } from './homeeditdialog.component';

describe('HomeeditdialogComponent', () => {
  let component: HomeeditdialogComponent;
  let fixture: ComponentFixture<HomeeditdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeeditdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeeditdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
