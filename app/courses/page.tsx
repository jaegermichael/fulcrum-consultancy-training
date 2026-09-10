"use client";
import { useState } from "react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
const filters=["All","Data Analytics","Accounting","Payroll","Computer Skills"];
export default function CoursesPage(){const [active,setActive]=useState("All"); const shown=active==="All"?courses:courses.filter(c=>c.category===active); return <main id="main"><section className="page-hero"><span className="eyebrow">Course catalogue</span><h1>Learn tools that<br/>move work forward.</h1><p>Browse practical, instructor-led training available online and physically in Harare.</p></section><section className="section course-browser"><div className="filters" role="group" aria-label="Filter courses">{filters.map(f=><button key={f} className={active===f?"active":""} onClick={()=>setActive(f)}>{f}</button>)}</div><div className="course-list">{shown.map(c=><CourseCard key={c.slug} course={c}/>)}</div></section></main>}
