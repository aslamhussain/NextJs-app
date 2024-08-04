import React, { useState } from 'react';
import { CourseCard, Layout, CourseForm } from '../app/components';
import { useCourses } from '../app/hooks/useCourses';
import { coursesDataTransform } from '../app/utils/apiCourseData';
import Loader from '@/app/components/loader';
import Nodatafound from '@/app/components/notfound';
import searchIcon from '../public/images/search.png'
import Image from 'next/image';

const Home: React.FC = () => {
  const { data: products, isLoading, error } = useCourses();
  const [searchTerm, setSearchTerm] = useState('');

  const courses = products ? coursesDataTransform(products) : [];

  const filteredCourses = courses?.filter((course: { title: string }) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading courses</p>;

  return (
    <Layout>
      <div className='container'>
        <div className='course__search__section flexProps'>
          <h3>Courses</h3>
          <figcaption className='relative'>
            <input
              type="text"
              placeholder="Search course by name"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Image src={searchIcon} className='searchIcon' alt='searchicon' width={20} height={20} />
          </figcaption>

        </div>
        <hr />
        <div className='search-result-count'>
          {searchTerm ? (
            <h4>{filteredCourses.length} {searchTerm} Courses found </h4>
          ) : (
            <h4>{filteredCourses.length} Courses found</h4>
          )}
        </div>
        {filteredCourses?.length > 0 ? (
          <div className='course-list'>
            {filteredCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <Nodatafound />
        )}

        {/* <h2>Add a new course</h2> */}
        {/* <CourseForm /> */}
      </div>

    </Layout>
  );
};

export default Home;
