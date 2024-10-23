import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DifeditComponent } from './difedit/difedit.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor-v2';

declare const monaco: any;
export function onMonacoLoad() {
  // Definir el tema personalizado "alabai" una vez que Monaco está cargado
  monaco.editor.defineTheme('alabai', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: '', background: '1E1E1E' },
      { token: 'comment', foreground: '7F9F7F' },
      { token: 'keyword', foreground: 'C586C0' },
      { token: 'identifier', foreground: '9CDCFE' },
      { token: 'string', foreground: 'CE9178' }
    ],
    colors: {
      'editor.background': '#6a329f',
      'editorLineNumber.foreground': '#6a329f',
      'editorCursor.foreground': '#6a329f',
      'editorIndentGuide.background': '#6a329f'
    }
  });

  // Aplicar el tema "alabai"
  monaco.editor.setTheme('alabai');
}

const monacoConfig: NgxMonacoEditorConfig = {
   baseUrl: './assets', // Cambia esta ruta si es necesario
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad
};

@NgModule({
  declarations: [
    AppComponent,
    DifeditComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorModule.forRoot(monacoConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
