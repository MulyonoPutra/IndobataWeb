import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clients } from '../domain/entities/clients';
import { ClientsRepository } from '../repository/clients.repository';

export type EntityArrayResponseType = HttpResponse<Clients[]>;

@Injectable()
export class ClientsService extends ClientsRepository {

  constructor(private clientsRepository: ClientsRepository) {
    super();
  }

  getAllClients(): Observable<Clients[]> {
    return this.clientsRepository.getAllClients();
  }
  
  addClients(clients: Clients): Observable<any> {
    return this.clientsRepository.addClients(clients);
  }

}
