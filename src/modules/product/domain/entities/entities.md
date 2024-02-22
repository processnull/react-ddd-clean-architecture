Entities are the model objects manipulated by an Interactor. Entities are only manipulated by the Interactor. The Interactor never passes entities to the presentation layer (i.e. Presenter).

**Entity** is a **class** that represents a real-world object or concept. It is responsible for storing and managing its own data  
Entities may depends on Interface reposotories to manage its own data and state.

Entities must receive domain objects as parameters like value objects so the validation of value object must be made in the client aka usecases or transformers.
