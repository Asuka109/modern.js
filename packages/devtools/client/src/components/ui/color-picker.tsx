import { ColorPicker } from '@ark-ui/react/color-picker';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { colorPicker } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(colorPicker);

export const Root = withProvider(styled(ColorPicker.Root), 'root');
export const Area = withContext(styled(ColorPicker.Area), 'area');
export const AreaBackground = withContext(
  styled(ColorPicker.AreaBackground),
  'areaBackground',
);
export const AreaThumb = withContext(
  styled(ColorPicker.AreaThumb),
  'areaThumb',
);
export const ChannelInput = withContext(
  styled(ColorPicker.ChannelInput),
  'channelInput',
);
export const ChannelSlider = withContext(
  styled(ColorPicker.ChannelSlider),
  'channelSlider',
);
export const ChannelSliderThumb = withContext(
  styled(ColorPicker.ChannelSliderThumb),
  'channelSliderThumb',
);
export const ChannelSliderTrack = withContext(
  styled(ColorPicker.ChannelSliderTrack),
  'channelSliderTrack',
);
export const Content = withContext(styled(ColorPicker.Content), 'content');
export const Control = withContext(styled(ColorPicker.Control), 'control');
export const EyeDropperTrigger = withContext(
  styled(ColorPicker.EyeDropperTrigger),
  'eyeDropperTrigger',
);
export const FormatSelect = withContext(
  styled(ColorPicker.FormatSelect),
  'formatSelect',
);
export const FormatTrigger = withContext(
  styled(ColorPicker.FormatTrigger),
  'formatTrigger',
);
export const Label = withContext(styled(ColorPicker.Label), 'label');
export const Positioner = withContext(
  styled(ColorPicker.Positioner),
  'positioner',
);
export const Swatch = withContext(styled(ColorPicker.Swatch), 'swatch');
export const SwatchGroup = withContext(
  styled(ColorPicker.SwatchGroup),
  'swatchGroup',
);
export const SwatchIndicator = withContext(
  styled(ColorPicker.SwatchIndicator),
  'swatchIndicator',
);
export const SwatchTrigger = withContext(
  styled(ColorPicker.SwatchTrigger),
  'swatchTrigger',
);
export const TransparencyGrid = withContext(
  styled(ColorPicker.TransparencyGrid),
  'transparencyGrid',
);
export const Trigger = withContext(styled(ColorPicker.Trigger), 'trigger');
export const ValueText = withContext(
  styled(ColorPicker.ValueText),
  'valueText',
);
export const View = withContext(styled(ColorPicker.View), 'view');

export type RootProps = ComponentProps<typeof Root>;
export type AreaProps = ComponentProps<typeof Area>;
export type AreaBackgroundProps = ComponentProps<typeof AreaBackground>;
export type AreaThumbProps = ComponentProps<typeof AreaThumb>;
export type ChannelInputProps = ComponentProps<typeof ChannelInput>;
export type ChannelSliderProps = ComponentProps<typeof ChannelSlider>;
export type ChannelSliderThumbProps = ComponentProps<typeof ChannelSliderThumb>;
export type ChannelSliderTrackProps = ComponentProps<typeof ChannelSliderTrack>;
export type ContentProps = ComponentProps<typeof Content>;
export type ControlProps = ComponentProps<typeof Control>;
export type EyeDropperTriggerProps = ComponentProps<typeof EyeDropperTrigger>;
export type FormatSelectProps = ComponentProps<typeof FormatSelect>;
export type FormatTriggerProps = ComponentProps<typeof FormatTrigger>;
export type LabelProps = ComponentProps<typeof Label>;
export type PositionerProps = ComponentProps<typeof Positioner>;
export type SwatchProps = ComponentProps<typeof Swatch>;
export type SwatchGroupProps = ComponentProps<typeof SwatchGroup>;
export type SwatchIndicatorProps = ComponentProps<typeof SwatchIndicator>;
export type SwatchTriggerProps = ComponentProps<typeof SwatchTrigger>;
export type TransparencyGridProps = ComponentProps<typeof TransparencyGrid>;
export type TriggerProps = ComponentProps<typeof Trigger>;
export type ValueTextProps = ComponentProps<typeof ValueText>;
export type ViewProps = ComponentProps<typeof View>;
