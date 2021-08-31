import React from 'react';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';
import { StyledHeading, StyledWrapper, StyledButtons, StyledTitle, StyledContent, StyledGrade } from './StudentDetails.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import RoundedButton from 'components/atoms/RoundedButton/RoundedButton';

const StudentDetails = ({ student }) => {
  return (
    <StyledWrapper>
      <StyledHeading>
        <StyledAverage isBig value={student.average}>
          {student.average}
        </StyledAverage>
        <StyledTitle>{student.name}</StyledTitle>
        <StyledButtons>
          <RoundedButton iconType={'docs'} isBig />
          <RoundedButton iconType={'message'} isBig />
          <RoundedButton iconType={'delete'} isBig />
        </StyledButtons>
      </StyledHeading>
      <StyledContent>
        {student.course && (
          <>
            <b>Course:</b>
            <h2>{student.course}</h2>
          </>
        )}

        {student.averageGrades && (
          <div>
            <b>Average grades</b>
            {student.averageGrades.map((grade, id) => {
              return (
                <StyledGrade key={id}>
                  <p>{grade.classesName}</p>

                  <StyledAverage value={grade.grade}>{grade.grade}</StyledAverage>
                </StyledGrade>
              );
            })}
          </div>
        )}
      </StyledContent>
    </StyledWrapper>
  );
};

export default StudentDetails;
