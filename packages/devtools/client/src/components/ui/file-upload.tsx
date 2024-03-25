import { FileUpload } from '@ark-ui/react/file-upload';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { fileUpload } from 'styled-system/recipes';
import { createStyleContext } from '~/lib/create-style-context';

const { withProvider, withContext } = createStyleContext(fileUpload);

export const Root = withProvider(styled(FileUpload.Root), 'root');
export const Dropzone = withContext(styled(FileUpload.Dropzone), 'dropzone');
export const Item = withContext(styled(FileUpload.Item), 'item');
export const ItemDeleteTrigger = withContext(
  styled(FileUpload.ItemDeleteTrigger),
  'itemDeleteTrigger',
);
export const ItemGroup = withContext(styled(FileUpload.ItemGroup), 'itemGroup');
export const ItemName = withContext(styled(FileUpload.ItemName), 'itemName');
export const ItemPreview = withContext(
  styled(FileUpload.ItemPreview),
  'itemPreview',
);
export const ItemPreviewImage = withContext(
  styled(FileUpload.ItemPreviewImage),
  'itemPreviewImage',
);
export const ItemSizeText = withContext(
  styled(FileUpload.ItemSizeText),
  'itemSizeText',
);
export const Label = withContext(styled(FileUpload.Label), 'label');
export const Trigger = withContext(styled(FileUpload.Trigger), 'trigger');

export type RootProps = ComponentProps<typeof Root>;
export type DropzoneProps = ComponentProps<typeof Dropzone>;
export type ItemProps = ComponentProps<typeof Item>;
export type ItemDeleteTriggerProps = ComponentProps<typeof ItemDeleteTrigger>;
export type ItemGroupProps = ComponentProps<typeof ItemGroup>;
export type ItemNameProps = ComponentProps<typeof ItemName>;
export type ItemPreviewProps = ComponentProps<typeof ItemPreview>;
export type ItemPreviewImageProps = ComponentProps<typeof ItemPreviewImage>;
export type ItemSizeTextProps = ComponentProps<typeof ItemSizeText>;
export type LabelProps = ComponentProps<typeof Label>;
export type TriggerProps = ComponentProps<typeof Trigger>;
