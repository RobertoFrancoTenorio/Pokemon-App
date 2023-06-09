import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'

import { FormComponent } from '../components/form/form.component';
@NgModule({
  declarations: [
    PokemonComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ]
})
export class PokemonModule { }
