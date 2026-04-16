import { useLocationStore } from '@/entities/location';
import { getWeatherIconByName } from '@/features/location/lib/getWeatherIconByName';
import { useTheme } from '@/shared/styles/theme';
import { Fonts } from '@/shared/styles/tokens';
import { BackButton } from '@/shared/ui/BackButton';
import { ScreenLayout } from '@/shared/ui/layout';
import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function LocationDetails() {
  const { theme } = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = useLocationStore.getState().getForecastHistoryById(+id);
  if (!item) return;

  const Icon = getWeatherIconByName(item.forecast.current?.icon);

  console.log('item', item);

  return (
    <ScreenLayout>
      <View style={styles.center}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <BackButton />
          </View>
          <Text style={[styles.title, { color: theme.text }]}>
            {item.location.name}
          </Text>
        </View>

        {Icon && <Icon width={140} height={140} />}

        <Text style={[styles.item, { color: theme.text }]}>
          {`${item.forecast.current?.temperature ?? '-'}°C`}
        </Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  backButton: {
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 24,
    position: 'relative',
    width: '100%',
  },
  item: {
    fontSize: Fonts.f26,
    marginTop: 20,
  },
  title: {
    fontSize: Fonts.f30,
    textAlign: 'center',
  },
});
