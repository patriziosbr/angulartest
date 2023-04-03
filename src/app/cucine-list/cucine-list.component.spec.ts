import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucineListComponent } from './cucine-list.component';

describe('CucineListComponent', () => {
  let component: CucineListComponent;
  let fixture: ComponentFixture<CucineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CucineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CucineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
