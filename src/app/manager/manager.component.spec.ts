import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponent } from './manager.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material.module';

describe('ManagerComponent', () => {
  let component: ManagerComponent;
  let fixture: ComponentFixture<ManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerComponent ],
      imports: [ RouterTestingModule, MaterialModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
