import React from "react";
import styled from "styled-components";
import Portada from "../../assets/Group 2818.png";
import StyledImage from "../../components/image/Image";
import StyledForm from "../../components/form/StyledForm";
import StyledInput from "../../components/input/StyledInput";
import Divider from "../../components/divider/Divider";
import StyledButton from "../../components/button/StyledButton";
import StyledTitle from "../../components/title/Title";
import { addRow } from "../../redux/vehicleSlice";
import { media } from "../../helpers/media";
import {  useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  items-align: center;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const SellerSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;

  ${media.desktop`

      grid-template-columns: 3fr 1fr;

  `}
`;

const VehicleSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${media.desktop`

      grid-template-columns:1fr 1fr 1fr;

  `}
`;

const CustomDivider = styled.div`
  position: absolute;
  width: 100%;
  top: 102px;

  ${media.desktop`

      top: 390px;  

  `}

  ${media.largeDesktop`
    top: 522px;
  `}
`;

const FormAction = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;

  ${media.desktop`

     justify-content: flex-end;


  `}
`;

const FormTextBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 3rem;
`;

export default function Formulario() {
  const dispatch = useDispatch();


  const [formData, setFormData] = React.useState({
    name: "",
    rut: "",
    plate: "",
    brand: "",
    model: "",
    color: "",
  });


  const validate = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name) {
      isValid = false;
    }

    if (!formData.rut){
      isValid = false;
    }

    if (!formData.plate){
      isValid = false;
    }

    if (!formData.brand){
      isValid = false;
    }

    if (!formData.model){
      isValid = false;
    }
    if (!formData.color){
      isValid = false;
    }

    return isValid;
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddVehicle = () => {
    if(!validate()){
      alert("Faltan campos por completar");
      return;
    }
    dispatch(addRow(formData));
    alert("Ingresado correctamente");
  };
  return (
    <Container>
      <StyledImage src={Portada} alt="portada" />
      <StyledForm>
        <FormTextBox>
          <StyledTitle variant="primary">Nuevo formulario</StyledTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iure
            tempore eaque assumenda, eum ipsum temporibus veniam, delectus
            doloremque quibusdam totam aperiam consectetur omnis. Sequi qui
            temporibus repudiandae nisi consequatur.
          </p>
        </FormTextBox>

        <StyledTitle variant="secondary">Datos del Vendedor</StyledTitle>

        <SellerSection>
          <StyledInput
            type="text"
            onChange={handleChange}  
            name="name"
            label="Nombre completo"
            required={true}


          />
          <StyledInput
            type="text"
            onChange={handleChange}
            name="rut"
            label="RUT vendedor"
            required={true}

          />
        </SellerSection>
        <Divider />
        <h2>Datos del Vehículo</h2>
        <VehicleSection>
          <StyledInput
            type="text"
            onChange={handleChange}
            name="plate"
            label="Patente Vehículo"
            required={true}

          />
          <StyledInput
            type="text"
            onChange={handleChange}
            name="brand"
            label="Marca Vehículo"
            required={true}

          />
          <StyledInput
            type="text"
            onChange={handleChange}
            name="model"
            label="Modelo Vehículo"
            required={true}

          />
          <StyledInput
            type="text"
            onChange={handleChange}
            name="color"
            label="Color Vehículo"
            required={true}

          />
        </VehicleSection>
        <Divider />
        <FormAction>
          <StyledButton type="button" onClick={handleAddVehicle}>
            Enviar
          </StyledButton>
        </FormAction>
      </StyledForm>
    </Container>
  );
}
