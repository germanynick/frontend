import { GStepper, GStepperItem, GStepperText, GStepperIcon, GStepperSlot } from '@mylong.frontend/core-ui';

import { Calendar } from '@mylong.frontend/core-icons';

export const Stepper = () => {
  return (
    <GStepper>
      <GStepperItem>
        <GStepperSlot>
          <GStepperText>1</GStepperText>
        </GStepperSlot>
      </GStepperItem>
      <GStepperItem>
        <GStepperSlot>
          <GStepperText>2</GStepperText>
        </GStepperSlot>
      </GStepperItem>
      <GStepperItem>
        <GStepperSlot>
          <GStepperText>3</GStepperText>
        </GStepperSlot>
      </GStepperItem>
      <GStepperItem>
        <GStepperSlot>
          <GStepperIcon as={Calendar} />
        </GStepperSlot>
      </GStepperItem>
    </GStepper>
  );
};

export default Stepper;
