import type { Course } from "../types/course";

export const mockCourses: Course[] = [
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description:
      "Học component, props, state và event handling trong React.",
    instructor: "Nguyễn Văn An",
    imageUrl:
      "https://picsum.photos/seed/react-course/800/500",
    category: "Frontend",
    level: "Beginner",
    duration: 18,
    price: 499000,
    rating: 4.8,
  },
  {
    id: "typescript-complete",
    title: "TypeScript Complete",
    description:
      "Nắm vững TypeScript để xây dựng ứng dụng an toàn và dễ bảo trì.",
    instructor: "Trần Minh Khoa",
    imageUrl:
      "https://picsum.photos/seed/typescript-course/800/500",
    category: "Programming",
    level: "Intermediate",
    duration: 22,
    price: 599000,
    rating: 4.7,
  },
  {
    id: "tailwind-css",
    title: "Tailwind CSS từ cơ bản",
    description:
      "Xây dựng giao diện responsive nhanh chóng bằng Tailwind CSS.",
    instructor: "Lê Hoàng Nam",
    imageUrl:
      "https://picsum.photos/seed/tailwind-course/800/500",
    category: "UI Design",
    level: "Beginner",
    duration: 12,
    price: 399000,
    rating: 4.6,
  },
  {
    id: "redux-toolkit",
    title: "Redux Toolkit thực chiến",
    description:
      "Quản lý state toàn cục trong ứng dụng React bằng Redux Toolkit.",
    instructor: "Phạm Thùy Linh",
    imageUrl:
      "https://picsum.photos/seed/redux-course/800/500",
    category: "Frontend",
    level: "Intermediate",
    duration: 16,
    price: 549000,
    rating: 4.9,
  },
  {
    id: "nodejs-api",
    title: "Node.js REST API",
    description:
      "Xây dựng REST API với Node.js, Express và các nguyên tắc backend.",
    instructor: "Đặng Quốc Bảo",
    imageUrl:
      "https://picsum.photos/seed/node-course/800/500",
    category: "Backend",
    level: "Intermediate",
    duration: 24,
    price: 649000,
    rating: 4.7,
  },
  {
    id: "web-design",
    title: "Responsive Web Design",
    description:
      "Thiết kế website đẹp và tương thích trên mobile, tablet, desktop.",
    instructor: "Võ Thanh Hà",
    imageUrl:
      "https://picsum.photos/seed/design-course/800/500",
    category: "UI Design",
    level: "Beginner",
    duration: 14,
    price: 449000,
    rating: 4.5,
  },
];