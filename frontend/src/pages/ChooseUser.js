import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

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
        const email = "yogendra@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Adminlogin');
      }
    } else if (user === "Student") {
      if (visitor === "guest") {
        const rollNum = "1";
        const studentName = "Dipesh Awasthi";
        const fields = { rollNum, studentName, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Studentlogin');
      }
    } else if (user === "Teacher") {
      if (visitor === "guest") {
        const email = "tony@12";
        const fields = { email, password };
        setLoader(true);
        dispatch(loginUser(fields, user));
      } else {
        navigate('/Teacherlogin');
      }
    }
  };

  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      } else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    } else if (status === 'error') {
      setLoader(false);
      setMessage("Network Error");
      setShowPopup(true);
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper onClick={() => navigateHandler("Admin")}>
              <Box mb={3}>
                <AccountCircle fontSize="large" />
              </Box>
              <StyledTypography variant="h6">
                Admin
              </StyledTypography>
              <StyledDescription>
                Login as an administrator to access the dashboard to manage app data.
              </StyledDescription>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper onClick={() => navigateHandler("Student")}>
              <Box mb={3}>
                <School fontSize="large" />
              </Box>
              <StyledTypography variant="h6">
                Student
              </StyledTypography>
              <StyledDescription>
                Login as a student to explore course materials and assignments.
              </StyledDescription>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper onClick={() => navigateHandler("Teacher")}>
              <Box mb={3}>
                <Group fontSize="large" />
              </Box>
              <StyledTypography variant="h6">
                Teacher
              </StyledTypography>
              <StyledDescription>
                Login as a teacher to create courses, assignments, and track student progress.
              </StyledDescription>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
        <CircularProgress color="inherit" />
        Please Wait...
      </Backdrop>

      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: linear-gradient(135deg, #5D3FD3, #3E9FB9);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5; /* Light gray for better contrast */
  color: #000000; /* Black text for visibility */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Subtle shadow */

  &:hover {
    background-color: #e0e0e0; /* Slightly darker gray on hover */
    color: #000000; /* Keep black text */
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 15px;
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000; /* Ensure text is always black */
`;

const StyledDescription = styled.p`
  color: rgba(0, 0, 0, 0.7); /* Slightly faded black for description */
  font-size: 0.95rem;
  margin-top: 10px;
`;
