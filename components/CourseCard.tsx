import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Course } from "@/data/courses";
export function CourseCard({ course, featured = false }: { course: Course; featured?: boolean }) {
 return <article className={`course-row ${featured ? "course-featured" : ""}`}><div className="course-index">{course.category}</div><div><h3>{course.title}</h3><p>{course.description}</p><div className="format">Online + Physical</div></div><div className="course-price"><small>Course fee</small><strong>US${course.price}</strong>{course.registration && <span>+ US${course.registration} registration</span>}</div><Link href={`/courses/${course.slug}`} aria-label={`Explore ${course.title}`}>Explore course <ArrowUpRight /></Link></article>
}
