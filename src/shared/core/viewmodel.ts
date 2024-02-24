import { ResponseDTO } from './response.dto';
type ResponseStatus = 'error' | 'success';
interface Error {
  code: string;
  message: string;
  details: string;
}
export interface Viewmodel<IViewModel> extends ResponseDTO {
  status: ResponseStatus;
  data: IViewModel;
  error?: Error[];
}
