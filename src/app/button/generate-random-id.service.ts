import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateRandomIdService {

  constructor() { }

  generateId(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/'
    let result = ''
    const charactersLenght = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLenght));
    }
    return result
  }
}