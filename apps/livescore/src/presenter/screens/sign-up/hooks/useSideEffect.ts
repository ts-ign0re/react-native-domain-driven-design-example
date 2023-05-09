import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export function useSideEffect(props) {
  const { navigate } = useNavigation();
  const { authentication } = props;
  const { token } = authentication;
  useEffect(() => {
    if (token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigate("choose-team");
    }
  }, [token, navigate]);
}