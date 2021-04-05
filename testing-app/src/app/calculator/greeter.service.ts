export class GreeterService{
    greet(userName : string) : string {
        const currentHour = new Date().getHours();
        if (currentHour <= 11){
            return `Hi ${userName}, Good Morning!`
        } else {
            return `Hi ${userName}, Have a good day!`
        }
    }
}