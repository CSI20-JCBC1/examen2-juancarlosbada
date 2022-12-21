import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-porteros',
  templateUrl: './porteros.component.html',
  styleUrls: ['./porteros.component.css']
})
export class PorterosComponent implements OnInit {

  coleccion='porteros';
  porteros:any[]=[];
  
  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
    //Cargamos lista de porteros para poder mostrarla
    this.firebase.getAll(this.coleccion).subscribe((resp: any)=>{
      this.porteros=[];
      resp.forEach((porteroSnapshot:any) => {
        this.porteros.push(
          {
            documentId: porteroSnapshot.payload.doc.id,
            data:porteroSnapshot.payload.doc.data()
          }
        )
        
      });
    })
  }

}
