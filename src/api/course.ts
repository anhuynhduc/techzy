import { Axios } from 'src/libs/axios';

const endpoint = '/course';
export const keys = {
  all: (params?: SearchParams.CourseListAll) =>
    [`${endpoint}/list`, params] as const,
};
class Course extends Axios {
  keys = keys;
  endpointId = function (id: string | number) {
    return `courseId=${id}`;
  };
  getAllLists(params?: SearchParams.CourseListAll) {
    return this.get(this.keys.all(params)[0], { params });
  }

  createCourse(payload: Payload.CreateCourse) {
    return this.post(`${endpoint}`, payload);
  }

  updateCourse(payload: Payload.UpdateCourse) {
    const { courseId, ...rest } = payload;

    return this.put(`${endpoint}?${this.endpointId(courseId)}`, rest);
  }

  deleteCourse(id: string | number) {
    return this.delete(`${endpoint}?${this.endpointId(id)}`);
  }

}

export const course = new Course();
