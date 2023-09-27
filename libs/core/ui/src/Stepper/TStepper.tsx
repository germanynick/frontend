import { FC, createContext, useContext } from 'react';
import { View as BaseView, Text as BaseText, Platform } from 'react-native';
import { tv } from 'tailwind-variants';
import { enableCSSInterop } from 'react-native-css-interop';

const View = enableCSSInterop(BaseView, { className: 'style' });
const Text = enableCSSInterop(BaseText, { className: 'style' });

const createStyles = tv({
  slots: {
    root: 'flex flex-row justify-between items-center',
    item: 'relative flex flex-1 flex-col justify-center items-center cursor-pointer',
    circle: 'w-[48px] h-[48px] border border-content-medium rounded-full bg-white flex justify-center items-center',
    slot: 'w-[42px] h-[42px] rounded-full flex justify-center items-center',
    title: 'text-sm text-center font-body font-bold text-content-very-dark leading-5 self-center truncate w-full ',
    description:
      'text-sm text-center font-body font-normal text-content-very-dark leading-5 self-center truncate w-full ',
    text: 'text-base font-body font-semibold text-content-very-dark',
    icon: '',
    connector: 'absolute h-[1px] w-3/5 bg-content-light top-[24px] left-[70%] z-[-1]',
  },
  variants: {
    anchor: {
      vertical: {
        root: 'flex-col',
        item: 'relative w-full h-[80px] items-start py-[16px]',
        title: 'absolute text-start top-[20px] left-0 pl-[64px] w-full',
        description: 'absolute text-start top-[42px] left-0 pl-[64px] w-full',
        connector: 'top-[68px] left-[24px] h-[24px] w-[1px]',
      },
    },
    active: {
      true: {
        circle: 'bg-primary-medium border-none',
        text: 'text-white',
        icon: 'text-white',
        connector: 'bg-primary-medium',
      },
    },
    focus: {
      true: {
        circle: 'bg-primary-very-light border-primary-light',
        slot: 'bg-primary-medium',
        text: 'text-white',
        icon: 'text-white',
        connector: 'bg-primary-medium',
      },
    },
    hover: {
      true: {
        circle: 'bg-primary-very-light border-primary-medium ',
        text: 'text-primary-medium',
        icon: 'text-primary-medium',
        connector: 'bg-primary-medium',
      },
    },
    disabled: {
      true: {
        item: 'cursor-not-allowed',
        circle: 'bg-content-light border-none',
        text: 'text-white',
        icon: 'text-white',
      },
    },
  },
});

const { root, item, circle, slot, title, description, text, icon, connector } = createStyles();

const TStepperContext = createContext<any>({});
const DItemContext = createContext<any>({});

export const TStepper: FC<any> = ({ className, anchor, ...props }) => {
  return (
    <TStepperContext.Provider value={{ anchor }}>
      <View className={root({ className, anchor })} {...props} />
    </TStepperContext.Provider>
  );
};

export const TStepperItem: FC<any> = ({ className, states, ...props }) => {
  const variants = useContext(TStepperContext);
  return (
    <DItemContext.Provider value={states}>
      <View className={item({ className, ...states, ...variants })} {...props} />
    </DItemContext.Provider>
  );
};

export const TStepperCircle: FC<any> = ({ className, ...props }) => {
  const states = useContext(DItemContext);

  return <View className={circle({ className, ...states })} {...props} />;
};

export const TStepperSlot: FC<any> = ({ className, ...props }) => {
  const states = useContext(DItemContext);

  return <View className={slot({ className, ...states })} {...props} />;
};

export const TStepperTitle: FC<any> = ({ className, ...props }) => {
  const variants = useContext(TStepperContext);
  return <Text className={title({ className, ...variants })} numberOfLines={1} ellipsizeMode="tail" {...props} />;
};

export const TStepperDescription: FC<any> = ({ className, ...props }) => {
  const variants = useContext(TStepperContext);
  return <Text className={description({ className, ...variants })} numberOfLines={1} ellipsizeMode="tail" {...props} />;
};

export const TStepperIcon: FC<any> = ({ as: Icon, className, ...props }) => {
  const states = useContext(DItemContext);

  if (Icon) {
    return <Icon className={icon({ className, ...states })} {...props} />;
  }

  return <View className={icon({ className })} {...props} />;
};

export const TStepperText: FC<any> = ({ className, ...props }) => {
  const states = useContext(DItemContext);

  return <Text className={text({ className, ...states })} {...props} />;
};

export const TStepperConnector: FC<any> = ({ className, ...props }) => {
  const variants = useContext(TStepperContext);
  const states = useContext(DItemContext);

  return <View className={connector({ className, ...states, ...variants })} {...props} />;
};
