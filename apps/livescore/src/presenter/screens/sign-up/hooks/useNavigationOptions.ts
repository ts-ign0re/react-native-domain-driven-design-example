import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export function useNavigationOptions() {
  const { setOptions, navigate, goBack } = useNavigation();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const goToSignIn = () => navigate("sign-in");

  useEffect(() => {
    setOptions({
      // headerShown: false,
      headerTitle: '',
    })
  }, [setOptions]);

  return {
    goToSignIn,
    goBack,
  }
}