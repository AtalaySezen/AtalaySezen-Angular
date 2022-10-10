import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowphotosComponent } from './showphotos.component';

describe('ShowphotosComponent', () => {
  let component: ShowphotosComponent;
  let fixture: ComponentFixture<ShowphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowphotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
