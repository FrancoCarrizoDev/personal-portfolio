import { Button, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

export const Contact = () => {
	return (
		<Container maxWidth={"5xl"} pt={"100px"} pb={"200px"} id="contact">
			<Flex align={"center"} mt={4} justify="center">
				<Flex align={"baseline"}>
					<Text
						as={"span"}
						fontSize={{ base: "md", md: "18px" }}
						color={"pink.400"}
						fontFamily={"Roboto Mono"}
					>
						03.
					</Text>
					<Heading
						as="h2"
						ps={1}
						pe={4}
						fontSize={"xl"}
						color={"gray.700"}
					>
						What's Next?
					</Heading>
				</Flex>
			</Flex>
			<Flex
				direction={"column"}
				align="center"
				justify={"center"}
				gap="md"
			>
				<Heading as="h3" fontSize={"4xl"} color={"gray.700"} mt={10}>
					Get In Touch
				</Heading>
				<Text
					as="p"
					fontSize={"md"}
					color={"gray.700"}
					maxW={"lg"}
					mt={10}
				>
					I am currently looking for new opportunities, my inbox is open. If you have any questions or just want to say hi, I'll do my best to answer you!
				</Text>
				<Button
					colorScheme="pink"
					color={"pink.400"}
					variant="outline"
					mt={10}
					size="lg"
					fontFamily={"Roboto Mono"}
					maxWidth={"xs"}
					as={"span"}
					zIndex={0}
					cursor="pointer"
					className="greeting-button"
					_hover={{
						backgroundColor: "blackAlpha.200",
						color: "pink.300",
					}}
				>
					<Link
						fontWeight={"normal"}
						fontSize={"md"}
						isExternal
						href="mailto:hello@franco-carrizo.ar"
					>
						Say Hello
					</Link>
				</Button>
			</Flex>
		</Container>
	);
};
