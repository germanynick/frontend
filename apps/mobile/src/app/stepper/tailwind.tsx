import {
  VStack,
  TStepper,
  TStepperItem,
  TStepperText,
  TStepperIcon,
  TStepperSlot,
  TStepperCircle,
  TStepperTitle,
  TStepperDescription,
  TStepperConnector,
} from '@mylong.frontend/core-ui';

import { Calendar, Check } from '@mylong.frontend/core-icons';
import { Meta, Title } from '@mylong.frontend/core-router';

const STEPS = [
  { icon: Check, title: 'Completed', states: { active: true } },
  { title: 'Focus', states: { focus: true } },
  { title: 'Hover', states: { hover: true } },
  { title: 'Disabled', states: { disabled: true } },
  { title: 'Default' },
  { icon: Calendar, title: 'Focus Icon', states: { focus: true } },
  { icon: Calendar, title: 'Hover Icon', states: { hover: true } },
  { icon: Calendar, title: 'Disabled Icon', states: { disabled: true } },
  { icon: Calendar, title: 'Default Icon' },
];

export const Stepper = () => {
  return (
    <>
      <Title>Stepper</Title>
      <Meta name="description" content="Stepper"></Meta>

      <VStack space="md">
        <TStepper>
          {STEPS.map(({ icon, title, states }, index) => (
            <TStepperItem key={index} states={states}>
              {index !== STEPS.length - 1 && <TStepperConnector />}
              <TStepperCircle>
                <TStepperSlot>{icon ? <TStepperIcon as={icon} /> : <TStepperText>{index}</TStepperText>}</TStepperSlot>
              </TStepperCircle>

              <TStepperTitle>{title}</TStepperTitle>
              <TStepperDescription>{title} Description</TStepperDescription>
            </TStepperItem>
          ))}
        </TStepper>

        <TStepper anchor="vertical">
          {STEPS.map(({ icon, title, states }, index) => (
            <TStepperItem key={index} states={states}>
              {index !== STEPS.length - 1 && <TStepperConnector />}
              <TStepperCircle>
                <TStepperSlot>{icon ? <TStepperIcon as={icon} /> : <TStepperText>{index}</TStepperText>}</TStepperSlot>
              </TStepperCircle>

              <TStepperTitle>{title}</TStepperTitle>
              <TStepperDescription>{title} Description</TStepperDescription>
            </TStepperItem>
          ))}
        </TStepper>
      </VStack>
    </>
  );
};

export default Stepper;
