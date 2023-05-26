import {
  ChakraProvider,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  extendTheme,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-31px)",
};
const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 2,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInputHandler = (e) => setEmail(e.target.value);
  const pwInputHandler = (e) => setPassword(e.target.value);

  return (
    <ChakraProvider theme={theme}>
      <div className="container max-w-[390px] mx-auto flex flex-col items-center justify-center">
        <h1 className="font-main font-bold text-[44px] mt-[147px]">Jobtify</h1>
        <form>
          <Center mt="65px">
            <FormControl variant="floating" id="email">
              <FormLabel>이메일</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={emailInputHandler}
                placeholder=" "
                w="340px"
                h="56px"
              />
              <FormErrorMessage>올바른 이메일을 입력해주세요.</FormErrorMessage>
            </FormControl>
          </Center>
          <Center mt="16px">
            <FormControl variant="floating" id="password" isRequired>
              <FormLabel>비밀번호</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={pwInputHandler}
                placeholder=" "
                w="340px"
                h="56px"
              />
              <FormErrorMessage>
                올바른 비밀번호를 입력 해주세요.
              </FormErrorMessage>
            </FormControl>
          </Center>
          <button
            type="submit"
            className="mt-[30px] bg-red hover:bg-red2 text-white font-main text-[20px] font-bold w-[340px] h-[56px] rounded-md"
          >
            로그인
          </button>
        </form>
      </div>
    </ChakraProvider>
  );
};

export default LoginPage;