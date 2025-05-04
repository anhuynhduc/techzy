import { course } from './course';

export class MarkerService {
  public course = course;
}

export const markerService = new MarkerService();