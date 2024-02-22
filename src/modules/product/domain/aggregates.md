Aggregates are the basic element of transfer of data storage – you request to load or save whole aggregates. Transactions should not cross aggregate boundaries.  
All entities grouped in a aggregate must be persisted in a sigle transaction. Cant be stored partially because this will lead to an inconsistency.
