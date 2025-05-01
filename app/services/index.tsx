import { gql, request } from "graphql-request";
import {HYGRAPH_API_KEY} from '@env'

const MASTER_URL = HYGRAPH_API_KEY;

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courses {
        id
        name
        price
        tags
        time
        author
        banner {
          url
        }
        chapters {
          id
          content {
            markdown
            html
          }
          chapter
        }
        name
        description {
          markdown
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};

export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {
          courseId: "` +
    courseId +
    `"
          userEmail: "` +
    userEmail +
    `"
          course: { connect: { id: "` +
    courseId +
    `" } }
        }
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);

  return result;
};

export const getUserEnrolledCourse = async (courseId, userEmail) => {
  const query =
    gql`
    query GetUserEnrolledCourse {
      userEnrolledCourses(
        where: {
          courseId: "` +
    courseId +
    `"
          userEmail: "` +
    userEmail +
    `"
        }
      ) {
        id
        courseId
        completedChapter {
          chapterId
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};

export const MarkChapterCompleted = async (chapterId, recordId) => {
  const mutationQuery = gql`
    mutation markChapterCompleted {
      updateUserEnrolledCourse(
        data: { completedChapter: { create: { data: { chapterId: "`+chapterId+`" } } } }
        where: { id: "`+recordId+`" }
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, mutationQuery);

  return result;
};
