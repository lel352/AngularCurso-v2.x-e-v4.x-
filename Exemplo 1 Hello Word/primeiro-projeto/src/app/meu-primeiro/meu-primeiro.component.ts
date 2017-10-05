import {Component} from '@angular/core';

@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p> Meu primeiro component com angular 2 </p>
    `
}) //dizendo que é um component do angular
export class MeuPrimeiroComponent { 
    title = "teste";
}