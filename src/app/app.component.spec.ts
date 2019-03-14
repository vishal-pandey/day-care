import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ApComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ApComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-tour-of-heroes'`, () => {
    const fixture = TestBed.createComponent(ApComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-tour-of-heroes');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ApComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-tour-of-heroes!');
  });
});
