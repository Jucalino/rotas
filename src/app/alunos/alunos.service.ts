import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  getAlunos(){
    return [
    {id: 1, nome: 'Juca', email: 'juca@email.com'},
    {id: 2, nome: 'Duda', email: 'duda@email.com'},
    {id: 3, nome: 'Maria', email: 'maria@email.com'}
  ]
  }

  getAluno(id: number){
    let alunos = this.getAlunos()
    for (let i = 0; i<alunos.length; i++){
      let aluno = alunos[i]
      if(aluno.id == id){
        return aluno
      }
    }
    return null
  }


  constructor() { }
}
