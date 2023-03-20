# bdecode
bdecode es utiidad para tener en tu linea de comandos, si estas constantemente trabajando con textos en base64, para transformar un string a base64 y viceversa a traves de una linea de comandos interactiva.

### Instalar bdecode:
Requisitos:
- tener instalado npm y nodejs.

En tu terminal de preferencia ejecutar:

    npm install -g bdecode

### en la v.1.  puedes: 
 - codificar un string a un string en base64
 - decodificar un base 
 - List item

en ambos casos, una vez codificado o decodificado, al terminar el proceso, este se copia directamente al portapapeles.
Ejemplo:

    $ bdecode
    ◆ Select a option
	    └ Encode
	    └ Decode
	 
al seleccionar por ejemplo la opcion "Encode"

    ◆  What is the text to encode:
    └ My Text to encode
    
esto nos da como resultado:

    ◆  Copied in clipboard!
    └  TXkgVGV4dCB0byBlbmNvZGU=
