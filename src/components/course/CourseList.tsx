import type { Course } from "../../types/course";
import CourseCard from "./CourseCard";

type CourseListProps = {
  courses: Course[];
};

function CourseList({ courses }: CourseListProps) {
  if (courses.length === 0) {
    return (
      <p className="rounded-xl bg-white p-8 text-center text-slate-500">
        Chưa có khóa học nào.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default CourseList;