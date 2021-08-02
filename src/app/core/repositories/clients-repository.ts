import { Observable } from 'rxjs';
import { Clients } from '../domain/entities/clients';

export abstract class ClientsRepository {
  abstract getAllClients(): Observable<Clients[]>;

  abstract addClients(clients: Clients): Observable<any>;
}
