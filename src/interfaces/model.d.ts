import {CLASS_STATUS_TYPE, CLASS_STUDENT_STATUS_TYPE} from "@/constants";

declare namespace Model {

  export interface Pagination {
    page: number;
    pageSize: number;
    total: number;
    pageCount: number;
  }

  export interface Class {
    id: string;
    educatorId: string;
    title: string;
    studentLimit: number;
    studentCount?: number;
    startDate: string;
    endDate: string;
    status: keyof typeof CLASS_STATUS_TYPE;
    planId: string;
    startDateModified: boolean;
    code: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    locale: string;
    organizationName?: string;
    educatorUser?: {
      email: string;
      id: string;
      name: string;
      profileImage: string | null;
    };
  }

  export interface Course {
    id: string;
    title: string;
    thumbnailURL: string;
    description: string;
    buyerId: string;
    sourceId: null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    ownerId: string;
    courseLessonMappings: ClassProgressLessonMapping[];
    ownerEducatorUser: {
      id: string;
      name: string;
    };
  }

  export interface ClassStudentInfo {
    id: string;
    locale: string;
    educatorId: string;
    title: string;
    studentLimit: 40;
    startDate: string;
    endDate: string;
    status: string;
    planId: string;
    startDateModified: boolean;
    code: string;
    organizationContractCode: null;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
    numberStudentInClass: number;
    numberCourseInClass: number;
    educatorUser: {
      id: string;
      email: string;
      name: string;
      profileImage: string;
    };
  }

  export interface Lesson {
    order_lession: number;
    id: string;
    language: string;
    graphics: string;
    locale: string;
    title: string;
    description: string;
    thumbnailURL: string;
    sampleGameURL: string;
    template: string;
    totalMissionNumber: number;
    buyerId: string;
    ownerId: string;
    sourceId: null | string;
    isVisible: number;
    countReport: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    originalId: null | string;
    tags: { tagId: string; tagName: string }[];
    completedMissionNumber: number;
    progress: Progress;
    percentDone: number;
    status: string;
    status_lesson: string;
  }

  export interface Student {
    id: string;
    email: string;
    name: string;
    profileImage: string | null;
    lastLoggedInAt: string;
  }

  export interface ClassProgressLessonMapping {
    order: number;
    mappingId: string;
    lesson: Lesson;
  }

  export interface Progress {
    id: string;
    classId: string;
    courseId: string;
    lessonId: string;
    studentId: string;
    status: 'IN_PROGRESS';
    createdAt: string;
    updatedAt: string;
    projectId: string;
    class: {
      title: string;
    };
    studentUser: {
      name: string;
    };
    courseLessonMappingId: string;
    courseLessonMapping: {
      id: string;
      course: {
        id: string;
        title: string;
        description: string;
        thumbnailURL: string;
      };
      lesson: {
        id: string;
        title: string;
        language: string;
        thumbnailURL: string;
      };
    };
    sampleGameURL: string;
  }
  export interface Course {
    id: string;
    title: string;
    thumbnailURL: string;
    description: string;
    buyerId: string;
    sourceId: null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    ownerId: string;
    courseLessonMappings: ClassProgressLessonMapping[];
    ownerEducatorUser: {
      id: string;
      name: string;
    };
  }

  export interface AvailableCourse extends Course {
    ownerName: string;
  }
  //LESSON
  export interface Lesson {
    id: string;
    language: string;
    locale: string;
    title: string;
    description: string;
    thumbnailURL: string;
    sampleGameURL: string;
    totalMissionNumber: number;
    buyerId: string;
    ownerId: string;
    sourceId: string | null;
    isVisible: boolean;
    lessonTags: { id: string; tag: { name: string } }[];
  }

  export interface AvailableLesson extends Lesson {
    template: string;
  }

  //LESSON STUDENT

  export interface ProgressLesson {
    classId: string;
    id: string;
    completedMissionNumber: number;
    sampleGameURL: string;
    lastLearningAt: string;
    isGoFurther: number;
    courseId: string;
    lessonId: string;
  }

  //PROJECT
  export interface Project {
    createdAt: string;
    deletedAt: null;
    id: string;
    isCodeCopiable: boolean;
    isVisible: boolean;
    language: string;
    likeCount: number;
    locale: string;
    likeDateTime: string;
    state: string;
    studentId: string;
    ownerName: string;
    ownerProfileImage: string;
    thumbnailURL: string;
    title: string;
    updatedAt: string;
    viewCount: number;
    liked: boolean;
    description: string;
    sampleGameURL: string;
    screenMode: string;
  }

  export interface ISlotList {
    id: string;
    classId: string;
    studentId: string;
    email: string;
    name: string;
    status: keyof typeof CLASS_STUDENT_STATUS_TYPE;
    createdAt: string;
    updatedAt: string;
    profileImage: string | null;
    lastLoggedInAt: string;
    classStartDate: string;
    isExpiring?: boolean;
  }

  //------
  //COMMENT
  export interface PartComments {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  }

  //REPORT
  export interface CountReport {
    id: string;
    lessonId: string;
    courseId: string;
    classId: string;
    countReport: number;
  }
}
