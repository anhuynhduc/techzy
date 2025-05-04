import {
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
      return _.get(data, 'courseList', []) as Model.Course[];
    },
    ...options,
  });
};

export const useCreateCourse = (
  options: UseMutationOptions<Model.Course, unknown, Payload.CreateCourse> = {},
) => {
  return useMutation({
    mutationFn: async (values: Payload.CreateCourse): Promise<Model.Course> => {
      const { data } = await markerService.course.createCourse(values);
      return data as  Model.Course;
    },
    ...options,
  });
};

export const useUpdateCourse = (
  options: UseMutationOptions<Model.Course, unknown, Payload.UpdateCourse> = {},
) => {
  return useMutation({
    mutationFn: async (values):  Promise<Model.Course> => {
      const { data } = await markerService.course.updateCourse(values);
      return data as Model.Course;
    },
    ...options,
  });
};

export const useDeleteCourse = (
  options: UseMutationOptions<{ success: boolean }, unknown, { id: string }> = {},
) => {
  return useMutation({
    mutationFn: async (values): Promise<{ success: boolean }> => {
      const { data } = await markerService.course.deleteCourse(values.id);
      return data as { success: boolean };
    },
    ...options,
  });
};