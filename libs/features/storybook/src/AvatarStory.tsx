import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
  HStack,
  Slide,
  VStack,
} from '@mylong.frontend/core-ui';
import { ComponentProps } from 'react';

const SIZES: ComponentProps<typeof Avatar>['size'][] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

export const AvatarStory = () => {
  return (
    <Slide
      //@ts-ignore
      isOpen={true}
    >
      <VStack space="md">
        <HStack space="md">
          {SIZES.map((size, index) => (
            <Avatar key={index} size={size}>
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
            </Avatar>
          ))}
        </HStack>
        <HStack space="md">
          {SIZES.map((size, index) => (
            <Avatar key={index} size={size}>
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
              <AvatarBadge />
            </Avatar>
          ))}
        </HStack>

        <HStack space="md">
          {SIZES.map((size, index) => (
            <Avatar key={index} size={size}>
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
              <AvatarBadge />
            </Avatar>
          ))}
        </HStack>

        {SIZES.map((size, index) => (
          <AvatarGroup flexDirection="row" key={index}>
            <Avatar size={size}>
              <AvatarFallbackText>+ 3</AvatarFallbackText>
            </Avatar>
            <Avatar size={size}>
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
            </Avatar>
            <Avatar size={size}>
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
            </Avatar>
            <Avatar size={size}>
              <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
              <AvatarBadge />
            </Avatar>
          </AvatarGroup>
        ))}
      </VStack>
    </Slide>
  );
};
