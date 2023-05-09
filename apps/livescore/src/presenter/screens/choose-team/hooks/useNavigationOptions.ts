import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export function useNavigationOptions() {
  const { setOptions, navigate, goBack } = useNavigation();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const goToSignIn = () => navigate("sign-in");

  useEffect(() => {
    setOptions({
      headerTitle: '',
      headerLeft: () => null,
    })
  }, [setOptions]);

  return {
    goToSignIn,
    goBack,
  }
}