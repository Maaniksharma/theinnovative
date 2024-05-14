import Course from "./subComponents/Course";

const COURSES = [
  {
    name: "IELTS/PTE",
    description:
      "Get set for a brighter future in no time with our quick and easy IELTS and PTE courses. Join us for expert coaching, personalized strategies, and your express ticket to international success",
    action: "Go Abroad",
  },
  {
    name: "Interview Prepration",
    description:
      "Unlock interview success effortlessly with our specialized preparation program. Enroll in our expert coaching, tailored strategies, and your roadmap to a brighter future through successful interviews.",
    action: "Crack Interview",
  },
  {
    name: "Exam Prepration",
    description:
      "Get ready to conquer your exams with our quick and easy preparation courses. Join us for expert coaching, personalized strategies, and the path to your exam success and brighter future.",
    action: "Go Best Grades",
  },
];
const Courses = () => (
  <div className="flex flex-wrap gap-24 justify-center pb-20 " id="courses">
    {COURSES.map((course) => (
      <div key={course.id} className=" mt-10">
        <Course
          title={course.name}
          description={course.description}
          action={course.action}
        />
      </div>
    ))}
  </div>
);

export default Courses;
