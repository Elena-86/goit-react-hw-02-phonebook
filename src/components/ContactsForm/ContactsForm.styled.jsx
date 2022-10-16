import styled from '@emotion/styled';

export const FormContainer = styled.form`
  border: solid black;
  border-radius: 2%;

  height: 150px;
  width: 300px;
`;

export const FormLabel = styled.label`
  display: flex;
  margin-bottom: 20px;
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const FormInput = styled.input`
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  border: solid grey;
  border-radius: 4%;
`;

export const SubmitButton = styled.button`
  display: block;
  margin: auto;
`;
