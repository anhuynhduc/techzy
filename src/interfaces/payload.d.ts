declare namespace Payload {
  import { LOCALE_TYPE } from 'src/constants';

  export interface CreateCourse {
    title: string;
    thumbnailURL: string;
    description: string;
    locale: keyof typeof LOCALE_TYPE;
  }

  export interface UpdateCourse extends Partial<Omit<CreateCourse, 'locale'>> {
    courseId: string;
  }
}
