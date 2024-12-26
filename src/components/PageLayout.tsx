import { Box, Container } from '@radix-ui/themes'
import { ReactNode, useEffect, useState } from 'react';

import { cn } from "@/lib/utils"; // Utilitário do shadCN para classes condicionais.
import { FAB } from './fab';

interface LayoutProps {
    children?: ReactNode;
    BoxStyle: string;
    pageSubTitle?: string;
}

export const PageLayout: React.FC<LayoutProps> = ({ children, BoxStyle, pageSubTitle }) => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Posição do scroll vertical
            setIsVisible(scrollPosition < 50); // Oculta o título se a rolagem passar de 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Remove o listener ao desmontar
    }, []);

    return (
        <div className="flex items-center justify-center lg:px-80 py-20 mt-16 w-screen sm:px-4">

            <Box className={BoxStyle}>

                <Container size="1">

                    <h2
                        className={cn(
                            "text-4xl font-semibold text-muted-foreground leading-tight tracking-wide flex items-center justify-center fixed top-[7.5rem] left-1/2 transform -translate-x-1/2 transition-opacity duration-300",
                            isVisible ? "opacity-100" : "opacity-0")}

                    >
                        {pageSubTitle}
                    </h2>


                    {children}

                    <FAB>

                    </FAB>
                </Container>

            </Box>
        </div>
    )
}
