import React from "react";

import author from "../../assets/author.png";
import rating from "../../assets/rating.png";
import title from "../../assets/title.png";
import deleteBtn from "../../assets/delete.png";

import "./courses-list.style.css";

const CoursesList = ({ courses, handleRemoveCourse }) => {
  return (
    <div className="courses-list">
      <h2 className="list">List Of Courses</h2>
      {courses &&
        courses.map((course) => {
          return (
            <div key={course.id} className="info">
              <h3 className="course-title">
                <span>
                  <img className="title-img" src={title} alt="" />{" "}
                </span>
                {course.title}
              </h3>
              <h3 className="author">
                <span>
                  <img className="author-img" src={author} alt="" />{" "}
                </span>{" "}
                {course.author}
              </h3>
              <h3 className="rating">
                <span>
                  <img className="rating-img" src={rating} alt="" />{" "}
                </span>
                {course.rating}
              </h3>
              <a href={course.url} className="link" target="_blank">
                View
              </a>
              <button
                className="btn"
                onClick={() => handleRemoveCourse(course)}
              >
                <img className="delete-btn" src={deleteBtn} alt="" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CoursesList;
