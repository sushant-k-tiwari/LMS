import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cm9ya47pb00i907vz61b3orig/master";

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
          }
          chapter
        }
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
  const mutationQuery = gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {
          courseId: "`+courseId+`"
          userEmail: "`+userEmail+`"
          course: { connect: { id: "`+courseId+`" } }
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
