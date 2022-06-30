import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true } : ProfileProps) {
    return (
        <Flex align="center" >
            { showProfileData && (
                <Box mr="4" textAlign="right" >
                    <Text>Rafael Kozlowski Andreola</Text>
                    <Text color="gray.300" fontSize="small" >
                        rafandreola@hotmail.com
                    </Text>
                </Box>
            ) }

            <Avatar size="md" name="Rafael Kozlowski Andreola" src="https://github.com/Rafa-KozAnd.png" />
        </Flex>
    );
}