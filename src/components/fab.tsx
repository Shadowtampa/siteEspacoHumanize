import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/assets/whatsapp.svg"; // Importando o SVG diretamente

export function FAB() {
  return (
    <div className="fixed bottom-[4rem] right-[4rem]">
      <a href={`https://api.whatsapp.com/send?phone=559191267386&text=Olá!%20gostaria%20de%20conhecer%20a%20humanize!`} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="rounded-full bg-green-900 text-gray-50 shadow-lg hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300 flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white"
        >
          <img
            src={WhatsAppIcon}
            alt="WhatsApp"
            className="w-7 h-7  text-white" // Definindo a cor como branca
            style={{ fill: "white" }} // Garantindo que a cor do SVG seja branca
          />
        </Button>
      </a>
    </div>
  );
}
