import styled from 'styled-components';

export const FormContainer = styled.div`
form {
  min-width: 25rem;
}
@media (max-width: 768px) {
    form {
    min-width: 20rem;
    }
  }

 h6 {
  color: #4b286d;
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.5;
 }
  button {
    border-radius: 0.25rem;
    background-color: #248700;
    color: #fff;
    font-weight: 500;
    border: none;
    width: 50%
  }
  label {
    font-size: 1.4;
    color: #2a2c2e;
  }

`

