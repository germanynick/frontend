import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  Icon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectItem,
  SelectDragIndicator,
  VStack,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  Popover,
  PopoverBackdrop,
  PopoverContent,
  Pressable,
  Box,
  Text,
  ScrollView,
} from '@mylong.frontend/core-ui';
import { ChevronDown, Search } from '@mylong.frontend/core-icons';
import { useDebounce } from '@mylong.frontend/core-hooks';
import { useState } from 'react';

export const SelectStory = () => {
  const [width, setWidth] = useState<number>();
  const throttleWidth = useDebounce(width, { wait: 500, leading: true, trailing: true });

  return (
    <VStack>
      <Popover
        placement="bottom"
        trigger={(triggerProps, { open }) => {
          return (
            <Box position="relative" onLayout={(event) => setWidth(event.nativeEvent.layout.width)}>
              <Input isReadOnly={true} states={{ focus: open }}>
                <InputField placeholder="Select Option" />
                <InputSlot>
                  <InputIcon as={ChevronDown} />
                </InputSlot>
              </Input>
              <Pressable position="absolute" width="$full" height="$full" top={0} left={0} {...triggerProps} />
            </Box>
          );
        }}
      >
        <PopoverBackdrop backgroundColor="transparent" />
        <PopoverContent width={throttleWidth} maxWidth={throttleWidth} backgroundColor="$white">
          <Box padding="$3">
            <Input size="sm">
              <InputSlot>
                <InputIcon as={Search} />
              </InputSlot>
              <InputField placeholder="Search" />
            </Input>
            <ScrollView maxHeight={250}>
              <VStack space="md" marginTop="$3">
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
                <Text>Demo Select Item</Text>
              </VStack>
            </ScrollView>
          </Box>
        </PopoverContent>
      </Popover>

      <Select>
        <SelectTrigger size="md">
          <SelectInput placeholder="Select option" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
            <SelectItem label="Cross Platform Development Process" value="Cross Platform Development Process" />
            <SelectItem label="UI Designing" value="ui" isDisabled={true} />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </VStack>
  );
};
