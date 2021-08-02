import { CategoryRepository } from "../repositories/category-repository";
import { ClientsRepository } from "../repositories/clients-repository";
import { FeedbackRepository } from "../repositories/feedback-repository";
import { ProductRepository } from "../repositories/product-repository";
import { CategoryServiceImpl } from "../services/impl/category.service-impl";
import { ClientsServiceImpl } from "../services/impl/clients.service-impl";
import { FeedbackServiceImpl } from "../services/impl/feedback.service-impl";
import { ProductServiceImpl } from "../services/impl/product.service-impl";

export const RepositoriesProvider = [
  { provide: ProductRepository, useClass: ProductServiceImpl },
  { provide: ClientsRepository, useClass: ClientsServiceImpl },
  { provide: CategoryRepository, useClass: CategoryServiceImpl },
  { provide: FeedbackRepository, useClass: FeedbackServiceImpl },
];
