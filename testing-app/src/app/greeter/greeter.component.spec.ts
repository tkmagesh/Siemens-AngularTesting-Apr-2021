import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { GreeterModule } from './greeter.module';
import { GreeterComponent } from "./greeter.component";
import { GreeterService } from "./greeter.service";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

fdescribe("Greeter Component", ()=> {

    let fixture : ComponentFixture<GreeterComponent>;
    let component : GreeterComponent;
    let el : DebugElement;
    

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
         imports : [
             GreeterModule
         ]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(GreeterComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      })
  }));

  it("Should create an instance", () => {
    expect(component).toBeTruthy();
  });

  it('Should display a greet message (from the greeterservice)', () => {
      const greeterService = TestBed.inject(GreeterService);
      spyOn(greeterService, "greet").and.returnValue("A dummy greet message");

      component.onGreetClick("Magesh");
      
      expect(greeterService.greet).toHaveBeenCalledWith("Magesh");
      expect(component.message.text).toBe("A dummy greet message");
  })

  it("Should display the greet message", () => {
      const greeterService = TestBed.inject(GreeterService);
      spyOn(greeterService, "greet").and.returnValue("A dummy greet message");

      component.onGreetClick("Magesh");
      fixture.detectChanges();

      expect(greeterService.greet).toHaveBeenCalledWith("Magesh");
      let messageEle = el.query(By.css('div'));
      console.log(messageEle);
      expect(messageEle.nativeElement.textContent).toBe("A dummy greet message");
  });

  it("should display the message based on the username in the textbox", () => {
      const greeterService = TestBed.inject(GreeterService);
      spyOn(greeterService, "greet").and.returnValue("A dummy greet message");

      let textBoxEle = el.query(By.css('input[type="text"'));
      textBoxEle.nativeElement.value = "Suresh";

      let btnGreet = el.query(By.css('input[value="Greet"]'));
      btnGreet.triggerEventHandler("click", { button : 0 });

      fixture.detectChanges();

      expect(greeterService.greet).toHaveBeenCalledWith("Suresh");
      let messageEle = el.query(By.css('div'));
      console.log(messageEle);
      expect(messageEle.nativeElement.textContent).toBe("A dummy greet message");
  })
})