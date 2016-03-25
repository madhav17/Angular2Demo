import {Component} from "angular2/core"


@Component({
    selector: 'structural-directive',
    template: `
        <section class="directive">

            <h2>*ngFor</h2>

            <div>
                <ul>
                <!--It repeats it till the condition is satisfied-->
                <!--index is anothor variable this ngFor provide us and it is bind to local vairable counter-->
                    <li *ngFor="#item of list, #counter = index">
                        {{item}}  {{counter}}
                    </li>
                </ul>
            </div>

        </section>
    `,
})

export class StructuralDirective {

    public list : Array<string> = ['Apple','Milk','Bread'];
}
