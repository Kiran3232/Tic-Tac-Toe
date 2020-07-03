import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerOnlineComponent } from './multiplayer-online.component';

describe('MultiplayerOnlineComponent', () => {
  let component: MultiplayerOnlineComponent;
  let fixture: ComponentFixture<MultiplayerOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplayerOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayerOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
