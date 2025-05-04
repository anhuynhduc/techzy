import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import _ from 'lodash';

import { markerService } from 'src/api';
import {Model} from "@/interfaces/model";

export const useCourseList = <T = Model.Course[]>(
  params: SearchParams.CourseListAll,
  options?: UseQueryOptions<Model.Course[], unknown, T>,
) => {
  return useQuery({
    queryKey: markerService.course.keys.all(params),
    queryFn: async () => {
      const { data } = await markerService.course.getAllLists(params);
      return _.get(data, 'courseList') as Model.Course[];
    },
    ...options,
  });
};

export const useCreateCourse = (
  options: UseMutationOptions<any, unknown, Payload.CreateCourse> = {},
) => {
  return useMutation({
    mutationFn: async (values) => {
      const { data } = await markerService.course.createCourse(values);

      return data;
    },
    ...options,
  });
};

export const useUpdateCourse = (
  options: UseMutationOptions<any, unknown, Payload.UpdateCourse> = {},
) => {
  return useMutation({
    mutationFn: async (values) => {
      const { data } = await markerService.course.updateCourse(values);

      return data;
    },
    ...options,
  });
};

export const useDeleteCourse = (
  options: UseMutationOptions<any, unknown, { id: string }> = {},
) => {
  return useMutation({
    mutationFn: async (values) => {
      const { data } = await markerService.course.deleteCourse(values.id);

      return data;
    },
    ...options,
  });
};
