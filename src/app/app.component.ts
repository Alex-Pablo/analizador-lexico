import { Component, ViewEncapsulation } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/css/css'
import 'codemirror/mode/mathematica/mathematica'
import 'codemirror/mode/asciiarmor/asciiarmor'
import 'codemirror/mode/python/python'
import  { Lexer ,CstParser} from 'chevrotain'
import { TokensService } from './services/tokens.service';
//import { ViewEncapsulation } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'AnalizadorLexico';

  inputCode:any;
  outputToken:any = " ";
  constructor( private tokensService: TokensService ){}

  ngOnInit(){
    this.inputCode = "";
  }

  codeMirrorOptions: any = {
    theme: 'dracula',
    mode: {
      name: 'javascript',
      json: true
    },
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers',],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };

  codeMirrorOptions2: any = {
    theme: 'dracula',
    mode: {
      name: 'python',
      json: true
    },
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers',],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };


  getCodeEditor(){
    this.outputToken = " ";
    const divideCodeByLine = this.inputCode.split('\n');
    this.convertTokenize(divideCodeByLine);
    
  }


  
  convertTokenize(codeDivideLine:any) {



    const codeSeparate:any= [];
    const lexer = new Lexer(this.tokensService.allTokens,{})
    for (let index = 0; index < codeDivideLine.length; index++) {
      const {tokens} = lexer.tokenize(codeDivideLine[index]);
      //set all the values, we get just the value we need
      const arrayTokenLine:any =[]
      for (let i = 0; i < tokens.length; i++) {
        const tokenObject ={
          token : tokens[i].image,
          nombre: tokens[i].tokenType.name
        }
        arrayTokenLine.push(tokenObject);
      }
      codeSeparate.push(arrayTokenLine)
    }
    this.formatToken(codeSeparate);
  }



  formatToken(tokens:any){
    for (let index = 0; index < tokens.length; index++) {
      for (let i = 0; i < tokens[index].length; i++) {        
        this.outputToken += `\n<h1> Linea de codigo numero ${index+1} </h1> \n ${tokens[index][i].token} == ${tokens[index][i].nombre} \n `
      }
    }
  }
}
