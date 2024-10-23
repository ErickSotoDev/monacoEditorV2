import { Component, OnInit } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor-v2';

declare const monaco: any;

@Component({
  selector: 'app-difedit',
  templateUrl: './difedit.component.html',
  styleUrls: ['./difedit.component.css']
})
export class DifeditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  options = {
    theme: 'alabai'
  };
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain'
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain'
  };

}
