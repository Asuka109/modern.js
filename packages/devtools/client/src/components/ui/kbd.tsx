import { ark } from '@ark-ui/react/factory';
import type { ComponentProps } from 'react';
import { styled } from 'styled-system/jsx';
import { kbd } from 'styled-system/recipes';

export const Kbd = styled(ark.kbd, kbd);
export type KbdProps = ComponentProps<typeof Kbd>;
