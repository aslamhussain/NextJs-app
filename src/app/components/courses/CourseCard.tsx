import React from 'react';
import "../../styles/globals.css"
import "../../components/courses/coursestyle.css"
import Image from 'next/image';
import { CourseFormInputs } from '../../types'
import Link from 'next/link';

const CourseCard: React.FC<CourseFormInputs> = ({id, title, instructor, image, level, duration }) => {
  return (
    <div className="course-card">
      <div className='imageWrapper'>
        <Image src={image} alt={title} width={200} height={200} />
        <div className='duration'> <span>{duration}</span></div>
      </div>
      <div className='course__contents'>
        <div className='mb-15'><span className='category'>{level}</span></div>
        <h5 className='title ellipsis'>{title}</h5>
        <p className='mb-15 authorname'>by {instructor?.length > 0 ? instructor:"No Instructor"}</p>
        <div className='actionBtnArea'>
          <Link href={`/coursedetails/${id}`} className='view-details '>VIEW COURSE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
