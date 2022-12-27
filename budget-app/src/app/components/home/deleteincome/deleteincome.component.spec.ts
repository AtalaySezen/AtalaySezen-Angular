import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteincomeComponent } from './deleteincome.component';

describe('DeleteincomeComponent', () => {
  let component: DeleteincomeComponent;
  let fixture: ComponentFixture<DeleteincomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteincomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
