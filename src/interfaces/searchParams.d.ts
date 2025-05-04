declare namespace SearchParams {
  import { LOCALE_TYPE } from 'src/constants';

  export interface Base {
    offset?: number;
    take?: number;
    limit?: number;
    page?: number;
    locale?: keyof typeof LOCALE_TYPE;
  }

  //COURSE
  export interface CourseListAll extends Base {
    searchType?: string;
    keyword?: string;
  }
}
