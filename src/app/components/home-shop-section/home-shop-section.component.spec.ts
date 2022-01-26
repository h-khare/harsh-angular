import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShopSectionComponent } from './home-shop-section.component';

describe('HomeShopSectionComponent', () => {
  let component: HomeShopSectionComponent;
  let fixture: ComponentFixture<HomeShopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShopSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
