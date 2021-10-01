import styled from 'styled-components';

const Card = styled.div`
 background : #fff;
 margin-top: 1rem;
 transition: all 1s;
 position: relative; 
 box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
 transform: scaleY();
 .card-inner {
   padding:1rem;
 }
 .add-btn {
   border: 0;
   color: #000000;
   background-color: #eb1424;
   border-radius: 0.25rem;
 }
 .buy-btn {
   border: 0;
   color: #ffffff;
   background-color:#d67929;
   border-radius: 0.25rem;
 }
 
 &:hover {
  transform: scaleY(1.01);
  box-shadow: 0.625rem 1.25rem 2.5rem 0 rgba(0, 0, 0, 0.8);
}
`

export default Card;