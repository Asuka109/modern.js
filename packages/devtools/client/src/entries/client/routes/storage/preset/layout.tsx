import { Outlet, useMatch, useNavigate } from '@modern-js/runtime/router';
import { Badge, Box, Flex, Text } from '@radix-ui/themes';
import { FlexProps } from '@radix-ui/themes/dist/cjs/components/flex';
import _ from 'lodash';
import { FC } from 'react';
import { HiMiniFlag, HiPlus } from 'react-icons/hi2';
import { snapshot, useSnapshot } from 'valtio';
import { watch } from 'valtio/utils';
import styles from './page.module.scss';
import { STORAGE_TYPE_PALETTE, unwindPreset, UnwindPreset } from './shared';
import { Card } from '@/components/Card';
import { $server, $serverExported } from '@/entries/client/routes/state';
import { useThrowable } from '@/utils';

interface CardButtonProps extends FlexProps {
  selected?: boolean;
  to?: string;
}

const CardButton: FC<CardButtonProps> = props => {
  const { selected, to, ...rest } = props;
  const navigate = useNavigate();
  const match = useMatch(to ?? '');
  const _selected = selected ?? Boolean(match);

  return (
    <Card
      variant="small"
      selected={_selected}
      clickable={true}
      asChild
      onClick={() => to && navigate(to)}
    >
      <Flex {...rest} />
    </Card>
  );
};

interface PresetCardProps extends CardButtonProps {
  preset: UnwindPreset;
}

const PresetCard: FC<PresetCardProps> = props => {
  const { preset, ...rest } = props;
  const isSaved = !preset.filename.match(/[/\\]node_modules[/\\]/);

  return (
    <CardButton direction="column" {...rest}>
      <Text size="1" weight="bold" as="p" mb="2">
        {preset.name}{' '}
        {isSaved || (
          <Text size="1" color="gray">
            *
          </Text>
        )}
      </Text>
      <Flex align={'center'}>
        <Flex className={styles.previewBadgeList}>
          {preset.items.length === 0 && <Badge color="gray">Empty</Badge>}
          {preset.items.map(item => (
            <Badge key={item.id} color={STORAGE_TYPE_PALETTE[item.type]}>
              {item.key}: {item.value}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </CardButton>
  );
};

const Page: FC = () => {
  const { storagePresets } = useSnapshot($serverExported).context;
  const server = useThrowable($server);
  const navigate = useNavigate();
  const freq = {
    cookie: _(storagePresets)
      .flatMap(preset => _.keys(preset.cookie))
      .countBy()
      .value(),
    localStorage: _(storagePresets)
      .flatMap(preset => _.keys(preset.localStorage))
      .countBy()
      .value(),
    sessionStorage: _(storagePresets)
      .flatMap(preset => _.keys(preset.sessionStorage))
      .countBy()
      .value(),
  };
  const unwindPresets: UnwindPreset[] = storagePresets.map(preset => ({
    id: preset.id,
    name: preset.name,
    filename: preset.filename,
    items: _(unwindPreset(preset))
      .sortBy(item => freq[item.type][item.key] ?? 0)
      .reverse()
      .value(),
  }));

  const handleCreatePreset = async () => {
    const newPreset = await server.remote.createTemporaryStoragePreset();
    const { id } = newPreset;
    const unwatch = watch(get => {
      const { storagePresets } = snapshot(get($serverExported)).context;
      const preset = _.find(storagePresets, { id });
      if (preset) {
        unwatch();
        navigate(`/storage/preset/${id}`);
      }
    });
  };

  return (
    <Flex width="100%" pt="4" className={styles.container}>
      <Flex direction="column" className={styles.sidePanel}>
        <CardButton to="/storage/preset" m="2" align="center" gap="1">
          <Text size="1" weight="bold">
            Current Storage
          </Text>
          <Text size="1" color="red" asChild>
            <HiMiniFlag />
          </Text>
        </CardButton>
        <Box mx="2" className={styles.divider} />
        <Flex p="2" direction="column" gap="2" className={styles.presetList}>
          {unwindPresets.map(preset => (
            <PresetCard
              key={preset.id}
              to={`/storage/preset/${preset.id}`}
              preset={preset}
            />
          ))}
          <CardButton
            justify="center"
            align="center"
            onClick={handleCreatePreset}
            className={styles.btnCreatePreset}
          >
            <HiPlus />
          </CardButton>
        </Flex>
      </Flex>
      <Box width="0" grow="1" shrink="1" pt="2">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Page;
