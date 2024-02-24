export interface UseCase<IRequest = void, IResponse = void> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}
