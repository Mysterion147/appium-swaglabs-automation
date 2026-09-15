![Appium](https://img.shields.io/badge/-Appium-%23662D91?style=for-the-badge&logo=appium&logoColor=white)
![WebdriverIO](https://img.shields.io/badge/-WebdriverIO-%23EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Mobile](https://img.shields.io/badge/-Mobile%20Testing-blue?style=for-the-badge&logo=android&logoColor=white)

# SwagLabs Mobile Automation Suite
> Projeto de automação de testes mobile (E2E) utilizando Appium, WebdriverIO e Page Object Model (POM).
>
> Mobile end-to-end (E2E) test automation project using Appium, WebdriverIO, and Page Object Model (POM).

[Leia em Português<img src="https://flagcdn.com/w20/br.png" width="20">](#versão-em-português) | [Read in English<img src="https://flagcdn.com/w20/us.png" width="20">](#english-version)

---

### English version

This repository contains an Appium automated test suite for the **SwagLabs** mobile app, focused on demonstrating mobile QA engineering best practices, scalability, and code maintainability.

## ⚙️ Test Automation Stack
This project uses **Appium** as the automation driver, orchestrated through **WebdriverIO 9** with the **Mocha** test framework, to interact with the SwagLabs mobile app (`com.swaglabsmobileapp`) on a real device or emulator.

* **Appium Server:** Handles the communication between the test scripts and the mobile app under test.
* **WebdriverIO + Mocha:** Manages test execution, capabilities configuration (`wdio.conf.js`), and BDD-style assertions (`describe`/`it`).
* **App Isolation per Test:** Each test starts from a clean state — `beforeEach` terminates and reactivates the app to avoid state leakage between scenarios.
* **Allure Reporting:** Test results are collected and rendered into an interactive HTML report via the `allure-commandline`.
* **App Under Test:** The `.apk`/`.ipa` file used for testing is stored under `apps/`, keeping test targets versioned alongside the suite.

## 🚀 Run Locally
To run the tests and generate the report on your machine:

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Start Appium Server** (in a separate terminal):
   ```bash
   appium
   ```
3. **Configure the Device/Emulator:**
   Make sure an Android emulator (or a real device with USB debugging enabled) is running, and update the `capabilities` in `wdio.conf.js` accordingly.
4. **Run the Tests:**
   ```bash
   npm test
   ```
5. **Generate and Open the Allure Report:**
   ```bash
   npm run report:generate
   npm run report:open
   ```

## 🛠️ Technologies and Tools
* **Framework:** [Appium](https://appium.io/) + [WebdriverIO](https://webdriver.io/) `v9`
* **Test Framework:** Mocha (`@wdio/mocha-framework`)
* **Runner:** `@wdio/local-runner`
* **Language:** JavaScript (CommonJS)
* **Design Pattern:** Page Object Model (POM)
* **Reporting:** Allure Report + `@wdio/spec-reporter` (console output)
* **Target App:** SwagLabs Mobile App (`com.swaglabsmobileapp`)

## 🏗️ Project Architecture
The project separates concerns to keep the tests easy to read, run, and maintain.

```text
appium-swaglabs-automation/
├── apps/                    # App binary under test (.apk)
├── test/
│   ├── specs/               # Test scripts (e.g. purchase-flow.spec.js)
│   └── pageobjects/         # POM Classes (login.page, products.page, checkout.page)
├── wdio.conf.js             # WebdriverIO + Appium capabilities and config
├── package.json
└── package-lock.json
```

## 🧪 Covered Test Scenarios
- **Full Purchase Flow (E2E):** Login with a standard user, add a product to the cart, validate the cart badge count, proceed to checkout, fill in shipping information, finish the order, and confirm the completion screen.
- **State Isolation:** Every test terminates and relaunches the app beforehand, ensuring scenarios run against a fresh app state.
- **Checkout Form Error Validation (`checkout-errors.test.js`):**
  - **Missing First Name:** Attempting to proceed displays dynamic error First Name is required*.
  - **Missing Last Name:** Attempting to proceed displays dynamic error Last Name is required*.
  - **Missing Postal Code:** Attempting to proceed displays dynamic error Postal Code is required*.

---

### Versão em Português

Este repositório contém uma suíte de testes automatizados com Appium para o aplicativo mobile **SwagLabs**, focada em demonstrar boas práticas de engenharia de QA mobile, escalabilidade e manutenção de código.

## ⚙️ Stack de Automação de Testes
Este projeto utiliza **Appium** como driver de automação, orquestrado através do **WebdriverIO 9** com o framework de testes **Mocha**, para interagir com o app SwagLabs (`com.swaglabsmobileapp`) em um dispositivo real ou emulador.

* **Appium Server:** Gerencia a comunicação entre os scripts de teste e o aplicativo sob teste.
* **WebdriverIO + Mocha:** Gerencia a execução dos testes, configuração de capabilities (`wdio.conf.js`) e asserções no estilo BDD (`describe`/`it`).
* **Isolamento por Teste:** Cada teste parte de um estado limpo — o `beforeEach` finaliza e reabre o app para evitar vazamento de estado entre cenários.
* **Relatórios com Allure:** Os resultados dos testes são coletados e transformados em um relatório HTML interativo via `allure-commandline`.
* **App sob Teste:** O arquivo `.apk`/`.ipa` utilizado nos testes fica armazenado em `apps/`, mantendo os alvos de teste versionados junto com a suíte.

## 🚀 Executar Localmente
Para rodar os testes e gerar o relatório em sua máquina:

1. **Instalar Dependências:**
   ```bash
   npm install
   ```
2. **Iniciar o Servidor Appium** (em um terminal separado):
   ```bash
   appium
   ```
3. **Configurar o Dispositivo/Emulador:**
   Certifique-se de que um emulador Android (ou um dispositivo real com depuração USB habilitada) esteja rodando, e atualize as `capabilities` em `wdio.conf.js` conforme necessário.
4. **Rodar os Testes:**
   ```bash
   npm test
   ```
5. **Gerar e Abrir o Relatório Allure:**
   ```bash
   npm run report:generate
   npm run report:open
   ```

## 🛠️ Tecnologias e Ferramentas
* **Framework:** [Appium](https://appium.io/) + [WebdriverIO](https://webdriver.io/) `v9`
* **Framework de Testes:** Mocha (`@wdio/mocha-framework`)
* **Runner:** `@wdio/local-runner`
* **Linguagem:** JavaScript (CommonJS)
* **Padrão de Projeto:** Page Object Model (POM)
* **Relatórios:** Allure Report + `@wdio/spec-reporter` (saída no console)
* **App Alvo:** SwagLabs Mobile App (`com.swaglabsmobileapp`)

## 🏗️ Arquitetura do Projeto
O projeto utiliza a separação de responsabilidades para garantir que os testes sejam fáceis de ler, executar e manter.

```text
appium-swaglabs-automation/
├── apps/                    # Binário do app sob teste (.apk)
├── test/
│   ├── specs/               # Scripts de teste (ex.: purchase-flow.spec.js)
│   └── pageobjects/         # Classes POM (login.page, products.page, checkout.page)
├── wdio.conf.js             # Configuração e capabilities do WebdriverIO + Appium
├── package.json
└── package-lock.json
```

## 🧪 Cenários de Teste Cobertos
- **Fluxo Completo de Compra (E2E):** Login com usuário padrão, adição de um produto ao carrinho, validação do contador no badge do carrinho, avanço para o checkout, preenchimento das informações de entrega, finalização do pedido e confirmação da tela de conclusão.
- **Isolamento de Estado:** Todo teste finaliza e reabre o app antes de rodar, garantindo que os cenários sejam executados sempre a partir de um estado limpo do app.
- **Validação de Erros no Form de Checkout (`checkout-errors.test.js`):**
  - **First Name Ausente:** Tentativa de avanço exibindo erro dinâmico *First Name is required*.
  - **Last Name Ausente:** Tentativa de avanço exibindo erro dinâmico *Last Name is required*.
  - **Postal Code Ausente:** Tentativa de avanço exibindo erro dinâmico *Postal Code is required*.

---
**Developed by João Pedro Maciel de Souza**
