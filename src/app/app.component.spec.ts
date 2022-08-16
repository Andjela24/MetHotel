import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ConsoleSpy } from './utils';

var fakeConsole: ConsoleSpy;

describe('AppComponent', () => {
  beforeEach(async () => {
    fakeConsole = new ConsoleSpy();
    let originalConsole = window.console;
    (<any>window).console = fakeConsole;
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'met-hotels'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('met-hotels');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('met-hotels app is running!');
  });



  it('handles form changes', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'XYZ';
    dispatchEvent(input);
    tick();

    expect(fakeConsole.logs).toContain('form changed to: [object Object]');
  }));
});
