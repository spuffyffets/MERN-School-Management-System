import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <StyledImage src={Students} alt="students" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <StyledTitle>
                            Welcome to
                            <br />
                            School Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <StyledButton variant="contained" fullWidth>
                                    Login
                                </StyledButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <StyledOutlinedButton variant="outlined" fullWidth>
                                    Login as Guest
                                </StyledOutlinedButton>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#5D3FD3", fontWeight: "bold" }}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

// Styled Components
const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Ensures it works well on smaller screens */
    width: 100%;
    background: linear-gradient(135deg, #E8F6EF, #AED9E0, #5D3FD3);
    color: #252525;
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */
    overflow: hidden; /* Prevent unnecessary scrolling */
    box-sizing: border-box; /* Include padding/border in dimensions */
`;

// Paper with responsive height and padding
const StyledPaper = styled.div`
    padding: 16px 24px; /* Reduced padding for smaller screens */
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 90%; /* Responsive width */
    max-width: 600px; /* Constrain maximum width for larger screens */
`;

// Box with centered content
const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
    width: 100%;
`;

// Title with responsive font size
const StyledTitle = styled.h1`
    font-size: 2rem;
    color: #5D3FD3;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 0;
    @media (min-width: 768px) {
        font-size: 2.5rem; /* Increase size on larger screens */
    }
`;

// Paragraph with better spacing and alignment
const StyledText = styled.p`
    font-size: 1rem;
    color: #4F4F4F;
    line-height: 1.6;
    text-align: center;
    margin: 0 0 16px 0; /* Add bottom margin for spacing */
`;

// Responsive image
const StyledImage = styled.img`
    width: 80%; /* Adjust the width to 80% of its container */
    max-width: 800px; /* Set a larger max width */
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensure the image doesn't overflow */
    margin-left: 50px; /* Adds 50px of space from the left */
    padding: 0;
    box-sizing: border-box;
`;


// Gradient button with better hover effect
const StyledButton = styled(Button)`
    background: linear-gradient(90deg, #5D3FD3, #AED9E0);
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 8px;
    &:hover {
        background: linear-gradient(90deg, #AED9E0, #5D3FD3);
    }
`;

// Outlined button with hover effects
const StyledOutlinedButton = styled(Button)`
    color: #5D3FD3;
    border: 2px solid #5D3FD3;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 8px;
    &:hover {
        border-color: #AED9E0;
        color: #AED9E0;
    }
`;

// Link without underline
const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    color: #5D3FD3;
    &:hover {
        text-decoration: underline;
    }
`;

