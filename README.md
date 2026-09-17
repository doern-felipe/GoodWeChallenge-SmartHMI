# ⚡ GoodWe Smart HMI - Web & IoT Prototype

Protótipo conceitual de interface HMI para carregadores de veículos elétricos (EV), focado em uma experiência fluida ("offline-first") e com integração IoT em tempo real para monitoramento de energia solar.

## 🗂️ Estrutura do Repositório

Este projeto foi construído de forma iterativa. O repositório está dividido em pastas para demonstrar a evolução do código, a correção de gargalos de renderização e a adição de funcionalidades:

* **`v1/` e `v2/`**: Versões iniciais contendo o histórico de desenvolvimento, testes de layout e a evolução da lógica de estado (com bugs mantidos para fins de histórico e aprendizado).
* **`v3/`**: HMI Core (Standalone). A versão final da interface rodando de forma estável com Vanilla JavaScript e CSS customizado. Focada em transições suaves e navegação sem pulos de tela, independente de conexões externas.
* **`v4/`**: Integração IoT (Wokwi & MQTT). A versão completa que conecta o painel de demonstração da interface a um microcontrolador ESP32 virtual, refletindo dados de sensores físicos em tempo real.

## 🚀 Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, Vanilla JS
* **Hardware Simulador:** Wokwi, ESP32, MicroPython
* **Protocolos e APIs:** MQTT (via bibliotecas `umqtt.simple` no backend e `mqtt.js` via WebSockets no frontend)
* **Componentes Físicos (Virtuais):** Display OLED SSD1306, Sensor de Luz (LDR) e Servo Motor

## ⚙️ Como Executar o Projeto

### Rodando a Versão 3 (Apenas Interface)
1. Navegue até a pasta `v3`.
2. Dê um duplo clique no arquivo `.html` para executá-lo diretamente no seu navegador.

### Rodando a Versão 4 (Integração IoT)
1. Acesse o projeto do hardware no Wokwi: `[https://wokwi.com/projects/475378026171880449]`
2. Inicie a simulação (botão Play) e aguarde o terminal exibir a mensagem `MQTT Conectado ao Broker em Nuvem!`.
3. Navegue até a pasta `v4` e abra o arquivo `.html` no navegador.
4. Clique no botão de engrenagem flutuante (Modo Demonstração) no canto inferior direito.
5. Ative a opção **Painel Solar: ON**.
6. No Wokwi, altere a barra de luminosidade do sensor LDR e observe a interface da web e o display OLED se atualizarem simultaneamente!

## 👨‍💻 Autor

Desenvolvido por Felipe de Oliveira Doern.
