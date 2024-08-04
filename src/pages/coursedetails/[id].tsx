import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useCourses } from '../../app/hooks/useCourses';
import { coursesDataTransform } from '../../app/utils/apiCourseData';
import Loader from '@/app/components/loader';
import '../../app/components/courses/coursestyle.css';
import { Layout } from '@/app/components';

const CourseDetail: React.FC = () => {
  //Aslam code
  const router = useRouter();
  const { id } = router.query;
  const { data: products, isLoading, error } = useCourses();
  const courses = products ? coursesDataTransform(products) : [];

  const courseId = typeof id === 'string' ? parseInt(id, 10) : id;
  const course = courses.find(course => course.id === courseId);

  // console.log('Router ID:', id);
  // console.log('Course ID:', courseId);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading course details</p>;

  if (!course) return <p>Course not found</p>;

  return (
    <Layout>
      <div className='container'>
        <div className="course-detail-container">
          <div className='detailimg'> <Image src={course.image} alt={course.title} width={300} height={300} className="course-image" /></div>

          <div className="course-detail-body">
            <div className="course-detail-header">
              <h1 className="course-title">{course.title}</h1>
              <p className="course-instructor mb-15">by {course.instructor?.length > 0 ? course.instructor:"No Instructor"}</p>
            </div>
            <div className="course-info ">
              <p className='mb-15 tagCategory'><span>{course.level}</span></p>
              <p className=''>Price: <span>{course.duration}</span></p>
              <p className='mb-15'>Stock: <span>{course.stock}</span></p>
              <p className="course-description mb-15">
                {course.description}
              </p>
              <p className="course-tags">
                Tags: {course.tags.map((tag:any, index:number) => (
                  <span key={index} className="category">{tag}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
