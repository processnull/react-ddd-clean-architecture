export interface Presenter<IResponse, IViewModel> {
  present(response: IResponse): Promise<IViewModel> | IViewModel | void;
}
