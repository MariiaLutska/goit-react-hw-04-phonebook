import { Box } from '../Box';

export const Section = ({ title, children }) => {
    return (
        <Box justifyContent="center" color="accent" alignItems="center" flexDirection="column">
            <h1>{title}</h1>
            {children}
        </Box>
    );
};