import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      documento: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      carrera: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
}

