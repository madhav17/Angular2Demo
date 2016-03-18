import {Component} from "angular2/core";
import {OnInit} from "angular2/core";

@Component({
    selector: "my-puzzle",
    template: `
        <section class="setUp">
        <h2>Game Set up</h2>
            Enter your Name
            <input type="text" #name (keyup)="0"/>
        </section>


        <!--conditional attach styling to it-->
        <!--both are same -->
        <!--[class.puzzle]="true"-->
        <!--[ngClass] = "{puzzle : true}"-->

        <!--both are same -->
        <!--[style.display]="name.value === '' ? 'none' : 'block'">-->
        <!--[ngStyle]="{display : name.value === '' ? 'none' : 'block'}"-->

        <section
         [ngClass] = "{
            puzzle : true,
            solved: switch1.value == switch1No &&
                    switch2.value == switch2No &&
                    switch3.value == switch3No &&
                    switch4.value == switch4No


         }"
         [ngStyle] = "{display : name.value === '' ? 'none' : 'block'}" >
            <h2>

            The Puzzle |

            {{ switch1.value == switch1No && switch2.value == switch2No && switch3.value == switch3No && switch4.value == switch4No ? 'Solved' : 'Not Solved' }}


            </h2>
            <p>Ok, Welcome <span class="name"> {{name.value}} </span></p>
            <br/>
            Switch 1 :
            <input type="text" #switch1 (keyup) = "0"/>
            <br/>
            Switch 2 :
            <input type="text" #switch2 (keyup) = "0" />
            <br/>
            Switch 3 :
            <input type="text" #switch3  (keyup) = "0"/>
            <br/>
            Switch 4 :
            <input type="text" #switch4 (keyup) = "0"/>
        </section>

        <h2 [hidden] = "!(switch1.value == switch1No && switch2.value == switch2No && switch3.value == switch3No && switch4.value == switch4No)">Congratz {{name.value}} you got it !</h2>
    `
})

export class MyPuzzle implements OnInit {

    switch1No:number;
    switch2No:number;
    switch3No:number;
    switch4No:number;

    ngOnInit():any {
        this.switch1No = Math.round(Math.random());
        this.switch2No = Math.round(Math.random());
        this.switch3No = Math.round(Math.random());
        this.switch4No = Math.round(Math.random());

        console.log(this.switch1No);
        console.log(this.switch2No);
        console.log(this.switch3No);
        console.log(this.switch4No);
    }
}
