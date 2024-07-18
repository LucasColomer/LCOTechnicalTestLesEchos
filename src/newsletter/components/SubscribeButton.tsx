import { Button, Text } from "@chakra-ui/react";

export enum ButtonType {
    subscribe = 'subscribe',
    register = 'register',
}

interface RoundedButtonProps {
    type: ButtonType;
    onClick: () => void;
}

function SubscribeButton({ type, onClick }: RoundedButtonProps) {
    return (
        <Button
            bg={type === ButtonType.register ? 'primary.500' : 'yellow.500'}
            color={type === ButtonType.register ? 'white' : 'black'}
            borderRadius={25}
            onClick={onClick}
            size={'md'}
            paddingInline={8}
            >
            <Text as={'b'}>{type === ButtonType.register ? "S'inscrire" : "S'abonner"}</Text>
        </Button>
    );
}

export default SubscribeButton;