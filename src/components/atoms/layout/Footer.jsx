import styled from "styled-components";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const Footer = () => {
  return (
    <SFooter>
      <SApartmentIcon /> Hiroharu Tanaka's company
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #b0e0e6;
  color: #000;
  text-align: center;
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const SApartmentIcon = styled(ApartmentIcon)`
  margin: 0.5px auto;
`;
