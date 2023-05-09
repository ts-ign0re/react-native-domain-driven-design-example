import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Fontawesome from 'react-native-vector-icons/FontAwesome';

export function useNavigationOptions() {
  const { goBack, setOptions, navigate } = useNavigation();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const goToChooseWindow = () => navigate('choose-sport');

  useEffect(() => {
    setOptions({
      headerTitle: 'LiveScore',
      headerTitleStyle: {
        fontWeight: '700',
      },
      headerLeft: () => (
        <TouchableOpacity onPress={goToChooseWindow}>
          <Fontawesome name="sliders" color={EStyleSheet.value('$label01')} size={EStyleSheet.value('20rem')} style={{ paddingLeft: EStyleSheet.value('16rem') }} />
        </TouchableOpacity>
      ),
      tabBarLabel: '',
      tabBarIcon: ({ color, size }) => <Fontawesome name="home" color={color} size={size * 1.2} />,
    });
  }, [setOptions]);

  return {
    goBack,
  }
}