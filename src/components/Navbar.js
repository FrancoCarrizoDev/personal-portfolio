import {
	Box,
	Flex,
	Text,
	IconButton,
	Stack,
	Collapse,
	Link,
	useBreakpointValue,
	useDisclosure,
	Container,
	ScaleFade,
	Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { SiVisualstudiocode } from "react-icons/si";

export default function WithSubnavigation() {
	const { scrolling, scrollTop } = useScrollPosition();

	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box
			pos="fixed"
			w={"100%"}
			id="navbar-container"
			bg={isOpen ? "blackAlpha.900" : "white"}
			transition={"all 300ms"}
			zIndex={99}
			shadow={scrolling || scrollTop === 0 || isOpen ? "md" : "none"}
		>
			<ScaleFade in={scrolling || scrollTop === 0 || isOpen}>
				<Container maxWidth={"10xl"}>
					<Flex
						color="white"
						minH={"60px"}
						align={"center"}
						py={"4"}
						px={"2"}
					>
						<Flex
							flex={{ base: 1, md: "auto" }}
							ml={{ base: -2 }}
							display={{ base: "flex", md: "none" }}
						>
							<IconButton
								onClick={onToggle}
								color="blackAlpha.700"
								icon={
									isOpen ? (
										<CloseIcon
											color={"white"}
											w={3}
											h={3}
										/>
									) : (
										<HamburgerIcon w={6} h={6} />
									)
								}
								variant={"ghost"}
								aria-label={"Toggle Navigation"}
							/>
						</Flex>
						<Flex
							flex={{ base: 1 }}
							justify={{ base: "end", md: "start" }}
						>
							<Flex display={"flex"} align="center" mt={"5px"}>
								<Fade>
									<Link
										textAlign={useBreakpointValue({
											base: "center",
											md: "left",
										})}
										fontFamily={"heading"}
										href="https://franco-carrizo.ar"
										title="My portfolio"
									>
										<Icon
											fontSize={"1.5em"}
											as={SiVisualstudiocode}
											color="pink.400"
										/>
									</Link>
								</Fade>
							</Flex>
							<Flex
								display={{ base: "none", md: "flex" }}
								width="100%"
								justifyContent="end"
								ml={10}
							>
								<DesktopNav />
							</Flex>
						</Flex>
					</Flex>
				</Container>
			</ScaleFade>
			<Collapse in={isOpen} animateOpacity>
				<MobileNav onToggle={onToggle} />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	return (
		<Stack direction={"row"} spacing={4}>
			<Fade cascade>
				{NAV_ITEMS.map((navItem) => (
					<Flex
						p={2}
						key={navItem.label}
						id={`nav-${navItem.number}`}
					>
						<Text
							fontSize={"sm"}
							fontFamily={"heading"}
							color={"pink.400"}
							me={1}
						>
							{navItem.number}.
						</Text>

						<Link
							href={navItem.href ?? "#"}
							fontSize={"sm"}
							fontWeight={500}
							fontFamily={"heading"}
							color={"black"}
							_hover={{
								color: "pink.300",
							}}
						>
							{navItem.label}
						</Link>
					</Flex>
				))}
			</Fade>
		</Stack>
	);
};

const MobileNav = ({ onToggle }) => {
	return (
		<Stack bg={"blackAlpha.900"} p={4} display={{ md: "none" }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem
					key={navItem.label}
					{...navItem}
					onToggle={onToggle}
				/>
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, href, onToggle }) => {
	return (
		<Stack spacing={4}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					fontWeight={600}
					color={"whiteAlpha.900"}
					onClick={onToggle}
					transition="all 300ms"
					_hover={{ color: "pink.400", transition: "all 300ms" }}
				>
					{label}
				</Text>
			</Flex>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "About me",
		number: "01",
		href: "#about-me",
	},
	{
		label: "Experience",
		number: "02",
		href: "#experience",
	},
	{
		label: "Contact",
		href: "#contact",
		number: "03",
	},
];
