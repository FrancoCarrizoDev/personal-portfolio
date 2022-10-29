import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Link,
	Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { consoleText } from "../helpers/textAnimation";

const dataAnimationText = [
	"Hi!",
	"Nice to meet you!",
	"Welcome to my personal portfolio!",
];
const colors = ["#ED64A6", "#38B2AC", "#4A5568"];

export const Greeting = () => {
	useEffect(() => {
		consoleText(dataAnimationText, "text", colors);
		return () => {
			const interval_id = window.setInterval(function () {}, 1000);

			for (let i = 1; i < interval_id; i++) {
				window.clearInterval(i);
			}
		};
	}, []);
	return (
		<Flex flexDir={"column"} minH={"100vh"}>
			<Container
				maxWidth={"5xl"}
				pt={{ base: 10 }}
				id="greeting-container"
				flex="1"
			>
				<Flex
					align={{ base: "flex-start", md: "center" }}
					justify={{ base: "flex-start", md: "center" }}
					w="100%"
					pt={{ base: 10 }}
				>
					<Flex
						justify={{ base: "center", md: "center" }}
						pt={{ base: "10" }}
						px={"2"}
						w={"100%"}
					>
						<Flex
							flexDir={"column"}
							h={"100%"}
							justifyContent={{ base: 0, md: "center" }}
							maxWidth={"5xl"}
						>
							<Box
								mt={{ base: 4, xl: 0, "2xl": 10 }}
								className="console-container"
								as={"div"}
							>
								<Text
									id="text"
									as={"span"}
									color={"pink.400"}
									fontFamily={"heading"}
									fontWeight="500"
									fontSize={{ base: "md", md: "18px" }}
								/>
								<Box
									className="console-underscore"
									id="console"
									as={"div"}
								>
									&#95;
								</Box>
							</Box>
							<Heading
								as="h1"
								fontSize={{
									base: "4xl",
									md: "5xl",
									"2xl": "6xl",
								}}
								mt={4}
								color={"pink.400"}
							>
								My name is Fran.
							</Heading>
							<Heading
								as="h2"
								fontSize={{
									base: "4xl",
									md: "5xl",
									"2xl": "6xl",
								}}
								mt={4}
								color={"teal.400"}
							>
								I build solutions for the web.
							</Heading>
							<Text
								color={"gray.600"}
								mt={4}
								maxWidth={"lg"}
								fontWeight={"medium"}
								fontSize={{
									base: "15px",
									md: "md",
									lg: "17px",
								}}
								as={"div"}
								className="greeting-body-container"
							>
								<Text>
									I'm <Text as="b">a software engineer</Text>{" "}
									specialized in building (and occasionally
									designing){" "}
									<Text as="b">
										web-based technology solutions
									</Text>
									. Currently, I'm focused on building
									platforms for universities in my city at{" "}
									<Link
										href="https://bitlogic.io"
										isExternal
										title="I work in this company"
									>
										Bitlogic
									</Link>
									.
								</Text>
							</Text>
							<Button
								colorScheme={"teal"}
								variant="outline"
								mt={10}
								size="lg"
								fontFamily={"Roboto Mono"}
								maxWidth={"xs"}
								as={"a"}
								href="#about-me"
								zIndex={0}
								className="greeting-button"
								_hover={{
									backgroundColor: "teal.500",
									color: "whiteAlpha.900",
								}}
							>
								<Text fontWeight={"normal"} fontSize={"md"}>
									About me !
								</Text>
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Container>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#6141aeb3"
					fill-opacity="1"
					d="M0,128L48,122.7C96,117,192,107,288,133.3C384,160,480,224,576,250.7C672,277,768,267,864,218.7C960,171,1056,85,1152,69.3C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
		</Flex>
	);
};
