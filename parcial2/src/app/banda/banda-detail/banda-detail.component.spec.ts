import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {BandaDetailComponent} from './banda-detail.component';
import {BandaService} from 'src/app/banda/banda.service';

describe('BandaDetailComponent', () => {
  let component: BandaDetailComponent;
  let fixture: ComponentFixture<BandaDetailComponent>;
  let mockActivatedRoute: ActivatedRoute;
  let mockBandaService: jasmine.SpyObj<BandaService>;

  beforeEach(async () => {
    mockBandaService = jasmine.createSpyObj('BandaService', ['getBanda']);
    mockActivatedRoute = {
      snapshot: {
        queryParamMap: {
          get: jasmine.createSpy('get').and.returnValue('1')
        }
      }
    } as unknown as ActivatedRoute;

    await TestBed.configureTestingModule({
      declarations: [BandaDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: BandaService, useValue: mockBandaService}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
