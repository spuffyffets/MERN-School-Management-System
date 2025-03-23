import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import { Container, CircularProgress, Backdrop } from '@mui/material';
import styled from 'styled-components';
import Popup from '../components/Popup';
import adminIcon from '../assets/admin.svg';
import studentIcon from '../assets/student-logo.svg';
import teacherIcon from '../assets/teacher-001.svg';
import logo from '../assets/school.svg';

const ChooseUser = ({ visitor }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = "zxc";

  const { status, currentUser, currentRole } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (user) => {
    if (user === "Admin") {
      if (visitor === "guest") {
        const fields = { email: "yogendra@12", password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === "Student") {
      if (visitor === "guest") {
        const fields = { rollNum: "1", studentName: "Dipesh Awasthi", password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === "Teacher") {
      if (visitor === "guest") {
        const fields = { email: "tony@12", password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      navigate(`/${currentRole}/dashboard`);
    } else if (status === 'error') {
      setLoader(false);
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <MainContainer>
      <Logo src={logo} alt="App Logo" />
      <UserContainer>
        <UserCard onClick={() => navigateHandler("Admin")}>
          <UserIcon src={adminIcon} alt="Admin Icon" />
          <UserTitle>Admin</UserTitle>
          <UserDesc>Manage system settings and users.</UserDesc>
        </UserCard>

        <UserCard onClick={() => navigateHandler("Student")}>
          <UserIcon src={studentIcon} alt="Student Icon" />
          <UserTitle>Student</UserTitle>
          <UserDesc>Access courses, assignments, and resources.</UserDesc>
        </UserCard>

        <UserCard onClick={() => navigateHandler("Teacher")}>
          <UserIcon src={teacherIcon} alt="Teacher Icon" />
          <UserTitle>Teacher</UserTitle>
          <UserDesc>Manage courses and student progress.</UserDesc>
        </UserCard>
      </UserContainer>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </MainContainer>
  );
};

export default ChooseUser;

const MainContainer = styled.div`
   background: linear-gradient(135deg, #E8F6EF, #AED9E0, #5D3FD3);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const Logo = styled.img`
  margin-top:-150px;
  width: 150px;
  margin-bottom: 2rem;
`;

const UserContainer = styled.div`
  margin-top:100px;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const UserCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #4B4B4B;
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const UserIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const UserTitle = styled.h2`
  font-size: 1.5rem;
  color: #FFFFFF;
`;

const UserDesc = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
`;
