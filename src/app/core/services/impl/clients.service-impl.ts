import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clients } from '../../domain/entities/clients';
import { ClientsRepository } from '../../repository/clients.repository';

@Injectable()
export class ClientsServiceImpl extends ClientsRepository {

  public post: Clients;

  constructor(private http: HttpClient) {
    super();
  }

  getAllClients(): Observable<Clients[]> {
    return this.http.get<any>(environment.baseEndpoint + 'api/clients');
  }

  addClients(clients: Clients): Observable<any> {
    return this.http.post(environment.baseEndpoint + 'api/clients', clients);
  }

}
