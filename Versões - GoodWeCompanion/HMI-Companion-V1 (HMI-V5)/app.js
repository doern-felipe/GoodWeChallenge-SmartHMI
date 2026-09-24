/* =============== Notificações (Toast) UI =============== */
function showToast(msg, isError = false) {
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
    
    setTimeout(() => toast.style.opacity = '1', 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

const TR = {
  pt: {
    connect_title: "Conectar", connect_sub: "Vincule ao Smart HMI", btn_scan: "Escanear QR Code", btn_manual: "Digitar Código",
    select_profile_home: "Perfil a utilizar:", no_profiles: "Nenhum perfil encontrado.", create_one_first: "Crie um perfil primeiro",
    confirm_connection: "Confirmar conexão com:", mode_label: "Modo:", limit_label: "Limite:",
    scan_title: "Aponte a Câmera", manual_title: "Inserir Código", code_label: "Código do HMI", cancel: "Cancelar", confirm: "Conectar",
    hmi_found: "HMI Encontrado", session_auth: "Sessão Autorizada", end_session: "Encerrar Sessão",
    my_profiles: "Meus Perfis", create_profile: "Novo", sync_hmi: "Sincronizar", sync_sub: "Envie os perfis para o seu carregador Residencial.", nav_connect: "Conectar", nav_profiles: "Perfis",
    new_profile: "Novo Perfil", profile_name: "Nome do Perfil", brand: "Marca", model: "Modelo", charge_mode: "Modo de Carregamento",
    mode_free: "Livre", mode_timer: "Timer (Ex: 22:00 as 06:00)", charge_limit: "Limite de Carga (%)", current_limit: "Limite de Corrente (A)", current_auto: "Definido pelo Carregador",
    payment: "Pagamento", mvp_note: "* Apenas dados de teste do MVP são aceitos.", card_num: "Número do Cartão", card_name: "Nome no Cartão", card_val: "Validade", save: "Salvar",
    use_profile: "USAR", delete_profile: "APAGAR", time_lbl: "Tempo:", cost_lbl: "Custo Estimado:", payment_lbl: "Pagamento:",
    sync_success: "Perfis enviados para o HMI com sucesso!"
  },
  en: {
    connect_title: "Connect", connect_sub: "Link to Smart HMI", btn_scan: "Scan QR Code", btn_manual: "Enter Code",
    select_profile_home: "Profile to use:", no_profiles: "No profiles found.", create_one_first: "Create a profile first",
    confirm_connection: "Confirm connection with:", mode_label: "Mode:", limit_label: "Limit:",
    scan_title: "Point your Camera", manual_title: "Enter Code", code_label: "HMI Code", cancel: "Cancel", confirm: "Connect",
    hmi_found: "HMI Found", session_auth: "Session Authorized", end_session: "End Session",
    my_profiles: "My Profiles", create_profile: "New", sync_hmi: "Sync", sync_sub: "Send profiles to your Residential charger.", nav_connect: "Connect", nav_profiles: "Profiles",
    new_profile: "New Profile", profile_name: "Profile Name", brand: "Brand", model: "Model", charge_mode: "Charging Mode",
    mode_free: "Free", mode_timer: "Timer (Ex: 22:00 to 06:00)", charge_limit: "Charge Limit (%)", current_limit: "Current Limit (A)", current_auto: "Defined by Charger",
    payment: "Payment", mvp_note: "* Only MVP test data is accepted.", card_num: "Card Number", card_name: "Name on Card", card_val: "Expiry", save: "Save",
    use_profile: "USE", delete_profile: "DELETE", time_lbl: "Time:", cost_lbl: "Est. Cost:", payment_lbl: "Payment:",
    sync_success: "Profiles synced successfully!"
  },
  es: {
    connect_title: "Conectar", connect_sub: "Vincular al Smart HMI", btn_scan: "Escanear Código QR", btn_manual: "Ingresar Código",
    select_profile_home: "Perfil a utilizar:", no_profiles: "No se encontraron perfiles.", create_one_first: "Cree un perfil primero",
    confirm_connection: "Confirmar conexión con:", mode_label: "Modo:", limit_label: "Límite:",
    scan_title: "Apunta la Cámara", manual_title: "Ingresar Código", code_label: "Código del HMI", cancel: "Cancelar", confirm: "Conectar",
    hmi_found: "HMI Encontrado", session_auth: "Sesión Autorizada", end_session: "Finalizar Sesión",
    my_profiles: "Mis Perfiles", create_profile: "Nuevo", sync_hmi: "Sincronizar", sync_sub: "Envíe los perfiles a su cargador Residencial.", nav_connect: "Conectar", nav_profiles: "Perfiles",
    new_profile: "Nuevo Perfil", profile_name: "Nombre del Perfil", brand: "Marca", model: "Modelo", charge_mode: "Modo de Carga",
    mode_free: "Libre", mode_timer: "Timer (Ej: 22:00 a 06:00)", charge_limit: "Límite de Carga (%)", current_limit: "Límite de Corriente (A)", current_auto: "Definido por el Cargador",
    payment: "Pago", mvp_note: "* Solo se aceptan datos de prueba del MVP.", card_num: "Número de Tarjeta", card_name: "Nombre en Tarjeta", card_val: "Vencimiento", save: "Guardar",
    use_profile: "USAR", delete_profile: "BORRAR", time_lbl: "Tiempo:", cost_lbl: "Costo Est.:", payment_lbl: "Pago:",
    sync_success: "Perfiles enviados con éxito!"
  }
};

let currentLang = 'pt';

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
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i"><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h10M18 18h2"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="16" cy="18" r="2"/></svg>'
};

document.getElementById('ic-qr').innerHTML = I.qr; document.getElementById('ic-phone').innerHTML = I.phone;
document.getElementById('ic-x').innerHTML = I.x; document.getElementById('ic-check-1').innerHTML = I.check;
document.getElementById('ic-check-2').innerHTML = I.check; document.getElementById('ic-stop').innerHTML = I.stop;
document.getElementById('ic-users').innerHTML = I.users; document.getElementById('ic-plus').innerHTML = I.plus;
document.getElementById('ic-card').innerHTML = I.card; document.getElementById('ic-nav-zap').innerHTML = I.zap;
document.getElementById('ic-nav-users').innerHTML = I.users; document.getElementById('ic-refresh').innerHTML = I.refresh;

document.querySelectorAll('.lang button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.lang button').forEach(b => b.classList.remove('on'));
    e.target.classList.add('on');
    currentLang = e.target.getAttribute('data-lang');
    updateTranslations();
  });
});

function t(key) { return TR[currentLang][key] || key; }

function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerText = t(el.getAttribute('data-i18n')); });
  populateHomeProfileSelect(); renderProfiles();
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  if(tabId === 'tab-profiles') renderProfiles();
  if(tabId === 'tab-connect') populateHomeProfileSelect();
}

function showSubScreen(screenId, parentId = 'tab-connect') {
  document.querySelectorAll(`#${parentId} .sub-screen`).forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  if (screenId === 'screen-scanner') initScanner();
  if (screenId === 'screen-create-profile') populateBrands();
}

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

function populateHomeProfileSelect() {
  const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
  const select = document.getElementById('home-profile-select');
  select.innerHTML = '';
  if (profiles.length === 0) {
      select.innerHTML = `<option value="">-- ${t('create_one_first')} --</option>`;
      select.disabled = true;
  } else {
      select.disabled = false;
      profiles.forEach((p, index) => { select.innerHTML += `<option value="${index}">${p.profileName} (${p.vehicleBrand})</option>`; });
  }
}

function populateBrands() {
  const brandSelect = document.getElementById('p-brand');
  brandSelect.innerHTML = '';
  Object.keys(vehiclesData).forEach(brand => { brandSelect.innerHTML += `<option value="${brand}">${brand}</option>`; });
  updateModels();
}

function updateModels() {
  const brand = document.getElementById('p-brand').value;
  const modelSelect = document.getElementById('p-model');
  modelSelect.innerHTML = '';
  vehiclesData[brand].forEach(model => { modelSelect.innerHTML += `<option value="${model}">${model}</option>`; });
}

function saveProfile() {
  const cNum = document.getElementById('p-card-num').value; const cName = document.getElementById('p-card-name').value;
  if (cNum !== "1111 2222 3333 4444" || cName !== "xxxxxxxx") {
    showToast(currentLang === 'pt' ? "Erro: Para o MVP, utilize apenas os dados de cartão pré-preenchidos." : "Error: Only MVP test data allowed.", true);
    return;
  }
  const pName = document.getElementById('p-name').value;
  if(!pName) { showToast("Insira um nome.", true); return; }

  const newProfile = {
    profileName: pName, vehicleBrand: document.getElementById('p-brand').value, vehicleModel: document.getElementById('p-model').value,
    chargingMode: document.getElementById('p-mode').value, currentLimit: document.getElementById('p-current').value, targetChargePercentage: document.getElementById('p-limit').value
  };
  
  const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
  profiles.push(newProfile);
  localStorage.setItem('gw_profiles_v3', JSON.stringify(profiles));
  
  populateHomeProfileSelect(); showSubScreen('screen-profiles-list', 'tab-profiles');
}

function renderProfiles() {
  const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
  const container = document.getElementById('profiles-container');
  container.innerHTML = '';
  if(profiles.length === 0) {
    container.innerHTML = `<p style="color:var(--text-2); text-align:center; margin-top:20px;">${t('no_profiles')}</p>`; return;
  }
  profiles.forEach((p, index) => {
    const limitStr = p.currentLimit === 'auto' ? t('current_auto') : p.currentLimit + ' A';
    container.innerHTML += `<div class="prof"><div class="prof-top"><span class="prof-name">${p.profileName}</span></div>
        <div class="prof-line">${I.zap} ${p.vehicleBrand} ${p.vehicleModel}</div>
        <div class="prof-line">${I.check} ${t('mode_label')} ${t('mode_' + p.chargingMode)} | Meta: ${p.targetChargePercentage}%</div>
        <div class="prof-line">${I.sliders} ${t('limit_label')} ${limitStr}</div>
        <div class="prof-actions"><button onclick="deleteProfile(${index})" class="btn" style="flex:1; padding: 10px; font-size:13px;">${t('delete_profile')}</button></div></div>`;
  });
}

function deleteProfile(index) {
  const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
  profiles.splice(index, 1);
  localStorage.setItem('gw_profiles_v3', JSON.stringify(profiles));
  populateHomeProfileSelect(); renderProfiles();
}

/* =============== Conexão MQTT (Nuvem) =============== */
const mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
let currentSessionCode = null;
let html5QrcodeScanner = null;

function startConnectionFlow(type) {
  const select = document.getElementById('home-profile-select');
  if (select.disabled || select.value === "") { showToast(t('create_one_first'), true); return; }
  if (type === 'scanner') showSubScreen('screen-scanner'); else if (type === 'manual') showSubScreen('screen-manual');
}

function initScanner() {
  html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: {width: 250, height: 250} }, false);
  html5QrcodeScanner.render((decodedText) => {
      stopScanner();
      try {
          const url = new URL(decodedText);
          const code = url.searchParams.get("code");
          if(code) processConnectionCode(code); else showToast("QR Code inválido.", true);
      } catch(e) { showToast("Formato não reconhecido.", true); }
  }, (error) => {});
}

function stopScanner() { if (html5QrcodeScanner) { html5QrcodeScanner.clear(); html5QrcodeScanner = null; } }

function validateManualCode() {
  const code = document.getElementById('manual-code-input').value.trim();
  if(code) processConnectionCode(code);
}

function validateSyncCode() {
  let code = document.getElementById('sync-code-input').value.trim().toUpperCase();
  if(!code) return;
  if(!code.startsWith('RES-')) code = 'RES-' + code;
  
  const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
  if(profiles.length === 0) { showToast(t('no_profiles'), true); return; }
  
  if (typeof mqttClient !== 'undefined' && mqttClient.connected) {
      mqttClient.publish(`goodwe_hmi/sync/${code}`, JSON.stringify({ action: 'sync_profiles', profiles: profiles }));
      showToast(t('sync_success'), false);
      document.getElementById('sync-code-input').value = '';
      showSubScreen('screen-profiles-list', 'tab-profiles');
  } else {
      showToast("Aguarde a conexão MQTT.", true);
  }
}

function processConnectionCode(code) {
  currentSessionCode = code;
  mqttClient.subscribe(`goodwe_hmi/session/${code}/to_app`);
  
  document.getElementById('connected-code-display').innerText = code;
  const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
  const p = profiles[document.getElementById('home-profile-select').value];
  const limitStr = p.currentLimit === 'auto' ? t('current_auto') : p.currentLimit + ' A';
  
  document.getElementById('confirm-profile-details').innerHTML = `
      <div class="prof-name" style="font-size: 18px; color: var(--text-0); margin-bottom: 6px;">${p.profileName}</div>
      <div style="font-size: 14px; color: var(--text-1); margin-bottom: 4px;">${I.zap} ${p.vehicleBrand} ${p.vehicleModel}</div>
      <div style="font-size: 13px; color: var(--text-2);">${I.check} ${t('mode_label')} ${t('mode_' + p.chargingMode)} | Meta: ${p.targetChargePercentage}%</div>
      <div style="font-size: 13px; color: var(--text-2); margin-top:4px;">${I.sliders} ${limitStr}</div>
  `;
  showSubScreen('screen-session-setup');
}

function autorizarSessaoHome() {
  const profiles = JSON.parse(localStorage.getItem('gw_profiles_v3') || '[]');
  const profile = profiles[document.getElementById('home-profile-select').value];
  
  mqttClient.publish(`goodwe_hmi/session/${currentSessionCode}/to_hmi`, JSON.stringify({
      action: 'auth_session',
      profile: profile
  }));
  
  document.getElementById('active-profile-name').innerText = profile.profileName;
  document.getElementById('active-profile-vehicle').innerText = `${profile.vehicleBrand} ${profile.vehicleModel}`;
  showSubScreen('screen-active');
}

function cancelSession() { currentSessionCode = null; showSubScreen('screen-home'); }

mqttClient.on('message', (topic, message) => {
  if (topic.indexOf('to_app') > -1) {
      const data = JSON.parse(message.toString());
      if (data.action === 'progress') {
          const percent = data.percent;
          document.getElementById('app-charging-percent').innerText = `${percent}%`;
          const ring = document.getElementById('app-ring');
          ring.style.strokeDashoffset = (565.48 - (Math.max(0, Math.min(100, percent)) / 100) * 565.48).toFixed(1);
          
          if(data.time) document.getElementById('app-charging-time').innerText = data.time;
          if(data.cost) document.getElementById('app-charging-cost').innerText = data.cost;
          if(data.payment) document.getElementById('app-charging-pay').innerText = data.payment;
          
      } else if (data.action === 'ended') {
          showToast(currentLang === 'pt' ? "A sessão foi concluída/encerrada pela HMI." : "Session ended by HMI.", false);
          currentSessionCode = null;
          document.getElementById('app-charging-percent').innerText = "0%";
          document.getElementById('app-ring').style.strokeDashoffset = 565.48;
          showSubScreen('screen-home');
      }
  }
});

updateTranslations();