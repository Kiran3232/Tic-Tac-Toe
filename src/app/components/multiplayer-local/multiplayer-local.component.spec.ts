import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerLocalComponent } from './multiplayer-local.component';

describe('MultiplayerLocalComponent', () => {
  let component: MultiplayerLocalComponent;
  let fixture: ComponentFixture<MultiplayerLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplayerLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayerLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
