import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { GreeterModule } from './greeter.module';
import { GreeterComponent } from "./greeter.component";
import { GreeterService } from "./greeter.service";

fdescribe("Greeter Component", ()=> {

    let fixture : ComponentFixture<GreeterComponent>;
    let component : GreeterComponent;
    

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
         imports : [
             GreeterModule
         ]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(GreeterComponent);
        component = fixture.componentInstance
      })
  }));

  it("Should create an instance", () => {
    expect(component).toBeTruthy();
  });

  it('Should display a greet message (from the greeterservice)', () => {
      const greeterService = TestBed.inject(GreeterService);
      spyOn(greeterService, "greet").and.returnValue("A dummy greet message");

      component.onGreetClick("Magesh");
      fixture.detectChanges();

      expect(greeterService.greet).toHaveBeenCalledWith("Magesh");
      expect(component.message.text).toBe("A dummy greet message");
  })
})