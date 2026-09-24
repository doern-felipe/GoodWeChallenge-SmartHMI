"use strict";

/* =============== Notificações (Toast) UI =============== */
window.showToast = function (msg, isError = false) {
    const toast = document.createElement('div');
    toast.innerText = msg;
    toast.style.position = 'fixed';
    toast.style.bottom = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = isError ? 'var(--red)' : 'var(--green)';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '24px';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '600';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    toast.style.zIndex = '9999';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
};

/* =============== Traduções Completas (i18n) =============== */
const TR = {
    pt: {
        select_mode: "Onde você vai carregar?", mode_res: "Minha Casa", mode_res_sub: "Gerencie perfis, solar e Wi-Fi", mode_com: "Estação Pública", mode_com_sub: "Escaneie o QR da HMI na rua",
        connect_title: "Conectar", connect_sub: "Vincule ao Smart HMI", btn_scan: "Escanear QR Code", btn_manual: "Digitar Código",
        select_profile_home: "Perfil a utilizar:", no_profiles: "Nenhum perfil encontrado.", create_one_first: "Crie um perfil primeiro",
        confirm_connection: "Confirmar conexão com:", mode_label: "Modo:", limit_label: "Limite:",
        scan_title: "Aponte a Câmera", manual_title: "Inserir Código", code_label: "Código do HMI", cancel: "Cancelar", confirm: "Conectar",
        hmi_found: "HMI Encontrado", session_auth: "Sessão Autorizada", end_session: "Encerrar Sessão",
        my_profiles: "Meus Perfis", create_profile: "Novo", sync_hmi: "Sincronizar", sync_sub: "Envie os perfis para o seu carregador Residencial.", nav_connect: "Conectar", nav_profiles: "Perfis",
        new_profile: "Novo Perfil", profile_name: "Nome do Perfil", brand: "Marca", model: "Modelo", charge_mode: "Modo de Carregamento",
        mode_free: "Livre", mode_timer: "Timer", charge_limit: "Limite de Carga (%)", current_limit: "Limite de Corrente (A)", current_auto: "Definido pelo Carregador",
        payment: "Pagamento", mvp_note: "* Apenas dados de teste do MVP são aceitos.", card_num: "Número do Cartão", card_name: "Nome no Cartão", card_val: "Validade", save: "Salvar",
        use_profile: "USAR", delete_profile: "APAGAR", time_lbl: "Tempo:", cost_lbl: "Custo Estimado:", payment_lbl: "Pagamento:", sync_success: "Perfis enviados para o HMI com sucesso!",
        err_mvp_data: "Erro: Para o MVP, utilize apenas os dados de cartão pré-preenchidos.", err_no_name: "Insira um nome.", err_qr_invalid: "QR Code inválido.", err_format: "Formato não reconhecido.", err_need_profiles: "Você precisa ter perfis cadastrados. Volte, vá para Minha Casa e crie um Perfil.", err_mqtt_wait: "Aguarde a conexão MQTT.", res_charger: "Carregador Residencial", res_hmi_mgmt: "Gestão HMI Local", chat_ai_title: "Chat IA", chat_ai_desc: "Demonstração de Inteligência Artificial", chat_human_title: "Chat Humano", chat_human_desc: "Demonstração de Suporte com Operador", chat_msg_1: "Olá! Como posso ajudar você hoje?", chat_placeholder: "Digite sua mensagem...", chat_demo_alert: "Esta é apenas uma demonstração visual de Chat.", faq_title: "Perguntas Frequentes", faq_q1: "Como inicio o carregamento?", faq_a1: "Escaneie o QR Code na tela da HMI ou digite o código. Confirme a conexão no seu app e a estação será liberada.", faq_q2: "Por que o carregador parou antes de 100%?", faq_a2: "A recarga obedece ao Limite de Carga estipulado no seu Perfil (ex: 80%), garantindo a saúde da bateria do seu EV.", faq_q3: "Qual a diferença da Gestão Automática?", faq_a3: "Se o limite de corrente estiver como 'Automático', a estação se comunicará com o Smart HMI para usar apenas a energia excedente e mais barata.", solar_monitor: "Monitor Solar", solar_intensity: "Intensidade:", solar_raw: "Luz Raw:", solar_sync: "Sincronizado via MQTT IoT.", code_lbl_sync: "Código do Carregador (Ex: RES-1234)", confirm_send: "Confirmar e Enviar", ex_principal: "Ex: Principal", session_ended: "A sessão foi concluída/encerrada pela HMI."
    },
    en: {
        select_mode: "Where to charge?", mode_res: "My Home", mode_res_sub: "Manage profiles, solar, Wi-Fi", mode_com: "Public Station", mode_com_sub: "Scan HMI QR code on street",
        connect_title: "Connect", connect_sub: "Link to Smart HMI", btn_scan: "Scan QR Code", btn_manual: "Enter Code",
        select_profile_home: "Profile to use:", no_profiles: "No profiles found.", create_one_first: "Create a profile first",
        confirm_connection: "Confirm connection with:", mode_label: "Mode:", limit_label: "Limit:",
        scan_title: "Point your Camera", manual_title: "Enter Code", code_label: "HMI Code", cancel: "Cancel", confirm: "Connect",
        hmi_found: "HMI Found", session_auth: "Session Authorized", end_session: "End Session",
        my_profiles: "My Profiles", create_profile: "New", sync_hmi: "Sync", sync_sub: "Send profiles to your Residential charger.", nav_connect: "Connect", nav_profiles: "Profiles",
        new_profile: "New Profile", profile_name: "Profile Name", brand: "Brand", model: "Model", charge_mode: "Charging Mode",
        mode_free: "Free", mode_timer: "Timer", charge_limit: "Charge Limit (%)", current_limit: "Current Limit (A)", current_auto: "Defined by Charger",
        payment: "Payment", mvp_note: "* Only MVP test data is accepted.", card_num: "Card Number", card_name: "Name on Card", card_val: "Expiry", save: "Save",
        use_profile: "USE", delete_profile: "DELETE", time_lbl: "Time:", cost_lbl: "Est. Cost:", payment_lbl: "Payment:", sync_success: "Profiles synced successfully!",
        err_mvp_data: "Error: Only MVP test data allowed.", err_no_name: "Enter a name.", err_qr_invalid: "Invalid QR Code.", err_format: "Unrecognized format.", err_need_profiles: "You need registered profiles. Go back to My Home and create a Profile.", err_mqtt_wait: "Wait for MQTT connection.", res_charger: "Residential Charger", res_hmi_mgmt: "Local HMI Management", chat_ai_title: "AI Chat", chat_ai_desc: "Artificial Intelligence Demo", chat_human_title: "Human Chat", chat_human_desc: "Operator Support Demo", chat_msg_1: "Hello! How can I help you today?", chat_placeholder: "Type your message...", chat_demo_alert: "This is just a visual Chat demo.", faq_title: "Frequently Asked Questions", faq_q1: "How do I start charging?", faq_a1: "Scan the QR Code on the HMI screen or enter the code. Confirm the connection in your app.", faq_q2: "Why did the charger stop before 100%?", faq_a2: "Charging obeys the Charge Limit set in your Profile (e.g., 80%).", faq_q3: "What is the difference with Automatic Management?", faq_a3: "If 'Automatic', the station communicates with the Smart HMI to use only excess and cheaper energy.", solar_monitor: "Solar Monitor", solar_intensity: "Intensity:", solar_raw: "Raw Light:", solar_sync: "Synced via MQTT IoT.", code_lbl_sync: "Charger Code (Ex: RES-1234)", confirm_send: "Confirm and Send", ex_principal: "Ex: Main", session_ended: "Session ended by HMI."
    },
    es: {
        select_mode: "¿Dónde vas a cargar?", mode_res: "Mi Casa", mode_res_sub: "Gestionar perfiles, solar, Wi-Fi", mode_com: "Estación Pública", mode_com_sub: "Escanea QR del HMI en la calle",
        connect_title: "Conectar", connect_sub: "Vincular al Smart HMI", btn_scan: "Escanear Código QR", btn_manual: "Ingresar Código",
        select_profile_home: "Perfil a utilizar:", no_profiles: "No se encontraron perfiles.", create_one_first: "Cree un perfil primero",
        confirm_connection: "Confirmar conexión con:", mode_label: "Modo:", limit_label: "Límite:",
        scan_title: "Apunta la Cámara", manual_title: "Ingresar Código", code_label: "Código del HMI", cancel: "Cancelar", confirm: "Conectar",
        hmi_found: "HMI Encontrado", session_auth: "Sesión Autorizada", end_session: "Finalizar Sesión",
        my_profiles: "Mis Perfiles", create_profile: "Nuevo", sync_hmi: "Sincronizar", sync_sub: "Envíe los perfiles a su cargador Residencial.", nav_connect: "Conectar", nav_profiles: "Perfiles",
        new_profile: "Nuevo Perfil", profile_name: "Nombre del Perfil", brand: "Marca", model: "Modelo", charge_mode: "Modo de Carga",
        mode_free: "Libre", mode_timer: "Timer", charge_limit: "Límite de Carga (%)", current_limit: "Límite de Corriente (A)", current_auto: "Definido por el Cargador",
        payment: "Pago", mvp_note: "* Solo se aceptan datos de prueba del MVP.", card_num: "Número de Tarjeta", card_name: "Nombre en Tarjeta", card_val: "Vencimiento", save: "Guardar",
        use_profile: "USAR", delete_profile: "BORRAR", time_lbl: "Tiempo:", cost_lbl: "Costo Est.:", payment_lbl: "Pago:", sync_success: "Perfiles enviados con éxito!",
        err_mvp_data: "Error: Solo se aceptan datos de prueba del MVP.", err_no_name: "Ingrese un nombre.", err_qr_invalid: "Código QR inválido.", err_format: "Formato no reconocido.", err_need_profiles: "Debe tener perfiles registrados. Vuelva a Mi Casa y cree un Perfil.", err_mqtt_wait: "Espere la conexión MQTT.", res_charger: "Cargador Residencial", res_hmi_mgmt: "Gestión HMI Local", chat_ai_title: "Chat IA", chat_ai_desc: "Demostración de Inteligencia Artificial", chat_human_title: "Chat Humano", chat_human_desc: "Demostración de Soporte con Operador", chat_msg_1: "¡Hola! ¿Cómo puedo ayudarte hoy?", chat_placeholder: "Escribe tu mensaje...", chat_demo_alert: "Esta es solo una demostración visual de Chat.", faq_title: "Preguntas Frecuentes", faq_q1: "¿Cómo inicio la carga?", faq_a1: "Escanea el Código QR en la pantalla del HMI o ingresa el código. Confirma la conexión en tu app.", faq_q2: "¿Por qué el cargador se detuvo antes del 100%?", faq_a2: "La carga obedece al Límite de Carga establecido en su Perfil (ej: 80%).", faq_q3: "¿Cuál es la diferencia con la Gestión Automática?", faq_a3: "Si es 'Automático', la estación se comunica con el Smart HMI para usar solo energía excedente y más barata.", solar_monitor: "Monitor Solar", solar_intensity: "Intensidad:", solar_raw: "Luz Raw:", solar_sync: "Sincronizado vía MQTT IoT.", code_lbl_sync: "Código del Cargador (Ej: RES-1234)", confirm_send: "Confirmar y Enviar", ex_principal: "Ej: Principal", session_ended: "Sesión finalizada por la HMI."
    }
};

let currentLang = 'pt';
let appMode = 'res';

/* =============== Ícones SVG Inline =============== */
const I = {
    qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM19 19h2v2h-2zM14 19h2M19 14h2"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.7-4.7"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><rect x="5" y="5" width="14" height="14" rx="2"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h10M18 18h2"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="16" cy="18" r="2"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i" style="width:34px;height:34px"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    build: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i" style="width:34px;height:34px"><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16"/><path d="M15 9h4a1 1 0 0 1 1 1v11"/><path d="M8 8h2M8 12h2M8 16h2"/><path d="M2 21h20"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    human: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    faq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    arrowleft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="i"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>'
};

document.getElementById('ic-qr').innerHTML = I.qr;
document.getElementById('ic-phone').innerHTML = I.phone;
document.getElementById('ic-x').innerHTML = I.x;
document.getElementById('ic-check-1').innerHTML = I.check;
document.getElementById('ic-check-2').innerHTML = I.check;
document.getElementById('ic-stop').innerHTML = I.stop;
document.getElementById('ic-users').innerHTML = I.users;
document.getElementById('ic-plus').innerHTML = I.plus;
document.getElementById('ic-card').innerHTML = I.card;
document.getElementById('ic-nav-zap').innerHTML = I.zap;
document.getElementById('ic-nav-users').innerHTML = I.users;
document.getElementById('ic-refresh').innerHTML = I.refresh;
document.getElementById('ic-home-big').innerHTML = I.home;
document.getElementById('ic-build-big').innerHTML = I.build;
document.getElementById('ic-nav-sun').innerHTML = I.sun;
document.getElementById('ic-help').innerHTML = I.help;
document.getElementById('ic-cpu').innerHTML = I.cpu;
document.getElementById('ic-human').innerHTML = I.human;
document.getElementById('ic-faq').innerHTML = I.faq;
document.getElementById('ic-arrowleft').innerHTML = I.arrowleft;
document.getElementById('ic-send').innerHTML = I.send;
document.getElementById('ic-faq-head').innerHTML = I.faq;

// Mudar Idioma
document.querySelectorAll('.lang button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.lang button').forEach(b => b.classList.remove('on'));
        e.target.classList.add('on');
        currentLang = e.target.getAttribute('data-lang');
        updateTranslations();
    });
});

window.t = function(key) {
    return TR[currentLang][key] || key;
};

window.updateTranslations = function() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerText = t(el.getAttribute('data-i18n'));
    });
    
    // Atualiza Placeholders Dinamicamente
    const chatInput = document.getElementById('chat-input');
    if(chatInput) chatInput.placeholder = t('chat_placeholder');
    
    const pName = document.getElementById('p-name');
    if(pName) pName.placeholder = t('ex_principal');
    
    const syncInput = document.getElementById('sync-code-input');
    if(syncInput) syncInput.placeholder = "RES-XXXX";

    populateHomeProfileSelect();
    renderProfiles();
};

/* =============== Lógica de Interfaces =============== */
window.selectAppMode = function(mode) {
    appMode = mode;
    document.getElementById('screen-landing').classList.remove('active');
    document.getElementById('bottom-nav').style.display = 'flex';
    document.getElementById('btn-back-home').style.display = 'block';

    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('tab-connect').classList.add('active');
    document.querySelectorAll('#tab-connect .sub-screen').forEach(s => s.classList.remove('active'));

    if (mode === 'res') {
        document.getElementById('nav-item-profiles').style.display = 'flex';
        document.getElementById('nav-item-solar').style.display = 'flex';
        document.getElementById('commercial-profile-selector').style.display = 'none'; 
        document.getElementById('realtime-data-panel').style.display = 'none';
        document.getElementById('fab-com').style.display = 'none';
    } else {
        document.getElementById('nav-item-profiles').style.display = 'none';
        document.getElementById('nav-item-solar').style.display = 'none';
        document.getElementById('realtime-data-panel').style.display = 'block';
        document.getElementById('fab-com').style.display = 'flex';
    }
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.querySelector('.nav-item').classList.add('active');
    
    populateHomeProfileSelect();
    
    if(!currentSessionCode) {
        document.getElementById('screen-home').classList.add('active');
    } else {
        document.getElementById('screen-active').classList.add('active');
    }
};

window.goToLanding = function() {
    document.getElementById('screen-landing').classList.add('active');
    document.querySelectorAll('.screen:not(#screen-landing)').forEach(s => s.classList.remove('active'));
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('fab-com').style.display = 'none';
    document.getElementById('fab-menu').classList.remove('show');
    document.getElementById('btn-back-home').style.display = 'none';
};

window.switchTab = function(tabId, btn) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    
    if (tabId === 'tab-profiles') {
        renderProfiles();
        showSubScreen('screen-profiles-list', 'tab-profiles');
    }
    if (tabId === 'tab-connect') {
        populateHomeProfileSelect();
        if(!currentSessionCode) {
            showSubScreen('screen-home', 'tab-connect');
        } else {
            showSubScreen('screen-active', 'tab-connect');
        }
    }
};

window.showSubScreen = function(screenId, parentId = 'tab-connect') {
    document.querySelectorAll(`#${parentId} .sub-screen`).forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'screen-scanner') initScanner();
    if (screenId === 'screen-create-profile') populateBrands();
};

const vehiclesData = {
    "TESLA": ["Tesla Model 3", "Tesla Model Y", "Tesla Model S", "Tesla Model X", "Tesla Cybertruck", "Tesla Roadster"],
    "BYD": ["BYD Dolphin", "BYD Dolphin Mini", "BYD Seal", "BYD Yuan Plus", "BYD Yuan Pro", "BYD Han", "BYD Tang", "BYD Song Plus", "BYD Song Pro", "BYD King", "BYD Qin Plus", "BYD e2"],
    "VOLKSWAGEN": ["Volkswagen ID.3", "Volkswagen ID.4", "Volkswagen ID.5", "Volkswagen ID.7", "Volkswagen ID. Buzz", "Volkswagen e-Golf", "Volkswagen e-Up!"],
    "NISSAN": ["Nissan Leaf", "Nissan Ariya", "Nissan Sakura"],
    "CHEVROLET / GM": ["Chevrolet Bolt EV", "Chevrolet Bolt EUV", "Chevrolet Blazer EV", "Chevrolet Equinox EV", "Chevrolet Silverado EV", "GMC Hummer EV", "Cadillac Lyriq", "Cadillac Escalade IQ"],
    "FORD": ["Ford Mustang Mach-E", "Ford F-150 Lightning", "Ford E-Transit", "Ford Explorer EV"],
    "HYUNDAI": ["Hyundai Ioniq 5", "Hyundai Ioniq 6", "Hyundai Kona Electric", "Hyundai Ioniq Electric"],
    "KIA": ["Kia EV6", "Kia EV9", "Kia Niro EV", "Kia Soul EV"],
    "AUDI": ["Audi Q8 e-tron", "Audi Q4 e-tron", "Audi e-tron GT", "Audi Q6 e-tron", "Audi Q5 e-tron"],
    "BMW": ["BMW i3", "BMW i4", "BMW iX", "BMW iX3", "BMW i7", "BMW i5", "BMW iX1"],
    "MERCEDES-BENZ": ["Mercedes-Benz EQA", "Mercedes-Benz EQB", "Mercedes-Benz EQC", "Mercedes-Benz EQE", "Mercedes-Benz EQE SUV", "Mercedes-Benz EQS", "Mercedes-Benz EQS SUV", "Mercedes-Benz EQV"],
    "VOLVO & POLESTAR": ["Volvo XC40 Recharge", "Volvo C40 Recharge", "Volvo EX30", "Volvo EX90", "Polestar 2", "Polestar 3", "Polestar 4"],
    "RENAULT": ["Renault Zoe", "Renault Kwid E-Tech", "Renault Megane E-Tech", "Renault Kangoo Z.E.", "Renault Twingo Z.E."],
    "STELLANTIS": ["Peugeot e-208", "Peugeot e-2008", "Citroën ë-C3", "Citroën ë-C4", "Fiat 500e", "Fiat 600e", "Jeep Avenger"],
    "PORSCHE": ["Porsche Taycan", "Porsche Macan EV"],
    "GWM": ["GWM Ora 03", "GWM Ora 07"],
    "GEELY / ZEEKR / MG / GAC": ["MG4 EV", "MG ZS EV", "MG5 EV", "MG Marvel R", "Zeekr 001", "Zeekr X", "Geely EX2", "Geely EX5", "Geely Galaxy E8", "GAC Aion Y", "GAC Aion V", "GAC Aion UT"],
    "RIVIAN / LUCID": ["Rivian R1T", "Rivian R1S", "Lucid Air"],
    "JAC / CHERY / LEAPMOTOR": ["JAC E-JS1", "JAC E-JS4", "Caoa Chery iCar", "Leapmotor C10", "Leapmotor T03"],
    "HONDA / MINI / OUTROS": ["Mini Cooper SE", "Honda e", "Honda Prologue", "Lexus UX 300e", "Jaguar I-Pace", "Mazda MX-30", "Subaru Solterra", "Toyota bZ4X"]
};

window.populateHomeProfileSelect = function() {
    if (appMode === 'res') return;
    const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
    const select = document.getElementById('session-profile-select');
    if(!select) return;
    
    select.innerHTML = '';
    
    if (profiles.length === 0) {
        select.innerHTML = `<option value="">-- ${t('create_one_first')} --</option>`;
        select.disabled = true;
    } else {
        select.disabled = false;
        profiles.forEach((p, index) => {
            select.innerHTML += `<option value="${index}">${p.profileName} (${p.vehicleBrand})</option>`;
        });
        updateSessionPreview();
    }
};

window.updateSessionPreview = function() {
    const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
    const val = document.getElementById('session-profile-select').value;
    if(val === "") return;
    
    const p = profiles[val];
    const limitStr = p.currentLimit === 'auto' ? t('current_auto') : p.currentLimit + ' A';
    
    document.getElementById('confirm-profile-details').innerHTML = `
        <div style="font-size: 14px; color: var(--text-0); margin-bottom: 4px;">${I.zap} ${p.vehicleBrand} ${p.vehicleModel}</div>
        <div style="font-size: 13px; color: var(--text-2);">${I.check} ${t('mode_label')} ${t('mode_' + p.chargingMode)} | Meta: ${p.targetChargePercentage}%</div>
        <div style="font-size: 13px; color: var(--text-2); margin-top:4px;">${I.sliders} ${limitStr}</div>
    `;
    document.getElementById('confirm-profile-details').style.display = 'block';
};

window.populateBrands = function() {
    const brandSelect = document.getElementById('p-brand');
    brandSelect.innerHTML = '';
    Object.keys(vehiclesData).forEach(brand => {
        brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`;
    });
    updateModels();
};

window.updateModels = function() {
    const brand = document.getElementById('p-brand').value;
    const modelSelect = document.getElementById('p-model');
    modelSelect.innerHTML = '';
    vehiclesData[brand].forEach(model => {
        modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
    });
};

window.saveProfile = function() {
    const cNum = document.getElementById('p-card-num').value;
    const cName = document.getElementById('p-card-name').value;
    
    if (cNum !== "1111 2222 3333 4444" || cName !== "xxxxxxxx") {
        showToast(t('err_mvp_data'), true);
        return;
    }
    
    const pName = document.getElementById('p-name').value;
    if (!pName) {
        showToast(t('err_no_name'), true);
        return;
    }

    const newProfile = {
        profileName: pName,
        vehicleBrand: document.getElementById('p-brand').value,
        vehicleModel: document.getElementById('p-model').value,
        chargingMode: document.getElementById('p-mode').value,
        currentLimit: document.getElementById('p-current').value,
        targetChargePercentage: document.getElementById('p-limit').value
    };

    const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
    profiles.push(newProfile);
    localStorage.setItem('gw_profiles_v3', JSON.stringify(profiles));

    populateHomeProfileSelect();
    showSubScreen('screen-profiles-list', 'tab-profiles');
};

window.renderProfiles = function() {
    const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
    const container = document.getElementById('profiles-container');
    container.innerHTML = '';
    
    if (profiles.length === 0) {
        container.innerHTML = `<p style="color:var(--text-2); text-align:center; margin-top:20px;">${t('no_profiles')}</p>`;
        return;
    }
    
    profiles.forEach((p, index) => {
        const limitStr = p.currentLimit === 'auto' ? t('current_auto') : p.currentLimit + ' A';
        container.innerHTML += `
            <div class="prof">
                <div class="prof-top">
                    <span class="prof-name">${p.profileName}</span>
                </div>
                <div class="prof-line">${I.zap} ${p.vehicleBrand} ${p.vehicleModel}</div>
                <div class="prof-line">${I.check} ${t('mode_label')} ${t('mode_' + p.chargingMode)} | Meta: ${p.targetChargePercentage}%</div>
                <div class="prof-line">${I.sliders} ${t('limit_label')} ${limitStr}</div>
                <div class="prof-actions">
                    <button onclick="deleteProfile(${index})" class="btn" style="flex:1; padding: 10px; font-size:13px;">${t('delete_profile')}</button>
                </div>
            </div>`;
    });
};

window.deleteProfile = function(index) {
    const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
    profiles.splice(index, 1);
    localStorage.setItem('gw_profiles_v3', JSON.stringify(profiles));
    populateHomeProfileSelect();
    renderProfiles();
};

window.toggleFabMenu = function() {
    document.getElementById('fab-menu').classList.toggle('show');
};

window.openSimChat = function(type) {
    document.getElementById('fab-menu').classList.remove('show');
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-chat').style.display = 'flex';
    document.getElementById('screen-chat').classList.add('active');
    
    if(type === 'ai') {
        document.getElementById('ic-chat-type').innerHTML = I.cpu;
        document.getElementById('chat-title').innerText = t('chat_ai_title');
        document.getElementById('chat-disclaimer').innerText = t('chat_ai_desc');
    } else {
        document.getElementById('ic-chat-type').innerHTML = I.human;
        document.getElementById('chat-title').innerText = t('chat_human_title');
        document.getElementById('chat-disclaimer').innerText = t('chat_human_desc');
    }
    
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('fab-com').style.display = 'none';
};

window.openFAQ = function() {
    document.getElementById('fab-menu').classList.remove('show');
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-faq').style.display = 'flex';
    document.getElementById('screen-faq').classList.add('active');
    
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('fab-com').style.display = 'none';
};

/* =============== Conexão MQTT (Nuvem) =============== */
const mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
let currentSessionCode = null;
let html5QrcodeScanner = null;

mqttClient.on('connect', function () {
    mqttClient.subscribe('goodwe_smart_hmi_solar_xyz123');
});

window.startConnectionFlow = function(type) {
    if (appMode === 'com') {
        const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
        if (profiles.length === 0) {
            showToast(t('err_need_profiles'), true);
            return;
        }
    }
    if (type === 'scanner') showSubScreen('screen-scanner');
    else if (type === 'manual') showSubScreen('screen-manual');
};

window.initScanner = function() {
    html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } }, false);
    html5QrcodeScanner.render((decodedText) => {
        stopScanner();
        try {
            const url = new URL(decodedText);
            const code = url.searchParams.get("code");
            if (code) processConnectionCode(code);
            else showToast(t('err_qr_invalid'), true);
        } catch (e) {
            showToast(t('err_format'), true);
        }
    }, (error) => { });
};

window.stopScanner = function() {
    if (html5QrcodeScanner) {
        html5QrcodeScanner.clear();
        html5QrcodeScanner = null;
    }
};

window.validateManualCode = function() {
    const code = document.getElementById('manual-code-input').value.trim();
    if (code) processConnectionCode(code);
};

window.validateSyncCode = function() {
    let code = document.getElementById('sync-code-input').value.trim().toUpperCase();
    if (!code) return;
    if (!code.startsWith('RES-')) code = 'RES-' + code;

    const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
    if (profiles.length === 0) {
        showToast(t('no_profiles'), true);
        return;
    }

    if (typeof mqttClient !== 'undefined' && mqttClient.connected) {
        mqttClient.publish(`goodwe_hmi/sync/${code}`, JSON.stringify({ action: 'sync_profiles', profiles: profiles }));
        showToast(t('sync_success'), false);
        document.getElementById('sync-code-input').value = '';
        showSubScreen('screen-profiles-list', 'tab-profiles');
    } else {
        showToast(t('err_mqtt_wait'), true);
    }
};

window.processConnectionCode = function(code) {
    currentSessionCode = code;
    mqttClient.subscribe(`goodwe_hmi/session/${code}/to_app`);
    document.getElementById('connected-code-display').innerText = code;

    if (appMode === 'com') {
        document.getElementById('commercial-profile-selector').style.display = 'block';
        populateHomeProfileSelect();
    } else {
        document.getElementById('commercial-profile-selector').style.display = 'none';
    }
    showSubScreen('screen-session-setup');
};

window.autorizarSessaoHome = function() {
    if (appMode === 'com') {
        const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
        const profile = profiles[document.getElementById('session-profile-select').value];

        mqttClient.publish(`goodwe_hmi/session/${currentSessionCode}/to_hmi`, JSON.stringify({
            action: 'auth_session',
            profile: profile
        }));
        document.getElementById('active-profile-name').innerText = profile.profileName;
        document.getElementById('active-profile-vehicle').innerText = `${profile.vehicleBrand} ${profile.vehicleModel}`;
    } else {
        document.getElementById('active-profile-name').innerText = t('res_charger');
        document.getElementById('active-profile-vehicle').innerText = t('res_hmi_mgmt');
    }
    showSubScreen('screen-active');
};

window.cancelSession = function() {
    currentSessionCode = null;
    showSubScreen('screen-home');
};

window.endSession = function() {
    if (currentSessionCode && typeof mqttClient !== 'undefined' && mqttClient.connected) {
        mqttClient.publish(`goodwe_hmi/session/${currentSessionCode}/to_hmi`, JSON.stringify({ action: 'end_session' }));
    }
    currentSessionCode = null;
    document.getElementById('app-charging-percent').innerText = "0%";
    document.getElementById('app-ring').style.strokeDashoffset = 565.48;
    showSubScreen('screen-home');
};

mqttClient.on('message', (topic, message) => {
    const data = JSON.parse(message.toString());

    if (topic === 'goodwe_smart_hmi_solar_xyz123') {
        const p = document.getElementById('app-solar-pct');
        const l = document.getElementById('app-solar-lux');
        if (p) p.innerText = data.percent + ' %';
        if (l) l.innerText = data.lux;
    }

    if (topic.indexOf('to_app') > -1) {
        if (data.action === 'progress') {
            const percent = data.percent;
            document.getElementById('app-charging-percent').innerText = `${percent}%`;
            const ring = document.getElementById('app-ring');
            ring.style.strokeDashoffset = (565.48 - (Math.max(0, Math.min(100, percent)) / 100) * 565.48).toFixed(1);

            if (data.time) document.getElementById('app-charging-time').innerText = data.time;
            if (data.cost) document.getElementById('app-charging-cost').innerText = data.cost;
            if (data.payment) document.getElementById('app-charging-pay').innerText = data.payment;

        } else if (data.action === 'ended') {
            showToast(t('session_ended'), false);
            currentSessionCode = null;
            document.getElementById('app-charging-percent').innerText = "0%";
            document.getElementById('app-ring').style.strokeDashoffset = 565.48;
            showSubScreen('screen-home');
        }
    }
});

updateTranslations();
// Garante que o App sempre inicie limpo
goToLanding();