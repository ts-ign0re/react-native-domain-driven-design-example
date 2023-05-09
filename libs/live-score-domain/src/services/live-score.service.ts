import { LiveScoreRepository } from '../repositories';
class LiveScoreServiceImpl {
  liveScoreRepository: typeof LiveScoreRepository;
  constructor() {
    this.liveScoreRepository = LiveScoreRepository;
  }

  async getSports() {
    const res = await this.liveScoreRepository.sports();
    return res;
  }

  async getEventsLiveBySportId(sportId: number) {
    const res = await this.liveScoreRepository.eventsLiveBySportId(sportId);
    return res;
  }
  async getEventsBySportIdAndDate(sportId: number, date: string) {
    const res = await this.liveScoreRepository.eventsBySportIdAndDate(sportId, date);
    return res;
  }
}

export const LiveScoreService = new LiveScoreServiceImpl();