import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturesProductsComponent } from './home-features-products.component';

describe('HomeFeaturesProductsComponent', () => {
  let component: HomeFeaturesProductsComponent;
  let fixture: ComponentFixture<HomeFeaturesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeaturesProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
