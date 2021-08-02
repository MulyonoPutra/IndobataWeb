import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../domain/dto/search';
import { Category } from '../domain/entities/category';
import { CategoryRepository } from '../repositories/category-repository';

export type EntityArrayResponseType = HttpResponse<Category[]>;
@Injectable()
export class CategoryService extends CategoryRepository {
  constructor(private categoryRepository: CategoryRepository) {
    super();
  }

  addCategory(categories: Category): Observable<any> {
    return this.categoryRepository.addCategory(categories);
  }
  getAllCategory(): Observable<Category[]> {
    return this.categoryRepository.getAllCategory();
  }

  addCategoryToCollectionIfMissing(
    categoryCollection: Category[],
    categoriesToCheck: (Category | null | undefined)[]
  ): Observable<Category[]> {
    return this.addCategoryToCollectionIfMissing(
      categoryCollection,
      categoriesToCheck
    );
  }

  search(search: Search): Observable<any> {
    return this.categoryRepository.search(search);
  }

  query(): Observable<EntityArrayResponseType> {
    return this.categoryRepository.query();
  }

}
