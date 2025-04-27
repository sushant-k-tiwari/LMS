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
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};
