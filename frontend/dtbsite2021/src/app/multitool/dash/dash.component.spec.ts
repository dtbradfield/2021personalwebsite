import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DashComponent } from './dash.component';

describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should always be boolean', () => {
    expect(component.expand).toBeInstanceOf(Boolean)
  });

  it('should always be string', () => {
    expect(component.top).toBeInstanceOf(String)
  });

  it('should always be string', () => {
    expect(component.left).toBeInstanceOf(String)
  });

  it('should make var expand === false on mouseup', () => {
    fixture.detectChanges();
    //arrange
    component.expand = true;
    fixture.detectChanges();
    //act
    component.onMUp();
    fixture.detectChanges();
    //assert
    expect(component.expand).toBeFalse();
  });

  it('should make var expand === true on mousedown', () => {
    fixture.detectChanges();
    //arrange
    component.expand = false;
    fixture.detectChanges();
    //act
    component.onMDown();
    fixture.detectChanges();
    //assert
    expect(component.expand).toBeTrue();
  });

  it('should subtract both page x and y vals by 10px', () => {
    fixture.detectChanges();
    //arrange
    let event = {
      pageY: 11,
      pageX: 12
    }
    component.top = '0px';
    component.left = '0px';
    fixture.detectChanges();
    //act
    component.onMousemove(event);
    fixture.detectChanges();
    //assert
    expect(component.top).toEqual('1px');
    expect(component.left).toEqual('2px');
  });

});
