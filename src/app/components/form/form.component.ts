import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Pokemon } from 'src/app/features/Interfaces/Pokemon.interface';
import { PokedexFirestoreService } from 'src/app/services/pokedex-firestore.service';
import { Storage, ref, uploadBytesResumable  } from '@angular/fire/storage';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  
  constructor(
    private readonly formBuilder: FormBuilder,
    private pokedexService: PokedexFirestoreService,
    private storage: Storage,
  ) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
    });
  }

  submit(input: HTMLInputElement) {
    console.log('input', input.files)
    this.pokedexService.post_pokemon(this.form.value, input)
  }

}
