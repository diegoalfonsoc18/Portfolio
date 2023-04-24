import { SectionMain, FormContainer, FormUl, FormLi } from "./Form.elements";

const FormSection = () => {
  return (
    <SectionMain>
      <FormContainer>
        <FormUl>
          <FormLi>Mail</FormLi>
          <FormLi>Diego</FormLi>
          <FormLi>Alfonos</FormLi>
          <FormLi>Castillo</FormLi>
        </FormUl>
      </FormContainer>
    </SectionMain>
  );
};

export default FormSection;
