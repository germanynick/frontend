import {
  VStack,
  GStepper,
  GStepperItem,
  GStepperText,
  GStepperIcon,
  GStepperSlot,
  GStepperCircle,
  GStepperTitle,
  GStepperDescription,
  GStepperConnector,
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
        <GStepper>
          {STEPS.map(({ icon, title, states }, index) => (
            <GStepperItem key={index} states={states}>
              {index !== STEPS.length - 1 && <GStepperConnector />}
              <GStepperCircle>
                <GStepperSlot>{icon ? <GStepperIcon as={icon} /> : <GStepperText>{index}</GStepperText>}</GStepperSlot>
              </GStepperCircle>

              <GStepperTitle>{title}</GStepperTitle>
              <GStepperDescription>{title} Description</GStepperDescription>
            </GStepperItem>
          ))}
        </GStepper>

        <GStepper anchor="vertical">
          {STEPS.map(({ icon, title, states }, index) => (
            <GStepperItem key={index} states={states}>
              {index !== STEPS.length - 1 && <GStepperConnector />}
              <GStepperCircle>
                <GStepperSlot>{icon ? <GStepperIcon as={icon} /> : <GStepperText>{index}</GStepperText>}</GStepperSlot>
              </GStepperCircle>

              <GStepperTitle>{title}</GStepperTitle>
              <GStepperDescription>{title} Description</GStepperDescription>
            </GStepperItem>
          ))}
        </GStepper>
      </VStack>
    </>
  );
};

export default Stepper;
