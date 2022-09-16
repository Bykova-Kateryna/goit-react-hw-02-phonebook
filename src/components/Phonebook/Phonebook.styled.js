import styled from 'styled-components';

export const PhoneBoockSection = styled.section`
  padding: 15px;
  background-color: #e4e4e4;
`;

export const ContactFofmSection = styled.div`
  background-color: #fff;
  max-width: 350px;
  text-align: center;
  padding: 15px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Fofm = styled.form`
  border: 10px solid transparent;
  color: #605756;
`;

export const FormLabel = styled.label`
  margin-right: 15px;
`;

export const FormInput = styled.input`
  width: 75%;
  &:hover,
  &:focus {
    border: 2px solid #1d88c5;
  }
`;
export const FormBtn = styled.button`
  margin-top: 15px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #1d88c5;
  }
`;

export const FilterSection = styled.div`
  background-color: #fff;
  padding: 15px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  margin-bottom: 15px;
  max-width: 350px;
`;

export const FilterSectionLabel = styled.label`
  display: flex;
`;

export const FilterSectionInput = styled.input`
  width: 100%;
  &:hover,
  &:focus {
    border: 2px solid #1d88c5;
  }
`;

export const ContactListSection = styled.ol`
  background-color: #fff;
  padding-rigth: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin-top: 15px;
  max-width: 350px;
`;

export const ContactListItem = styled.li`
  margin-top: 15px;
`;

export const DeleteBtn = styled.button`
  margin-left: 15px;
  cursor: pointer;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #1d88c5;
  }
`;
