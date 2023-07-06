Ver los pro y contras de hacer que el use case AddProduct se encargue de hacer el getProducts del repositorio
En teoria deberian ser aparte y el componente ser quien llame a travez del controller AddProduct y GetproductLis.

LOS USE CASE NO DEBEN ESTAR ACOLPLADOS A LA LOGICA DE LA UI (NO ESTA BIEN QUE ADDPRODUCT RETORNE EL LISTADO DE PRODUCTOS)

UNA FORMA DE ENCADENAR LOS LLAMDOS ES QE EL VIEWMODEL SE ENCARGUE DE LLAMAR EL USECASE

Donde se complica el asunto es que los use case no retornan nada por lo que entraria a la arquitectura un patron de eventos que cuando un producto es agregado automaticamente haga el getProductList

Hacer una version donde se pase como parametro el Presenter para que use case lo ejecute implementado el output boundary

Crear las respuestas de tipo either para poder hacer que los errores sean parte del core.
Es decir las entidades deben tener mapeados los errores conocidos y los casos de uso tambien.
Esto apra que los desarrolladores sepan desde un inicio que los metodos no retornan unicamente el camino feliz sino tambien los errores.

Ver de que se trata la el tipo guard
https://github.com/stemmlerjs/ddd-forum/blob/master/src/shared/core/Guard.ts

VER COMO LIDIAR CON LAS RESPUESTAS START(LOADING), SUCCESS, ERROR.

DEBERIA EL PRESENTER TENER LA LOGICA?
DEBERIA EL USECASE TENER LA LOGICA Y LLAMAR DISTINTOS METODOS DEL PRESENTER?
DEBERIA EL CALLBACK TENER VARIOS METODOS QUE LLAMA EL PRESENTER?
DEBERIA EL CALLBACK TENER LA LOGICA Y LIDIAR CON LA RESPUESTA DEL PRESENTER?
