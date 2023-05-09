import { DataSourceInfrastructure } from "../infrastructure/data-source.infrastructure";
import { BaseRepository } from "./base.repository";

type Lang = 'en' | 'ru';

type Translations = Record<Lang, string>;

class LiveScoreRepositoryImpl extends BaseRepository {
  constructor() {
    super(DataSourceInfrastructure);
  }

  public async sports(): Promise<{ data: Array<{ id: number; slug: string; name: string; name_translations: Translations }> }> {
    return await this.db.get("sports");
  }

  public async leagues(sportId: number): Promise<{ data: Array<{ id: number; slug: string; name: string; name_translations: Translations, has_logo: boolean; logo: string }> }> {
    return await this.db.get(`/sports/${sportId}/leagues`);
  }

  public async eventsLiveBySportId(sportId: number): Promise<{ data: Array<{ id: number; slug: string; name: string; name_translations: Translations, has_logo: boolean; logo: string }> }> {
    return await this.db.get(`/sports/${sportId}/events/live`);
  }

  public async eventsBySportIdAndDate(sportId: number, date: string): Promise<{ data: Array<{ id: number; slug: string; name: string; name_translations: Translations, has_logo: boolean; logo: string }> }> {
    try {
      return await this.db.get(`/sports/${sportId}/events/date/${date}`);
    } catch (e) {
      console.error(e);
      return { data: [] };
    }
  }
}

export const LiveScoreRepository = new LiveScoreRepositoryImpl();