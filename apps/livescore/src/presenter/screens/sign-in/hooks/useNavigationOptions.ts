import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export function useNavigationOptions() {
  const { setOptions, navigate, goBack } = useNavigation();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const goToSignUp = () => navigate("sign-up");

  useEffect(() => {
    setOptions({
      headerTitle: '',
    })
  }, [setOptions]);

  return {
    goToSignUp,
    goBack,
  }
}