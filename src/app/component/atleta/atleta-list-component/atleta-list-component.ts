import { Component } from '@angular/core';
import { Atleta } from '../../../models/Atleta';
import { AtletaService } from '../../../service/atleta-service';

@Component({
  selector: 'app-atleta-list-component',
  imports: [],
  templateUrl: './atleta-list-component.html',
  styleUrl: './atleta-list-component.css',
})
export class AtletaListComponent {

  listaAtletas: Atleta[] = []

  constructor(private listaService: AtletaService){ }

  ngOnInit(){
    this.listar()
  }

  listar(){
    this.listaService.listarAtletas()
    .subscribe({
      next:(dadosAtletas)=>{
        this.listaAtletas = [...dadosAtletas].sort((a, b) => a.nome.localeCompare(b.nome))
      },
      error:(msgErro)=>{
        console.log("Erro ao listar Atletas ", msgErro)
      }
    })
  }
}
