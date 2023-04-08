import { Injectable, inject } from '@angular/core';
import { DocumentReference, Firestore } from '@angular/fire/firestore';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Pokemon } from '../features/Interfaces/Pokemon.interface';
import { Storage, ref, uploadBytesResumable  } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class PokedexFirestoreService {

  private pokemonCollection: CollectionReference<DocumentData>;
  
  constructor(
    private firestore: Firestore = inject(Firestore),
    private storage: Storage = inject(Storage),
  ) {
    /* TODO: Este método genera la colección donde haremos todo el almacenamiento */
    this.pokemonCollection = collection(this.firestore, 'pokemon')
  }

  post_pokemon(pokemon: Pokemon, input: HTMLInputElement){
    addDoc(this.pokemonCollection, pokemon ).then((documentReference: DocumentReference) => {
      // the documentReference provides access to the newly created document
      let result = documentReference
      console.log('id', result.id)
      this.storeImage(result.id, input)
    });
  }

  storeImage(id: string, input: HTMLInputElement){
    if (!input.files) return

    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, id + '/' + file.name);
        uploadBytesResumable(storageRef, file);
      }
    }
  }
}
