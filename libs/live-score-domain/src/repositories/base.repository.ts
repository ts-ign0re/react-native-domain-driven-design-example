import { DataSourceInfrastructureImpl } from "../infrastructure/data-source.infrastructure";

export class BaseRepository {
  constructor(protected readonly db: DataSourceInfrastructureImpl) {
    this.db = db;
  }
}