import { useState, useEffect } from 'react';

export enum DeviceType {
  Mobile,
  Desktop,
}

const MOBILE_BREAKPOINT = 768; // Defina seu breakpoint de dispositivo móvel aqui

function useDeviceType(): DeviceType {
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.Desktop);

  useEffect(() => {
    // Verifica se estamos no lado do cliente (navegador)
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType(DeviceType.Mobile);
      } else {
        setDeviceType(DeviceType.Desktop);
      }
    };

    // Executa a verificação inicial ao montar o componente
    handleResize();

    // Adiciona um listener de resize para atualizar o deviceType dinamicamente
    window.addEventListener('resize', handleResize);

    // Remove o listener ao desmontar o componente para evitar vazamentos de memória
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
}

export default useDeviceType;
