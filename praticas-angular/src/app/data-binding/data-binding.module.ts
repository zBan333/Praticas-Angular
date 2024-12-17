import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventoBindingComponent } from './evento-binding/evento-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { TextDisplayComponent } from './input-property/text-display/text-display.component';
import { BackgroundComponent } from './input-property/background/background.component';
import { ItemListComponent } from './input-property/item-list/item-list.component';
import { ConteudoVisivelComponent } from './input-property/conteudo-visivel/conteudo-visivel.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { BotaoContadorComponent } from './output-property/botao-contador/botao-contador.component';
import { EmitirTextoComponent } from './output-property/emitir-texto/emitir-texto.component';
import { VisibleComponentComponent } from './output-property/visible-component/visible-component.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventoBindingComponent,
    TwoWayBindingComponent,
    InputPropertyComponent,
    TextDisplayComponent,
    BackgroundComponent,
    ItemListComponent,
    ConteudoVisivelComponent,
    OutputPropertyComponent,
    BotaoContadorComponent,
    EmitirTextoComponent,
    VisibleComponentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataBindingComponent,
  ]
})
export class DataBindingModule { }
