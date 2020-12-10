import { Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-count', //Mandatory
    templateUrl: './count.component.html'//or,
})

export class CountComponent implements OnInit {
    no: number = 0;
    value: string = "Zero!!!";

    isEnabled: boolean = true;

    strTextBox: string = "User";

    @Input("name") userName: string  = "UserName"

    ngOnInit(): void {
        setTimeout(() => {
            this.isEnabled = false;
        }, 2000);
    }

    onHandleChange = (event: any) => {
        console.log(event.target.value);
    }

    onHandleClick = (i: string) => {
        console.log("Clicked!!! " + this.strTextBox + i);
    }
};