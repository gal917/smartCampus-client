import React from "react";
import styled from "styled-components";


const StudentsPage = () => {
  return (
    <Container>
      <ProjectDescription>
        The Smart Campus project brings together students from different faculties in the college to produce a creative and innovative product.
      </ProjectDescription>
      <FacultySection>
        <FacultyTitle>Faculty of Engineering</FacultyTitle>
        <StudentList>
          <StudentItem>
            <StudentPhoto src="https://i.imgur.com/NNDd6h8.png" alt="Student photo" />
            <StudentName>John Doe</StudentName>
            <StudentTeam>Team A</StudentTeam>
          </StudentItem>
          <StudentItem>
            <StudentPhoto src="https://i.imgur.com/FDWo9.jpeg" alt="Student photo" />
            <StudentName>Jane Smith</StudentName>
            <StudentTeam>Team B</StudentTeam>
          </StudentItem>
          {/* Add more students */}
        </StudentList>
      </FacultySection>
      <FacultySection>
        <FacultyTitle>Faculty of Arts</FacultyTitle>
        <StudentList>
          <StudentItem>
            <StudentPhoto src="https://i.imgur.com/yqa5OAD.jpeg" alt="Student photo" />
            <StudentName>Bob Johnson</StudentName>
            <StudentTeam>Team C</StudentTeam>
          </StudentItem>
          <StudentItem>
            <StudentPhoto src="https://i.imgur.com/hNl0nhz.png" alt="Student photo" />
            <StudentName>Samantha Lee</StudentName>
            <StudentTeam>Team A</StudentTeam>
          </StudentItem>
          {/* Add more students */}
        </StudentList>
      </FacultySection>
      {/* Add more faculty sections */}
    </Container>
  );
};

export default StudentsPage;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const FacultySection = styled.section`
  margin-top: 40px;
`;

const FacultyTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StudentList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StudentItem = styled.li`
  width: calc(33.33% - 10px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StudentPhoto = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const StudentName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const StudentTeam = styled.p`
  font-size: 16px;
  margin: 0;
`;