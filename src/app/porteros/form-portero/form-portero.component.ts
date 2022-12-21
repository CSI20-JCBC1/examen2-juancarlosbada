import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/servicios/firebase.service';

@Component({
  selector: 'app-form-portero',
  templateUrl: './form-portero.component.html',
  styleUrls: ['./form-portero.component.css']
})
export class FormPorteroComponent implements OnInit {

  formPortero = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    ciudad: ['', Validators.required],
    telefono: ['', Validators.required],
    mail: ['', Validators.required],
    mesDisponible: ['', Validators.required]
    //Indicamos que los campos son obligatorios con Validators.required

  });

  nuevo: boolean = false;
  documentId: string = '';
  mesDisponible: string = '';

  constructor(private fb: FormBuilder, private location: Location, private ruta: ActivatedRoute, private fire: FirebaseService) { }

  ngOnInit(): void {

    this.documentId = this.ruta.snapshot.paramMap.get('idPortero')!;
    this.fire.getOne('porteros', this.documentId).subscribe((resp: any) => {
      this.formPortero.setValue(resp.payload.data())
    });

    this.ruta.params.subscribe(params => {
      if (params['id']) {
        this.documentId = String(params['id']);
        this.nuevo = false;
        this.fire.getOne('porteros', this.documentId).subscribe(
          (resp: any) => {
            this.formPortero.setValue(resp.payload.data());
          }
        )
      } else {
        this.nuevo = true;
      }
    });
  }

  insertar() {
    if (this.nuevo) {
      this.fire.create('porteros', this.formPortero.value).then(
        () => {

          this.cancel();
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
    }

  }

  editar() {
    this.fire.update('porteros', this.documentId, this.formPortero.value).then(
      () => {
        this.cancel();
      },
      (error: any) => {
        alert('Error al actualizar, no se puede actualizar un portero que no existe (Mensaje FireBase ==> ' + error + ' )');
      }
    )
    //Si le damos a actualizar y no existe nos dara un error
  }

  borrar() {
    //Delete de portero
    this.fire.delete('porteros', this.documentId);
    this.location.back();
  }

  cancel() {
    //Si no queremos hacer ninguna de las opciones
    this.location.back();
  }

}


