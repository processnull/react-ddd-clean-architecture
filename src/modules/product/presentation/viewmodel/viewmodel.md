viewmodel is responsible for transfom the data returned by interactors into a data structure that UI can understand and display and retunr as simple data objects.

the returned data cant contain any method o state that allow the user interface to modify the data directly.

This can be implemented as a simple interface or as a class with methods that internally transform the data.
