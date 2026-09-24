(function () {
    "use strict";

    /* =============== LOGO =============== */
    var LOGO = "goodwe_logo.png";
    
    function logo(cls) { 
        return '<img src="' + LOGO + '" alt="GoodWe" class="logo ' + (cls || '') + '">'; 
    }

    /* =============== ÍCONES (SVG Inline) =============== */
    var I = {
        home: '<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
        
        building: '<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16"/><path d="M15 9h4a1 1 0 0 1 1 1v11"/><path d="M8 8h2M8 12h2M8 16h2"/><path d="M2 21h20"/>',
        
        arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7"/>',
        
        arrowleft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
        
        zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
        
        plug: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6z"/><path d="M12 17v5"/>',
        
        wifi: '<path d="M5 12.5a11 11 0 0 1 14 0"/><path d="M8.5 15.8a6 6 0 0 1 7 0"/><path d="M12 19h.01"/>',
        
        wifioff: '<path d="m2 2 20 20"/><path d="M5 12.5a11 11 0 0 1 5-2.7"/><path d="M19 12.5a11 11 0 0 0-4-2.5"/><path d="M8.5 15.8a6 6 0 0 1 3-1.6"/><path d="M12 19h.01"/>',
        
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        
        activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
        
        settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
        
        grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
        
        gauge: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-3.5 3.5"/>',
        
        chart: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="4" width="3" height="14"/>',
        
        calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
        
        clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        
        lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
        
        unlock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>',
        
        card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
        
        qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM19 19h2v2h-2zM14 19h2M19 14h2"/>',
        
        phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
        
        check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.3 2.3 4.7-4.7"/>',
        
        alert: '<path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0"/><path d="M12 9v4M12 17h.01"/>',
        
        play: '<path d="M6 4l14 8-14 8z"/>',
        
        pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
        
        stop: '<rect x="5" y="5" width="14" height="14" rx="2"/>',
        
        refresh: '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>',
        
        sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h10M18 18h2"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="16" cy="18" r="2"/>',
        
        battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2"/>',
        
        wrench: '<path d="M14.7 6.3a4 4 0 0 0 5.3 5.2l-9 9a2.8 2.8 0 0 1-4-4l9-9z"/>',
        
        shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
        
        dollar: '<path d="M12 2v20"/><path d="M17 6.5c0-2-2.2-3-5-3s-5 1-5 3.2S9 10 12 10.5s5 1.3 5 3.3-2.2 3.2-5 3.2-5-1-5-3"/>',
        
        wallet: '<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2"/><path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8H6a3 3 0 0 1-3-3"/><path d="M17 14h.01"/>',
        
        cloud: '<path d="M17.5 19a4.5 4.5 0 0 0 .3-9 6 6 0 0 0-11.6 1.6A3.7 3.7 0 0 0 6.5 19z"/>',
        
        chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/>',
        
        x: '<path d="M18 6 6 18M6 6l12 12"/>',
        
        thermo: '<path d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0"/>',
        
        bolt2: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
        
        link: '<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
        
        plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
    };

    function ic(name, cls) { 
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="i ' + (cls || '') + '">' + (I[name] || '') + '</svg>'; 
    }

    /* =============== TRADUÇÕES =============== */
    var TR = {
        pt: {
            smart_sub: 'UM CARREGADOR, DUAS EXPERIÊNCIAS',
            disclaimer: 'Protótipo conceitual — não é um produto oficial GoodWe.',
            f1: 'Um carregador',
            f2: 'Offline-first',
            f3: 'Gestão centralizada',
            explore_res: 'Explorar residencial',
            explore_com: 'Explorar comercial',
            home: 'CASA',
            business: 'EMPRESA',
            residential: 'Residencial',
            commercial: 'Comercial',
            res_l1: 'Carregamento privado',
            res_l2: 'Usuários família',
            res_l3: 'Controle local simples',
            com_l1: 'Recarga pública/privada',
            com_l2: 'Múltiplos usuários',
            com_l3: 'Gestão do operador',
            onb_q: 'Como este carregador será usado?',
            onb_foot: 'Um carregador · duas experiências · o software define o ambiente',
            back: 'Voltar',
            close: 'Fechar',
            save: 'Salvar',
            confirm: 'Confirmar',
            cancel: 'Cancelar',
            online: 'Online',
            offline: 'Offline',
            local_cloud: 'LOCAL + CLOUD',
            cloud_local: 'CLOUD + LOCAL',
            RESIDENCIAL: 'RESIDENCIAL',
            COMERCIAL: 'COMERCIAL',
            nav_charger: 'Carregador',
            nav_profiles: 'Perfis',
            nav_activity: 'Atividade',
            nav_settings: 'Configurações',
            nav_stations: 'Estações',
            nav_users: 'Usuários',
            nav_ops: 'Operações',
            nav_reports: 'Relatórios',
            ready: 'Pronto para carregar',
            available: 'Disponível',
            v_not_conn: 'Veículo não conectado',
            v_conn: 'Veículo conectado',
            connect_v: 'Conectar veículo',
            connecting: 'Conectando...',
            disconnect: 'Desconectar',
            power: 'POTÊNCIA',
            energy: 'ENERGIA',
            time: 'TEMPO',
            lockL: 'BLOQUEIO',
            eta: 'ETA',
            target: 'META',
            off: 'OFF',
            on: 'ON',
            enabled: 'Ativo',
            disabled: 'Desativado',
            start_charge: 'Iniciar carregamento',
            pause_charge: 'Pausar carregamento',
            stop_charge: 'Parar carregamento',
            resume_charge: 'Retomar carregamento',
            charging: 'CARREGANDO',
            paused: 'PAUSADO',
            completed: 'CONCLUÍDO',
            new_session: 'Nova sessão',
            curr_limit: 'Limite de corrente',
            curr_limit_s: 'LIMITE DE<br>CORRENTE',
            schedule: 'Agendamento',
            timer: 'Timer',
            lock: 'Bloqueio',
            load_mgmt: 'Gestão de carga',
            start_t: 'Início',
            end_t: 'Fim',
            target_l: 'Alvo',
            fam_profiles: 'Perfis familiares',
            sync_local: 'Os perfis são importados do App e permanecem salvos offline.',
            rfid_foot: 'Perfis configurados via App · armazenados localmente no carregador',
            activity: 'Atividade',
            sys_status: 'Status do sistema',
            d_power: 'Potência',
            d_temp: 'Temperatura',
            d_veh: 'Comunicação veículo',
            d_safe: 'Segurança',
            d_ctrl: 'Controlador local',
            auth_method: 'MÉTODO DE AUTENTICAÇÃO',
            rfid: 'RFID',
            qr: 'QR Code',
            app: 'App',
            detecting: 'Detectando...',
            rfid_detected: 'RFID detectado',
            qr_detected: 'QR Code detectado',
            app_detected: 'App detectado',
            scan_qr: 'Escaneie o QR Code',
            scan_qr_sub: 'Abra o app e aponte a câmera',
            type_app: 'Digite o código no App',
            type_app_sub: 'Para vincular a STATION 04',
            account: 'Conta',
            personal: 'Personal',
            payment: 'Pagamento',
            tariff: 'Tarifa',
            avail_power: 'Potência disponível',
            select_power: 'Selecionar potência',
            power_limit_note: 'Limite de potência configurado pelo operador da estação.',
            est_cost: 'CUSTO ESTIMADO',
            est_remain: 'RESTANTE ESTIMADO',
            op_access: 'Acessar plataforma do operador',
            op_mode: 'MODO OPERADOR',
            hub: 'GoodWe Charging Hub',
            st_total: 'ESTAÇÕES TOTAIS',
            st_charging: 'CARREGANDO',
            st_avail: 'DISPONÍVEIS',
            st_maint: 'EM MANUTENÇÃO',
            st_err: 'COM ERRO',
            s_available: 'DISPONÍVEL',
            s_charging: 'CARREGANDO',
            s_maintenance: 'MANUTENÇÃO',
            s_error: 'ERRO',
            users: 'Usuários',
            user: 'USUÁRIO',
            rfid_card: 'CARTÃO RFID',
            paymentU: 'PAGAMENTO',
            sessions: 'SESSÕES',
            load_title: 'Gestão de carga',
            site_limit: 'LIMITE DE POTÊNCIA DO SITE',
            cur_demand: 'DEMANDA ATUAL',
            lm_state: 'GESTÃO DE CARGA',
            active: 'Ativo',
            reports: 'Relatórios',
            r_energy: 'ENERGIA',
            r_sessions: 'SESSÕES',
            r_cost: 'CUSTO ESTIMADO',
            this_week: 'esta semana',
            est_revenue: 'receita estimada',
            ch_energy: 'Energia · kWh / dia',
            ch_sessions: 'Sessões / dia',
            ch_revenue: 'Receita estimada · R$',
            settings: 'Configurações',
            restricted: 'Restrito ao operador',
            station: 'STATION',
            status: 'STATUS',
            session: 'SESSÃO',
            cost: 'CUSTO',
            err_title: 'Erro de comunicação com o veículo',
            try_again: 'Tentar novamente',
            local_diag: 'Diagnóstico local',
            contact_op: 'Contatar operador',
            offline_active: 'OPERAÇÃO LOCAL ATIVA — FUNÇÕES ESSENCIAIS DISPONÍVEIS',
            conn_restored: 'Conexão restabelecida',
            syncing: 'Sincronizando dados locais...',
            sync_done: 'SINCRONIZAÇÃO CONCLUÍDA',
            sy1: 'Sessões de carregamento',
            sy2: 'Dados de energia',
            sy3: 'Atividade de usuários',
            sy4: 'Configurações',
            sy5: 'Eventos',
            sy6: 'Registros de pagamento',
            demo: 'Modo demonstração',
            d_conn: 'CONEXÃO',
            d_veh_s: 'VEÍCULO',
            d_state: 'ESTADO',
            d_batt: 'BATERIA',
            d_auth: 'AUTENTICAÇÃO',
            d_op: 'OPERADOR',
            d_connected: 'Conectado',
            d_disconnected: 'Desconectado',
            d_charge: 'Carregar',
            d_pause: 'Pausar',
            d_finish: 'Concluir',
            d_error: 'Erro',
            d_rfid: 'RFID detectado',
            d_high: 'Alta demanda (280 kW)',
            d_norm: 'Demanda normal (300 kW)',
            d_st3: 'Station 03: erro',
            d_reset: 'Resetar demo',
            cfg_users: 'Usuários',
            cfg_rfid: 'RFID',
            cfg_pay: 'Pagamentos',
            cfg_tariff: 'Tarifas',
            cfg_limits: 'Limites de potência',
            cfg_load: 'Gestão de carga',
            cfg_sched: 'Agendamento',
            cfg_rep: 'Relatórios',
            cfg_energy: 'Energia',
            cfg_maint: 'Manutenção',
            cfg_diag: 'Diagnósticos',
            cfg_net: 'Rede',
            cfg_fw: 'Firmware',
            cfg_int: 'Integrações',
            cfg_adm: 'Administração',
            days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
            weekends: 'FINS DE SEMANA'
        },
        en: {
            smart_sub: 'ONE CHARGER, TWO EXPERIENCES', disclaimer: 'Concept prototype — not an official GoodWe product.',
            f1: 'One charger', f2: 'Offline-first', f3: 'Centralized management', explore_res: 'Explore residential', explore_com: 'Explore commercial',
            home: 'HOME', business: 'BUSINESS', residential: 'Residential', commercial: 'Commercial',
            res_l1: 'Private charging', res_l2: 'Family users', res_l3: 'Simple local control', com_l1: 'Public/private charging', com_l2: 'Multiple users', com_l3: 'Operator management',
            onb_q: 'How will this charger be used?', onb_foot: 'One charger · two experiences · software defines the environment',
            back: 'Back', close: 'Close', save: 'Save', confirm: 'Confirm', cancel: 'Cancel', online: 'Online', offline: 'Offline', local_cloud: 'LOCAL + CLOUD', cloud_local: 'CLOUD + LOCAL',
            RESIDENCIAL: 'RESIDENTIAL', COMERCIAL: 'COMMERCIAL', nav_charger: 'Charger', nav_profiles: 'Profiles', nav_activity: 'Activity', nav_settings: 'Settings',
            nav_stations: 'Stations', nav_users: 'Users', nav_ops: 'Operations', nav_reports: 'Reports', ready: 'Ready to charge', available: 'Available',
            v_not_conn: 'Vehicle not connected', v_conn: 'Vehicle connected', connect_v: 'Connect vehicle', connecting: 'Connecting...', disconnect: 'Disconnect',
            power: 'POWER', energy: 'ENERGY', time: 'TIME', lockL: 'LOCK', eta: 'ETA', target: 'TARGET', off: 'OFF', on: 'ON', enabled: 'Enabled', disabled: 'Disabled',
            start_charge: 'Start charging', pause_charge: 'Pause charging', stop_charge: 'Stop charging', resume_charge: 'Resume charging', charging: 'CHARGING', paused: 'PAUSED', completed: 'COMPLETED',
            new_session: 'New session', curr_limit: 'Current limit', curr_limit_s: 'CURRENT<br>LIMIT', schedule: 'Schedule', timer: 'Timer',
            lock: 'Lock', load_mgmt: 'Load management', start_t: 'Start', end_t: 'End', target_l: 'Target', fam_profiles: 'Family profiles', sync_local: 'Profiles are imported from App and saved offline.',
            rfid_foot: 'Profiles configured via App · stored locally on the charger', activity: 'Activity', sys_status: 'System status',
            d_power: 'Power', d_temp: 'Temperature', d_veh: 'Vehicle communication', d_safe: 'Safety', d_ctrl: 'Local controller', auth_method: 'AUTHENTICATION METHOD', rfid: 'RFID', qr: 'QR Code', app: 'App',
            detecting: 'Detecting...', rfid_detected: 'RFID detected', qr_detected: 'QR Code detected', app_detected: 'App detected',
            scan_qr: 'Scan QR Code', scan_qr_sub: 'Open the app and point your camera', type_app: 'Enter code in App', type_app_sub: 'To link with STATION 04',
            account: 'Account', personal: 'Personal', payment: 'Payment', tariff: 'Tariff', avail_power: 'Available power',
            select_power: 'Select power', power_limit_note: 'Power limit configured by station operator.', est_cost: 'ESTIMATED COST', est_remain: 'ESTIMATED REMAINING',
            op_access: 'Open operator platform', op_mode: 'OPERATOR MODE', hub: 'GoodWe Charging Hub', st_total: 'TOTAL STATIONS', st_charging: 'CHARGING', st_avail: 'AVAILABLE', st_maint: 'MAINTENANCE', st_err: 'ERROR',
            s_available: 'AVAILABLE', s_charging: 'CHARGING', s_maintenance: 'MAINTENANCE', s_error: 'ERROR', users: 'Users', user: 'USER', rfid_card: 'RFID CARD', paymentU: 'PAYMENT', sessions: 'SESSIONS',
            load_title: 'Load management', site_limit: 'SITE POWER LIMIT', cur_demand: 'CURRENT DEMAND', lm_state: 'LOAD MANAGEMENT', active: 'Active',
            reports: 'Reports', r_energy: 'ENERGY', r_sessions: 'SESSIONS', r_cost: 'ESTIMATED COST', this_week: 'this week', est_revenue: 'estimated revenue',
            ch_energy: 'Energy · kWh / day', ch_sessions: 'Sessions / day', ch_revenue: 'Estimated revenue · R$', settings: 'Settings', restricted: 'Operator restricted',
            station: 'STATION', status: 'STATUS', session: 'SESSION', cost: 'COST', err_title: 'Vehicle communication error', try_again: 'Try again',
            local_diag: 'Local diagnostics', contact_op: 'Contact operator', offline_active: 'LOCAL OPERATION ACTIVE — ESSENTIAL FUNCTIONS AVAILABLE',
            conn_restored: 'Connection restored', syncing: 'Syncing local data...', sync_done: 'SYNC COMPLETE',
            sy1: 'Charging sessions', sy2: 'Energy data', sy3: 'User activity', sy4: 'Settings', sy5: 'Events', sy6: 'Payment records',
            demo: 'Demo mode', d_conn: 'CONNECTION', d_veh_s: 'VEHICLE', d_state: 'STATE', d_batt: 'BATTERY', d_auth: 'AUTHENTICATION', d_op: 'OPERATOR',
            d_connected: 'Connected', d_disconnected: 'Disconnected', d_charge: 'Charge', d_pause: 'Pause', d_finish: 'Complete', d_error: 'Error', d_rfid: 'RFID detected',
            d_high: 'High demand (280 kW)', d_norm: 'Normal demand (300 kW)', d_st3: 'Station 03: error', d_reset: 'Reset demo',
            cfg_users: 'Users', cfg_rfid: 'RFID', cfg_pay: 'Payments', cfg_tariff: 'Tariffs', cfg_limits: 'Power limits', cfg_load: 'Load management', cfg_sched: 'Scheduling', cfg_rep: 'Reports', cfg_energy: 'Energy', cfg_maint: 'Maintenance',
            cfg_diag: 'Diagnostics', cfg_net: 'Network', cfg_fw: 'Firmware', cfg_int: 'Integrations', cfg_adm: 'Administration',
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], weekends: 'WEEKENDS'
        },
        es: {
            smart_sub: 'UN CARGADOR, DOS EXPERIENCIAS', disclaimer: 'Prototipo conceptual — no es un producto oficial GoodWe.',
            f1: 'Un cargador', f2: 'Offline-first', f3: 'Gestión centralizada', explore_res: 'Explorar residencial', explore_com: 'Explorar comercial',
            home: 'CASA', business: 'EMPRESA', residential: 'Residencial', commercial: 'Comercial',
            res_l1: 'Carga privada', res_l2: 'Usuarios familia', res_l3: 'Control local simple', com_l1: 'Carga pública/privada', com_l2: 'Múltiples usuarios', com_l3: 'Gestión del operador',
            onb_q: '¿Cómo se usará este cargador?', onb_foot: 'Un cargador · dos experiencias · el software define el entorno',
            back: 'Volver', close: 'Cerrar', save: 'Guardar', confirm: 'Confirmar', cancel: 'Cancelar', online: 'En línea', offline: 'Sin conexión', local_cloud: 'LOCAL + CLOUD', cloud_local: 'CLOUD + LOCAL',
            RESIDENCIAL: 'RESIDENCIAL', COMERCIAL: 'COMERCIAL', nav_charger: 'Cargador', nav_profiles: 'Perfiles', nav_activity: 'Actividad', nav_settings: 'Ajustes',
            nav_stations: 'Estaciones', nav_users: 'Usuarios', nav_ops: 'Operaciones', nav_reports: 'Informes', ready: 'Listo para cargar', available: 'Disponible',
            v_not_conn: 'Vehículo no conectado', v_conn: 'Vehículo conectado', connect_v: 'Conectar vehículo', connecting: 'Conectando...', disconnect: 'Desconectar',
            power: 'POTENCIA', energy: 'ENERGÍA', time: 'TIEMPO', lockL: 'BLOQUEO', eta: 'ETA', target: 'META', off: 'OFF', on: 'ON', enabled: 'Activo', disabled: 'Desactivado',
            start_charge: 'Iniciar carga', pause_charge: 'Pausar carga', stop_charge: 'Detener carga', resume_charge: 'Reanudar carga', charging: 'CARGANDO', paused: 'PAUSADO', completed: 'COMPLETADO',
            new_session: 'Nueva sesión', curr_limit: 'Límite de corriente', curr_limit_s: 'LÍMITE DE<br>CORRIENTE', schedule: 'Programación', timer: 'Timer',
            lock: 'Bloqueo', load_mgmt: 'Gestión de carga', start_t: 'Inicio', end_t: 'Fin', target_l: 'Meta', fam_profiles: 'Perfiles familiares', sync_local: 'Los perfiles se importan de la App y se guardan offline.',
            rfid_foot: 'Perfiles configurados vía App · almacenados localmente en el cargador', activity: 'Actividad', sys_status: 'Estado del sistema',
            d_power: 'Potencia', d_temp: 'Temperatura', d_veh: 'Comunicación vehículo', d_safe: 'Seguridad', d_ctrl: 'Controlador local', auth_method: 'MÉTODO DE AUTENTICACIÓN', rfid: 'RFID', qr: 'Código QR', app: 'App',
            detecting: 'Detectando...', rfid_detected: 'RFID detectado', qr_detected: 'Código QR detectado', app_detected: 'App detectada',
            scan_qr: 'Escanea el código QR', scan_qr_sub: 'Abre la app y apunta la cámara', type_app: 'Ingresa el código en la App', type_app_sub: 'Para vincular a la STATION 04',
            account: 'Cuenta', personal: 'Personal', payment: 'Pago', tariff: 'Tarifa', avail_power: 'Potencia disponible',
            select_power: 'Seleccionar potencia', power_limit_note: 'Límite de potencia configurado por el operador.', est_cost: 'COSTO ESTIMADO', est_remain: 'RESTANTE ESTIMADO',
            op_access: 'Acceder a la plataforma del operador', op_mode: 'MODO OPERADOR', hub: 'GoodWe Charging Hub', st_total: 'ESTACIONES TOTALES', st_charging: 'CARGANDO', st_avail: 'DISPONIBLES', st_maint: 'EN MANTENIMIENTO', st_err: 'CON ERROR',
            s_available: 'DISPONIBLE', s_charging: 'CARGANDO', s_maintenance: 'MANTENIMIENTO', s_error: 'ERROR', users: 'Usuarios', user: 'USUARIO', rfid_card: 'TARJETA RFID', paymentU: 'PAGO', sessions: 'SESIONES',
            load_title: 'Gestión de carga', site_limit: 'LÍMITE DE POTENCIA DEL SITIO', cur_demand: 'DEMANDA ACTUAL', lm_state: 'GESTIÓN DE CARGA', active: 'Activo',
            reports: 'Informes', r_energy: 'ENERGÍA', r_sessions: 'SESIONES', r_cost: 'COSTO ESTIMADO', this_week: 'esta semana', est_revenue: 'ingresos estimados',
            ch_energy: 'Energía · kWh / día', ch_sessions: 'Sesiones / día', ch_revenue: 'Ingresos estimados · R$', settings: 'Ajustes', restricted: 'Restringido al operador',
            station: 'STATION', status: 'ESTADO', session: 'SESIÓN', cost: 'COSTO', err_title: 'Error de comunicación con el vehículo', try_again: 'Reintentar',
            local_diag: 'Diagnóstico local', contact_op: 'Contactar operador', offline_active: 'OPERACIÓN LOCAL ACTIVA — FUNCIONES ESENCIALES DISPONIBLES',
            conn_restored: 'Conexión restablecida', syncing: 'Sincronizando datos locales...', sync_done: 'SINCRONIZACIÓN COMPLETA',
            sy1: 'Sesiones de carga', sy2: 'Datos de energía', sy3: 'Actividad de usuarios', sy4: 'Ajustes', sy5: 'Eventos', sy6: 'Registros de pago',
            demo: 'Modo demostración', d_conn: 'CONEXIÓN', d_veh_s: 'VEHÍCULO', d_state: 'ESTADO', d_batt: 'BATERÍA', d_auth: 'AUTENTICAACIÓN', d_op: 'OPERADOR',
            d_connected: 'Conectado', d_disconnected: 'Desconectado', d_charge: 'Cargar', d_pause: 'Pausar', d_finish: 'Completar', d_error: 'Error', d_rfid: 'RFID detectado',
            d_high: 'Alta demanda (280 kW)', d_norm: 'Demanda normal (300 kW)', d_st3: 'Station 03: error', d_reset: 'Resetear demo',
            cfg_users: 'Usuarios', cfg_rfid: 'RFID', cfg_pay: 'Pagos', cfg_tariff: 'Tarifas', cfg_limits: 'Límites de potencia', cfg_load: 'Gestión de carga', cfg_sched: 'Programación', cfg_rep: 'Informes', cfg_energy: 'Energía', cfg_maint: 'Mantenimiento',
            cfg_diag: 'Diagnósticos', cfg_net: 'Red', cfg_fw: 'Firmware', cfg_int: 'Integraciones', cfg_adm: 'Administración',
            days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], weekends: 'FINES DE SEMANA'
        }
    };

    function t(k) { 
        var o = TR[S.lang] || TR.pt; 
        return (k in o) ? o[k] : (TR.pt[k] !== undefined ? TR.pt[k] : k); 
    }

    /* =============== DADOS BASE =============== */
    var USERS = [{ n: 'João Silva', rfid: '****4821', pay: 'Visa ••••1234', s: 42 }];
    var ST_NAMES = ['Ana Costa', 'Carlos Lima', 'Beatriz Souza', 'Pedro Alves', 'Marina Reis', 'Rafael Dias'];

    function mkStations() {
        var avail = [1, 7, 10, 13, 2], err = [3], maint = [5], pwSet = [22, 18.4, 16, 11, 7.4], out = [], ui = 0;
        for (var i = 1; i <= 24; i++) {
            var s = { id: i };
            if (err.indexOf(i) >= 0) s.status = 'error';
            else if (maint.indexOf(i) >= 0) s.status = 'maintenance';
            else if (avail.indexOf(i) >= 0) s.status = 'available';
            else s.status = 'charging';
            
            s.maxPowerLimit = (i % 3 === 0 ? 22 : i % 2 === 0 ? 11 : 7.4);

            if (s.status === 'charging') {
                s.power = (i === 4 || i === 8) ? 18.4 : pwSet[(i * 3) % pwSet.length];
                if (s.power > s.maxPowerLimit) s.power = s.maxPowerLimit;

                s.user = (i === 4) ? 'João Silva' : ST_NAMES[ui++ % ST_NAMES.length];
                s.energy = +(s.power * 0.69 + (i % 5)).toFixed(1);
                s.elapsed = (i === 4) ? 37 * 60 + 21 : ((i * 617) % 3400) + 300;
                s.rfid = '****' + (4000 + (i * 137) % 5900);
                s.pay = 'Visa ••••' + (1000 + (i * 311) % 8900);
                s.cost = +(s.energy * 1.89).toFixed(2);
            }
            s.opts = { load: true, rfid: true, rep: false };
            out.push(s);
        }
        return out;
    }

    /* =============== ESTADO GLOBAL =============== */
    var S = {
        animateNext: true,
        speed: 1, 
        view: 'landing',
        lang: 'pt',
        online: true,
        sync: 0,
        demo: false,
        modal: null,
        solar: { connected: false, lux: 0, percent: 0, angle: 0 },
        reports: { errors: [
            {id: 'E-042', st: 3, msg: 'Falha de Comunicação ISO 15118', level: 'Alto', res: false},
            {id: 'M-019', st: 5, msg: 'Manutenção Agendada', level: 'Médio', res: false}
        ]},
        res: {
            tab: 'charger', v: 'idle', batt: 42, target: 80, power: 10.8, energy: 0, sec: 0,
            limit: 32, maxLocalLimit: 22, lock: false, load: true, timer: null, syncCode: '', activeProfileIdx: 0,
            sched: { s: '22:00', e: '06:00', t: 80, d: [1, 1, 1, 1, 1, 0, 0] },
            profiles: [
                { n: 'JOÃO', c: 'c-red', a: '32 A', h: 'Timer', rawLimit: '32' },
                { n: 'MARIA', c: 'c-green', a: 'Auto', h: 'Livre', rawLimit: 'auto' }
            ]
        },
        com: {
            tab: 'charger', step: 'station', selStation: null, method: null, user: null, batt: 64, target: 100, mode: 'Livre',
            car: 'Desconhecido', energy: 0, sec: 0, power: 18.4, sel: 22, max: 22, tariff: 1.89, cost: 0, err: false, appCodeStr: ''
        },
        op: { tab: 'stations', station: null },
        stations: mkStations(),
        siteLimit: 300
    };

    function pad(n) { return (n < 10 ? '0' : '') + n; }
    function hms(s) { 
        s = Math.floor(s); 
        return pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s % 3600 / 60)) + ':' + pad(s % 60); 
    }
    function mmss(s) { 
        s = Math.max(0, Math.floor(s)); 
        return pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s % 3600 / 60)); 
    }
    function eta(sec) { 
        sec = Math.max(0, Math.round(sec)); 
        var h = Math.floor(sec / 3600), m = Math.round(sec % 3600 / 60); 
        return (h > 0 ? h + 'h ' : '') + m + 'min'; 
    }
    function brl(v) { return 'R$ ' + v.toFixed(2).replace('.', ','); }
    
    function ring(pct, color, size, sw, idSuffix) {
        size = size || 260; sw = sw || 10;
        var r = (size - sw) / 2, c = 2 * Math.PI * r, off = c - (Math.max(0, Math.min(100, pct)) / 100) * c;
        var idStr = idSuffix ? ' id="' + idSuffix + '"' : '';
        return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
            '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="' + sw + '"/>' +
            '<circle' + idStr + ' cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="' + sw + '" ' +
            'stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" ' +
            'transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')" style="transition:stroke-dashoffset .6s ease;filter:drop-shadow(0 0 10px ' + color + '88)"/></svg>';
    }

    function statusText(st) { return t('s_' + st); }

    function getBatteryCapacity(carModel) {
        if (!carModel) return 60;
        var c = carModel.toUpperCase();
        if (c.includes("MODEL S") || c.includes("MODEL X") || c.includes("CYBERTRUCK") || c.includes("TAYCAN")) return 100;
        if (c.includes("SEAL") || c.includes("MODEL Y") || c.includes("ID.4") || c.includes("ID.5") || c.includes("EQE") || c.includes("Q8")) return 80;
        if (c.includes("MODEL 3") || c.includes("YUAN") || c.includes("XC40") || c.includes("POLESTAR") || c.includes("NIRO")) return 65;
        if (c.includes("ID.3") || c.includes("BOLT") || c.includes("LEAF") || c.includes("MEGANE")) return 55;
        if (c.includes("DOLPHIN") && !c.includes("MINI")) return 45;
        if (c.includes("DOLPHIN MINI") || c.includes("KWID") || c.includes("E-JS1") || c.includes("ICAR") || c.includes("ZOE") || c.includes("500E")) return 35;
        return 60;
    }

    /* =============== LÓGICA DE SIMULAÇÃO (TICKER) =============== */
    setInterval(function () {
        var dirty = false;
        
        // ------------------ MODO COMERCIAL ------------------
        var c = S.com;
        if (S.view === 'com' && c.step === 'charging') {
            c.sec += S.speed;
            c.energy += (c.power / 3600) * S.speed;
            c.cost = +(c.energy * c.tariff).toFixed(2);

            var cap = getBatteryCapacity(c.car);
            var addedPct = ((c.power / 3600) / cap) * 100 * S.speed;
            c.batt = Math.min(c.target, c.batt + addedPct);

            if (typeof mqttClient !== 'undefined' && mqttClient.connected && c.appCodeStr) {
                mqttClient.publish('goodwe_hmi/session/' + c.appCodeStr + '/to_app', JSON.stringify({
                    action: 'progress',
                    percent: Math.round(c.batt),
                    time: hms(c.sec),
                    cost: brl(c.cost),
                    payment: 'Visa ••••1234'
                }));
            }

            if (c.batt >= c.target) {
                c.batt = c.target;
                A.comStop(); 
                dirty = true;
            } else if (c.tab === 'charger') {
                var elPct = document.getElementById('com-pct');
                var elEn = document.getElementById('com-energy');
                var elTm = document.getElementById('com-time');
                var elCost = document.getElementById('com-cost');
                var elRem = document.getElementById('com-rem');
                var elRg = document.getElementById('com-ring-circ');

                if (elPct) elPct.innerText = Math.round(c.batt) + '%';
                if (elEn) elEn.innerText = c.energy.toFixed(1);
                if (elTm) elTm.innerText = hms(c.sec);
                if (elCost) elCost.innerText = brl(c.cost);
                if (elRem) {
                    var kwhNeeded = ((c.target - c.batt) / 100) * cap;
                    var remSec = (c.power > 0) ? (kwhNeeded / c.power) * 3600 : 0;
                    elRem.innerText = mmss(remSec);
                }
                if (elRg) {
                    var cc = 2 * Math.PI * 125;
                    elRg.style.strokeDashoffset = (cc - (Math.max(0, Math.min(100, c.batt)) / 100) * cc).toFixed(1);
                }
            }
        }

        // ------------------ MODO RESIDENCIAL ------------------
        var r = S.res;
        if (S.view === 'res') {
            if (r.v === 'scheduled') {
                var now = new Date();
                var day = (now.getDay() + 6) % 7; 
                var hr = pad(now.getHours()) + ':' + pad(now.getMinutes());
                
                var inWindow = false;
                if (r.sched.s <= r.sched.e) {
                    inWindow = (hr >= r.sched.s && hr <= r.sched.e);
                } else {
                    inWindow = (hr >= r.sched.s || hr <= r.sched.e);
                }

                if (r.sched.d[day] && inWindow) {
                    A.resForceStart();
                    dirty = true;
                }
            }
            else if (r.v === 'charging') {
                r.sec += S.speed;
                r.energy += (r.power / 3600) * S.speed;
                r.batt = Math.min(r.target, r.batt + ((r.power / 3600) / 45 * 100) * S.speed);

                var isTimerDone = false;
                if (r.timer) {
                    isTimerDone = r.sec >= (r.timer * 60);
                }

                if (r.batt >= r.target - 0.01 || isTimerDone) {
                    r.batt = isTimerDone ? r.batt : r.target;
                    r.v = 'done';
                    dirty = true;
                }
                else if (r.tab === 'charger') {
                    var relPct = document.getElementById('res-pct');
                    var relEn = document.getElementById('res-energy');
                    var relTm = document.getElementById('res-time');
                    var relRg = document.getElementById('res-ring-circ');
                    
                    if (relPct) relPct.innerText = Math.round(r.batt) + '%';
                    if (relEn) relEn.innerText = r.energy.toFixed(1);
                    if (relTm) relTm.innerText = hms(r.sec);
                    if (relRg) {
                        var rcc = 2 * Math.PI * 125;
                        relRg.style.strokeDashoffset = (rcc - (Math.max(0, Math.min(100, r.batt)) / 100) * rcc).toFixed(1);
                    }
                }
            }
        }

        if (dirty) render();
    }, 1000);

    /* =============== AÇÕES (Event Handlers) =============== */
    var A = {
        nav: function (v) { S.view = v; window.scrollTo(0, 0); },
        lang: function (v) { S.lang = v; },
        pickMode: function (m) {
            if (m === 'res') { S.view = 'res'; S.res.tab = 'charger'; }
            else { S.view = 'com'; S.com.step = 'station'; S.com.tab = 'charger'; }
            window.scrollTo(0, 0);
        },
        resTab: function (v) { S.res.tab = v; },
        comTab: function (v) { S.com.tab = v; },
        opTab: function (v) { S.op.tab = v; S.op.station = null; },
        
        toOp: function () {
            S.modal = { type: 'pwd', error: false };
        },
        confirmPwd: function() {
            var pwd = document.getElementById('op-pwd-input').value;
            if (pwd === "0000") {
                S.modal = null;
                S.view = 'op'; S.op.tab = 'stations'; S.op.station = null; window.scrollTo(0, 0); 
                render();
            } else {
                S.modal.error = true;
                render();
            }
        },
        saveModal: function() {
            if (S.modal && S.modal.type === 'cfg' && S.modal.key === 'cfg_tariff') {
                var el = document.getElementById('tariff-input');
                if (el) {
                    var val = parseFloat(el.value.replace(',', '.'));
                    if (!isNaN(val)) S.com.tariff = val;
                }
            }
            S.modal = null;
            render();
        },
        
        toCom: function () { S.view = 'com'; S.com.step = 'station'; S.com.tab = 'charger'; window.scrollTo(0, 0); },

        // Ações Residenciais
        connect: function () {
            if (!S.online) { S.modal = { type: 'offline_err' }; return; }
            S.res.v = 'connecting';
            render();
            setTimeout(function () { S.res.v = 'connected'; render(); }, 1300);
        },
        disconnect: function () { S.res.v = 'idle'; S.res.batt = 42; S.res.energy = 0; S.res.sec = 0; },
        resStart: function () {
            var now = new Date();
            var day = (now.getDay() + 6) % 7;
            var hr = pad(now.getHours()) + ':' + pad(now.getMinutes());
            
            var inWindow = false;
            if (S.res.sched.s <= S.res.sched.e) {
                inWindow = (hr >= S.res.sched.s && hr <= S.res.sched.e);
            } else {
                inWindow = (hr >= S.res.sched.s || hr <= S.res.sched.e);
            }
            
            var isConfigured = S.res.sched.d.some(function (v) { return v === 1; }) && (S.res.sched.s !== S.res.sched.e);

            if (isConfigured && (!S.res.sched.d[day] || !inWindow)) {
                S.res.v = 'scheduled'; 
            } else {
                A.resForceStart();
            }
        },
        resForceStart: function () { 
            var aP = S.res.profiles[S.res.activeProfileIdx];
            var reqLimit = S.res.limit;
            
            if (aP && aP.rawLimit && aP.rawLimit !== 'auto') {
                reqLimit = parseInt(aP.rawLimit);
                S.res.load = false; 
            }
            
            if (reqLimit > S.res.maxLocalLimit) {
                S.modal = { type: 'power_err', maxLimit: S.res.maxLocalLimit };
                reqLimit = S.res.maxLocalLimit;
            }
            
            S.res.limit = reqLimit;
            S.res.power = (reqLimit * 220) / 1000;
            S.res.v = 'charging'; 
        }, 
        resPause: function () { S.res.v = 'paused'; },
        resResume: function () { S.res.v = 'charging'; },
        resStop: function () { S.res.v = 'done'; },
        resNew: function () { S.res.v = 'idle'; S.res.batt = 42; S.res.energy = 0; S.res.sec = 0; },
        limit: function (v) { S.res.limit = +v; },
        timer: function (v) { S.res.timer = (S.res.timer === +v ? null : +v); },
        lockT: function () { S.res.lock = !S.res.lock; },
        loadT: function () { S.res.load = !S.res.load; },
        day: function (i) { S.res.sched.d[+i] = S.res.sched.d[+i] ? 0 : 1; },
        speed: function (v) { S.speed = parseFloat(v); },

        // Ações Comerciais e MQTT
        selComStation: function(id) {
            var st = S.stations.find(function(x){ return x.id === +id; });
            if(st && st.status === 'charging') {
                S.modal = { type: 'in_use', stId: id };
                return;
            }
            S.com.selStation = id;
            S.com.step = 'idle';
            
            if(st && st.maxPowerLimit) {
                S.com.max = st.maxPowerLimit;
                S.com.sel = Math.min(S.com.sel, S.com.max);
            }
        },
        auth: function (m) {
            if (!S.online && (m === 'app' || m === 'qr')) { 
                S.modal = { type: 'offline_err' }; return; 
            }
            
            S.com.method = m;
            S.com.step = 'scan';

            if (m === 'app' || m === 'qr') {
                var rawCode = Math.floor(100000 + Math.random() * 900000).toString();
                S.com.appCodeStr = rawCode.substring(0, 3) + '-' + rawCode.substring(3, 6);

                if (typeof mqttClient !== 'undefined' && mqttClient.connected) {
                    mqttClient.subscribe('goodwe_hmi/session/' + S.com.appCodeStr + '/to_hmi');
                }
                
                render();
                
                if (m === 'qr') {
                    setTimeout(function () {
                        var qel = document.getElementById("hmi-qr");
                        if (qel) {
                            qel.innerHTML = "";
                            new QRCode(qel, { text: "goodwe://session?code=" + S.com.appCodeStr, width: 160, height: 160 });
                        }
                    }, 100);
                }
                return;
            }
            
            render();
            setTimeout(function () {
                S.com.step = 'ident'; S.com.user = 'Visitante RFID'; S.com.target = 100; S.com.car = 'Cartão Local'; render();
            }, 1700);
        },
        toPower: function () { S.com.step = 'power'; },
        selPower: function (v) { if (+v <= S.com.max) S.com.sel = +v; },
        comStart: function () {
            var c = S.com;
            
            if (c.sel > c.max) {
                S.modal = { type: 'power_err', maxLimit: c.max };
                c.sel = c.max;
            }
            
            c.power = c.sel;
            c.step = 'charging';
            c.batt = Math.min(20, Math.max(0, c.target - 5)); 
            c.energy = 0; c.sec = 0; c.cost = 0;
        },
        comPause: function () { S.com.step = 'paused'; },
        comResume: function () { S.com.step = 'charging'; },
        comStop: function () {
            S.com.step = 'done';
            
            var existing = USERS.find(function(u) { return u.n === S.com.user; });
            if (existing) {
                existing.s++;
            } else {
                USERS.unshift({
                    n: S.com.user || 'Desconhecido',
                    rfid: S.com.method === 'app' ? 'App' : (S.com.method === 'qr' ? 'QR' : '****' + Math.floor(1000 + Math.random() * 9000)),
                    pay: 'Visa ••••1234',
                    s: 1
                });
            }

            if (typeof mqttClient !== 'undefined' && mqttClient.connected && S.com.appCodeStr) {
                mqttClient.publish('goodwe_hmi/session/' + S.com.appCodeStr + '/to_app', JSON.stringify({ action: 'ended' }));
            }
        },
        comNew: function () {
            var c = S.com;
            c.step = 'station'; c.selStation = null; c.method = null; c.user = null; c.batt = 64; c.target = 100;
            c.energy = 0; c.sec = 0; c.cost = 0; c.err = false; S.com.appCodeStr = '';
            render();
        },
        comRetry: function () { S.com.err = false; S.com.step = 'idle'; S.com.tab = 'charger'; },

        // Ações do Operador e Demonstração
        toggleNet: function () {
            if (S.online) { S.online = false; render(); return; }
            S.sync = 1; render();
            var step = 1;
            var iv = setInterval(function () {
                step++; S.sync = step;
                var fill = document.getElementById('sync-fill-bar');
                if (fill) fill.style.width = Math.min(100, step / 6 * 100) + '%';
                var item = document.getElementById('sync-item-' + (step - 1));
                if (item) item.classList.add('on');

                if (step > 6) {
                    clearInterval(iv); S.sync = 7; S.online = true; render();
                    setTimeout(function () { S.sync = 0; render(); }, 1200);
                }
            }, 380);
        },
        station: function (id) { S.op.station = +id; window.scrollTo(0, 0); },
        opBack: function () { S.op.station = null; },
        opToggle: function (k) {
            var s = S.stations.filter(function (x) { return x.id === S.op.station; })[0];
            if (s) s.opts[k] = !s.opts[k];
        },
        forceStatus: function (st) {
            var s = S.stations.filter(function (x) { return x.id === S.op.station; })[0];
            if (s) {
                s.status = st;
                render();
            }
        },
        callMaint: function() { 
            S.reports.errors.push({id: 'M-' + Math.floor(100+Math.random()*900), st: S.op.station, msg: 'Solicitação Manual Operador', level: 'Alto', res: false});
            S.modal = { type: 'maint_call' };
        },
        resvErr: function(idx) {
            S.reports.errors[idx].res = true;
            render();
        },
        openCfg: function (k) { S.modal = { type: 'cfg', key: k }; },
        closeModal: function () { S.modal = null; render(); },
        demoT: function () { S.demo = !S.demo; },

        resSyncStart: function() {
            if (!S.online) { S.modal = { type: 'offline_err' }; return; }
            S.res.syncCode = 'RES-' + Math.floor(1000 + Math.random() * 9000).toString();
            S.res.v = 'sync_auth';
            if (typeof mqttClient !== 'undefined' && mqttClient.connected) {
                mqttClient.subscribe('goodwe_hmi/sync/' + S.res.syncCode);
            }
            render();
            setTimeout(function () {
                var qel = document.getElementById("res-qr");
                if (qel) {
                    qel.innerHTML = "";
                    new QRCode(qel, { text: "goodwe://sync?code=" + S.res.syncCode, width: 160, height: 160 });
                }
            }, 100);
        },
        resSyncCancel: function() {
            S.res.v = 'idle';
            S.res.syncCode = '';
            render();
        },
        resDeleteProfile: function(idx) {
            S.res.profiles.splice(+idx, 1);
            if (S.res.activeProfileIdx >= S.res.profiles.length) {
                S.res.activeProfileIdx = Math.max(0, S.res.profiles.length - 1);
            }
            render();
        },

        dm: function (k) {
            switch (k) {
                case 'net': A.toggleNet(); S.demo = false; return;
                case 'vconn': S.view = 'res'; S.res.tab = 'charger'; S.res.v = 'connected'; break;
                case 'vdis': S.view = 'res'; S.res.tab = 'charger'; S.res.v = 'idle'; break;
                case 'charge':
                    if (S.view === 'com') { S.com.step = 'charging'; S.com.user = S.com.user || 'João Silva'; S.com.tab = 'charger'; }
                    else { S.view = 'res'; S.res.tab = 'charger'; S.res.v = 'charging'; }
                    break;
                case 'pause':
                    if (S.view === 'com') S.com.step = 'paused'; else S.res.v = 'paused'; break;
                case 'finish':
                    if (S.view === 'com') { S.com.step = 'done'; } else { S.res.v = 'done'; S.res.batt = S.res.target; } break;
                case 'error': S.view = 'com'; S.com.step = 'error'; S.com.err = true; break;
                case 'b20': S.res.batt = 20; S.com.batt = 20; break;
                case 'b42': S.res.batt = 42; S.com.batt = 42; break;
                case 'b63': S.res.batt = 63; S.com.batt = 63; break;
                case 'b90': S.res.batt = 90; S.com.batt = 90; break;
                case 'rfid': S.view = 'com'; S.com.tab = 'charger'; S.com.step = 'ident'; S.com.method = 'rfid'; S.com.user = 'João Silva'; break;
                case 'high': S.view = 'op'; S.op.tab = 'ops'; S.op.station = null; S.siteLimit = 280; break;
                case 'norm': S.view = 'op'; S.op.tab = 'ops'; S.op.station = null; S.siteLimit = 300; break;
                case 'st3': S.view = 'op'; S.op.tab = 'stations'; S.op.station = 3; break;
                case 'solar': S.solar.connected = !S.solar.connected; break;
                case 'reset':
                    location.reload(); 
                    break;
            }
            S.demo = false;
        }
    };

    /* Delegação de Eventos */
    document.addEventListener('click', function (e) {
        var el = e.target.closest('[data-a]');
        if (!el) return;
        var fn = A[el.dataset.a];
        if (!fn) return;

        var navs = ['nav', 'pickMode', 'resTab', 'comTab', 'opTab', 'toOp', 'toCom', 'station', 'opBack'];
        if (navs.indexOf(el.dataset.a) > -1) {
            S.animateNext = true;
        }
        fn(el.dataset.v);
        render(); // <--- RENDERIZAÇÃO ESTAVA FALTANDO AQUI
    });

    document.addEventListener('input', function (e) {
        var el = e.target.closest('[data-b]');
        if (!el) return;
        var b = el.dataset.b;
        
        if (b === 'site') {
            S.siteLimit = +el.value;
            var valDisplay = el.parentElement.querySelector('.big');
            if (valDisplay) valDisplay.innerHTML = S.siteLimit + ' kW';
        }
        if (b === 'ss') { S.res.sched.s = el.value; }
        if (b === 'se') { S.res.sched.e = el.value; }
        if (b === 'st') { S.res.sched.t = +el.value; }
    });

    document.addEventListener('change', function (e) {
        var el = e.target.closest('[data-b]');
        if (!el) return;
        if (el.dataset.b === 'resProfileSel') {
            S.res.activeProfileIdx = parseInt(el.value);
        }
        render();
    });

    /* =============== GERADORES DE UI (COMPONETIZAÇÃO) =============== */
    
    function topbar() {
        var right = '<div class="lang">' + ['pt', 'en', 'es'].map(function (l) {
            return '<button class="' + (S.lang === l ? 'on' : '') + '" data-a="lang" data-v="' + l + '">' + l.toUpperCase() + '</button>';
        }).join('') + '</div>';
        
        right += '<button class="pill ' + (S.online ? 'pill-online' : 'pill-offline') + '" data-a="toggleNet">' +
            ic(S.online ? 'wifi' : 'wifioff') + (S.online ? t('online') : t('offline')) + '</button>';
        
        if (S.view === 'res' || S.view === 'com' || S.view === 'op') {
            var label = (S.view === 'res') ? t('RESIDENCIAL') : t('COMERCIAL');
            right += '<button class="pill pill-mode" data-a="nav" data-v="onboarding">' + label + '</button>';
        }
        
        return '<div class="topbar"><button class="topbar-left" data-a="nav" data-v="landing">' +
            logo() + '<span class="sysname">SMART HMI</span></button>' +
            '<div class="topbar-right">' + right + '</div></div>' +
            (!S.online ? '<div class="offline-strip">' + t('offline_active') + '</div>' : '');
    }

    function tab(a, v, cur, icon, label) {
        return '<button class="tab ' + (cur === v ? 'on' : '') + '" data-a="' + a + '" data-v="' + v + '">' + ic(icon) + label + '</button>';
    }

    function subbarRes() {
        return '<div class="subbar"><div class="tabs">' +
            tab('resTab', 'charger', S.res.tab, 'home', t('nav_charger')) +
            tab('resTab', 'profiles', S.res.tab, 'users', t('nav_profiles')) +
            tab('resTab', 'activity', S.res.tab, 'activity', t('nav_activity')) +
            tab('resTab', 'settings', S.res.tab, 'settings', t('nav_settings')) +
            '</div><div class="subbar-right">' + (S.online ? t('local_cloud') : 'LOCAL') + '</div></div>';
    }

    function subbarCom() {
        return '<div class="subbar"><span class="ctx-label">' + ic('zap') + 'STATION ' + (S.com.selStation ? pad(S.com.selStation) : '??') + ' <span class="sub">· ' + t('commercial') + '</span></span>' +
            '<div class="subbar-right"><span>' + (S.online ? t('cloud_local') : 'LOCAL') + '</span>' +
            '<button class="btn-opaccess" data-a="toOp">' + ic('shield') + t('op_access') + '</button></div></div>';
    }

    function subbarOp() {
        return '<div class="opbar"><div class="opbar-left">' + logo('logo-sm') +
            '<span class="title">' + t('op_mode') + '</span><span class="hub">· ' + t('hub') + '</span></div>' +
            '<button class="back-btn" style="margin:0" data-a="toCom">' + ic('arrowleft') + t('commercial') + '</button></div>' +
            '<div class="subbar"><div class="tabs">' +
            tab('opTab', 'stations', S.op.tab, 'grid', t('nav_stations')) +
            tab('opTab', 'users', S.op.tab, 'users', t('nav_users')) +
            tab('opTab', 'ops', S.op.tab, 'gauge', t('nav_ops')) +
            tab('opTab', 'reports', S.op.tab, 'chart', t('nav_reports')) +
            tab('opTab', 'cfg', S.op.tab, 'settings', t('nav_settings')) +
            '</div><div class="subbar-right">' + (S.online ? t('cloud_local') : 'LOCAL') + '</div></div>';
    }

    function vLanding() {
        return '<div class="landing ' + (S.animateNext ? 'fade' : '') + '">' +
            logo('logo-lg logo-glow') +
            '<h1>SMART HMI</h1>' +
            '<div class="sub">' + t('smart_sub') + '</div>' +
            '<div class="rule"></div>' +
            '<div class="choice-grid">' +
            choiceCard('res', 'home', t('home'), t('explore_res'), [t('res_l1'), t('res_l2'), t('res_l3')]) +
            choiceCard('com', 'building', t('business'), t('explore_com'), [t('com_l1'), t('com_l2'), t('com_l3')]) +
            '</div>' +
            '<div class="feat-row">' +
            '<span class="feat">' + ic('zap') + t('f1') + '</span>' +
            '<span class="feat">' + ic('wifi') + t('f2') + '</span>' +
            '<span class="feat">' + ic('cloud') + t('f3') + '</span>' +
            '</div>' +
            '<div class="disclaimer">' + t('disclaimer') + '</div>' +
            '</div>';
    }

    function choiceCard(mode, icon, eyebrow, title, lines) {
        return '<button class="choice" data-a="pickMode" data-v="' + mode + '">' +
            '<div class="choice-head"><span class="choice-ic">' + ic(icon) + '</span>' +
            '<span class="choice-arrow">' + ic('arrow') + '</span></div>' +
            '<div><div class="eyebrow">' + eyebrow + '</div><h3>' + title + '</h3></div>' +
            '<ul>' + lines.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ul></button>';
    }

    function vOnboarding() {
        return '<div class="landing ' + (S.animateNext ? 'fade' : '') + '" style="min-height:calc(100vh - 58px)">' +
            logo('logo-md logo-glow') +
            '<div class="sub" style="margin-top:14px;letter-spacing:5px;font-size:13px;color:var(--text-1)">SMART HMI</div>' +
            '<h2 style="font-size:clamp(24px,4vw,34px);font-weight:700;margin:30px 0 0;color:var(--text-0)">' + t('onb_q') + '</h2>' +
            '<div class="choice-grid">' +
            choiceCard('res', 'home', t('home'), t('residential'), [t('res_l1'), t('res_l2'), t('res_l3')]) +
            choiceCard('com', 'building', t('business'), t('commercial'), [t('com_l1'), t('com_l2'), t('com_l3')]) +
            '</div>' +
            '<div class="feat-row"><span class="feat">' + ic('zap') + t('onb_foot') + '</span></div>' +
            '<button class="link-btn" data-a="nav" data-v="landing">' + t('back') + '</button>' +
            '</div>';
    }

    function vRes() {
        var body = S.res.tab === 'charger' ? resCharger()
            : S.res.tab === 'profiles' ? resProfiles()
            : S.res.tab === 'activity' ? resActivity()
            : resSettings();
        return subbarRes() + '<div class="page ' + (S.animateNext ? 'fade' : '') + '">' + body + '</div>';
    }

    function getSolarWidget() {
        if (!S.solar.connected) return '';
        return '<div class="info-card" style="border-color:rgba(255,167,38,.4); background:rgba(255,167,38,.05); margin-top:22px; width:100%; max-width: 460px;">' +
            '<div style="color:var(--orange);font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px">' + ic('zap') + 'Monitor Solar</div>' +
            infoRow('Luz (Raw)', '<span id="sol-lux">' + S.solar.lux + '</span>') +
            infoRow('Intensidade', '<span id="sol-pct">' + S.solar.percent + '</span> %') +
            infoRow('Ângulo do Servo', '<span id="sol-ang">' + S.solar.angle + '</span>°') +
            '</div>';
    }

    function resCharger() {
        var r = S.res;
        var ret = '';

        if (r.lock && r.v === 'idle') {
            return '<div class="wrap-sm center">' +
                '<div class="eyebrow-c">' + t('home') + '</div>' +
                '<h1 class="state-title" style="color:var(--text-1)">BLOQUEADO</h1>' +
                '<div class="avail" style="margin-bottom:20px;">' + ic('lock') + ' Carregador inativo</div>' +
                '<button class="big-circle" style="background:var(--bg-2);border:2px solid var(--border);color:var(--text-1);box-shadow:none" data-a="lockT">' + ic('unlock') + '<br>Desbloquear</button>' +
                '<div class="stat-row">' +
                statBox(t('power'), '0', 'kW') + statBox(t('energy'), '0', 'kWh') +
                statBox(t('time'), '00:00', '') + statBox(t('lockL'), t('on'), '') +
                '</div></div>';
        }

        if (r.v === 'idle' || r.v === 'connecting') {
            var connecting = r.v === 'connecting';
            ret = '<div class="wrap-sm center">' +
                '<div class="eyebrow-c">' + t('home') + '</div>' +
                '<h1 class="state-title">' + t('ready') + '</h1>' +
                '<div class="avail">' + ic('zap') + '<b>11 kW</b> ' + t('available') + '</div>' +
                '<div><span class="vstate">' + ic('plug') + (connecting ? t('connecting') : t('v_not_conn')) + '</span></div>' +
                (connecting
                    ? '<div class="scan" style="margin:34px auto 44px">' + ic('plug') + '<div class="scan-line"></div></div>'
                    : '<button class="big-circle" data-a="connect">' + t('connect_v') + '</button>') +
                '<div class="stat-row">' +
                statBox(t('power'), '0', 'kW') + statBox(t('energy'), '0', 'kWh') +
                statBox(t('time'), '00:00', '') + statBox(t('lockL'), r.lock ? t('on') : t('off'), '') +
                '</div>';
        }
        else if (r.v === 'connected') {
            var need = (r.target - r.batt) / 100 * 45, secs = need / r.power * 3600;
            
            var profileOpts = S.res.profiles.map(function(p, i) {
                return '<option value="' + i + '" ' + (i === S.res.activeProfileIdx ? 'selected' : '') + '>' + p.n + ' (' + p.a + ')</option>';
            }).join('');
            
            var profileSelectHtml = S.res.profiles.length > 0 
                ? '<div style="margin: 20px 0; text-align: left; background: rgba(20,20,20,.8); padding: 16px; border-radius: 12px; border: 1px solid var(--border-soft);">' +
                  '<label style="display:block; font-size: 12px; color: var(--text-1); margin-bottom: 8px;">Perfil a utilizar:</label>' +
                  '<select data-b="resProfileSel" style="width:100%; background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 10px; border-radius: 8px; font-size: 15px;">' +
                  profileOpts + '</select></div>'
                : '<div style="margin: 20px 0; text-align: center; color: var(--orange); font-size: 13px;">Nenhum perfil cadastrado.</div>';

            ret = '<div class="wrap-sm center">' +
                '<div><span class="vstate ok">' + ic('check') + t('v_conn') + '</span></div>' +
                '<div class="ring-box">' + ring(r.batt, 'var(--red)') +
                '<div class="inner"><div class="pct">' + Math.round(r.batt) + '%</div>' +
                '<div class="cap">' + t('target') + ' ' + r.target + '%</div></div></div>' +
                '<div class="stat-row">' + statBox(t('power'), r.power.toFixed(1), 'kW') +
                statBox(t('eta'), '~' + eta(secs), '', true) + '</div>' +
                profileSelectHtml + 
                '<div class="btn-row"><button class="btn btn-red" data-a="resStart">' + ic('play') + t('start_charge') + '</button></div>' +
                '<div class="quick-row">' +
                quick('sliders', t('curr_limit_s'), r.load ? 'AUTO' : r.limit + ' A') +
                quick('calendar', t('schedule').toUpperCase(), r.sched.s.slice(0, 2) + '–' + r.sched.e.slice(0, 2)) +
                quick('clock', 'TIMER', r.timer ? (r.timer < 60 ? r.timer + ' min' : (r.timer / 60) + 'h') : t('disabled')) +
                quick(r.lock ? 'lock' : 'unlock', t('lock').toUpperCase(), r.lock ? t('enabled') : t('disabled')) +
                '</div>' +
                '<button class="link-btn" data-a="disconnect">' + t('disconnect') + '</button>';
        }
        else if (r.v === 'scheduled') {
            var pName = S.res.profiles[S.res.activeProfileIdx] ? S.res.profiles[S.res.activeProfileIdx].n : '';
            ret = '<div class="wrap-sm center">' +
                '<div><span class="vstate" style="color:var(--orange)">' + ic('clock') + '<span style="letter-spacing:2px;font-weight:700">AGENDADO PARA ' + r.sched.s + ' · ' + pName + '</span></span></div>' +
                '<div class="ring-box">' + ring(r.batt, 'var(--orange)') +
                '<div class="inner"><div class="pct" style="color:var(--orange)">' + Math.round(r.batt) + '%</div>' +
                '<div class="cap">Aguardando...</div></div></div>' +
                '<div class="btn-row">' +
                '<button class="btn btn-red" data-a="resForceStart">' + ic('play') + 'Forçar Início Agora</button>' +
                '<button class="btn" data-a="resStop">' + ic('stop') + 'Cancelar</button>' +
                '</div>';
        }
        else if (r.v === 'charging' || r.v === 'paused') {
            var charging = r.v === 'charging';
            var activeProfileName = S.res.profiles[S.res.activeProfileIdx] ? S.res.profiles[S.res.activeProfileIdx].n : 'Convidado';
            
            ret = '<div class="wrap-sm center">' +
                '<div><span class="vstate" style="color:var(--red)">' + ic('zap') +
                '<span style="letter-spacing:2px;font-weight:700">' + (charging ? t('charging') : t('paused')) + ' · ' + activeProfileName + '</span></span></div>' +
                '<div class="ring-box">' + ring(r.batt, 'var(--red)', 260, 10, 'res-ring-circ') +
                '<div class="inner"><div class="pct" id="res-pct">' + Math.round(r.batt) + '%</div>' +
                '<div class="cap">' + t('target') + ' ' + r.target + '%</div></div></div>' +
                '<div class="stat-row">' + statBox(t('power'), (charging ? r.power : 0).toFixed(1), 'kW') +
                statBox(t('energy'), '<span id="res-energy">' + r.energy.toFixed(1) + '</span>', 'kWh') +
                statBox(t('time'), '<span id="res-time">' + hms(r.sec) + '</span>', '', true) + '</div>' +
                '<div class="btn-row">' +
                (charging ? '<button class="btn btn-red" data-a="resPause">' + ic('pause') + t('pause_charge') + '</button>'
                    : '<button class="btn btn-red" data-a="resResume">' + ic('play') + t('resume_charge') + '</button>') +
                '<button class="btn" data-a="resStop">' + ic('stop') + t('stop_charge') + '</button></div>';
        }
        else {
            ret = '<div class="wrap-sm center">' +
                '<div><span class="vstate ok">' + ic('check') +
                '<span style="letter-spacing:2px;font-weight:700">' + t('completed') + '</span></span></div>' +
                '<div class="ring-box">' + ring(r.batt, 'var(--green)') +
                '<div class="inner"><div class="pct green">' + Math.round(r.batt) + '%</div>' +
                '<div class="cap">' + t('target') + ' ' + r.target + '%</div></div></div>' +
                '<div class="stat-row">' + statBox(t('energy'), r.energy.toFixed(1), 'kWh') +
                statBox(t('time'), hms(r.sec), '', true) + '</div>' +
                '<div class="btn-row"><button class="btn btn-red" data-a="resNew">' + ic('refresh') + t('new_session') + '</button></div>';
        }

        ret += getSolarWidget();
        ret += '</div>';
        return ret;
    }

    function statBox(lbl, val, unit, plain) {
        return '<div class="stat"><div class="lbl">' + lbl + '</div><div class="val' + (plain ? ' plain' : '') + '">' + val +
            (unit ? '<span class="u">' + unit + '</span>' : '') + '</div></div>';
    }

    function quick(icon, lbl, val) {
        return '<button class="quick" data-a="resTab" data-v="settings">' + ic(icon) +
            '<div class="lbl">' + lbl + '</div><div class="val">' + val + '</div></button>';
    }

    function resProfiles() {
        if (S.res.v === 'sync_auth') {
            return '<div class="wrap-sm center fade">' +
                '<div class="eyebrow-c">Sincronização Residencial</div>' +
                '<div id="res-qr" style="margin:20px auto 30px; display:flex; justify-content:center; background:#fff; padding:10px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); width:180px; height:180px;"></div>' +
                '<h2 style="margin:0;font-size:24px;font-weight:700;color:var(--text-0)">Código: ' + S.res.syncCode + '</h2>' +
                '<div style="margin-top:8px;color:var(--text-1);font-size:14px">Abra o App na aba Perfis e clique em "Sincronizar"</div>' +
                '<div class="btn-row" style="margin-top: 40px;"><button class="btn" data-a="resSyncCancel">Cancelar</button></div></div>';
        }

        return '<div class="wrap-sm">' +
            '<div class="sec-head">' + ic('users') + '<h2>' + t('fam_profiles') + '</h2></div>' +
            '<div class="prof-grid">' + S.res.profiles.map(function (p, idx) {
                return '<div class="prof"><div class="prof-top"><span class="prof-name ' + p.c + '">' + p.n + '</span>' +
                    '<button class="modal-x" data-a="resDeleteProfile" data-v="' + idx + '" style="margin:0;padding:0">'+ic('x')+'</button></div>' +
                    '<div class="prof-line">' + ic('zap') + p.a + '</div>' +
                    '<div class="prof-line">' + ic('clock') + p.h + '</div></div>';
            }).join('') + 
            '<button class="prof" style="display:flex;flex-direction:column;align-items:center;justify-content:center;border:2px dashed var(--border);background:transparent;gap:10px;cursor:pointer;min-height:140px" data-a="resSyncStart">' +
            ic('phone') + '<span style="color:var(--text-1);font-weight:600">Sincronizar via App</span></button>' +
            '</div>' +
            '<div class="banner">' + ic('refresh') + '<span>' + t('sync_local') + '</span></div>' +
            '<div class="foot-note">' + t('rfid_foot') + '</div></div>';
    }

    function resActivity() {
        var L = [
            { e: '18.4 kWh', d: '25/08 · RFID', t: '01:32' },
            { e: '7.2 kWh', d: '24/08 · App', t: '00:48' },
            { e: '11.0 kWh', d: '23/08 · Timer', t: '01:05' },
            { e: '22.0 kWh', d: '22/08 · ' + t('schedule'), t: '02:10' }
        ];
        var D = [['d_power', 'bolt2'], ['d_temp', 'thermo'], ['d_veh', 'plug'], ['d_safe', 'shield'], ['d_ctrl', 'chip']];
        return '<div class="wrap-sm">' +
            '<div class="sec-head">' + ic('activity') + '<h2>' + t('activity') + '</h2></div>' +
            '<div class="list-card">' + L.map(function (x) {
                return '<div class="list-row"><div><div class="main">' + x.e + '</div><div class="sub">' + x.d + '</div></div>' +
                    '<span class="side">' + ic('clock') + x.t + '</span></div>';
            }).join('') + '</div>' +
            '<div class="sec-head" style="margin:34px 0 20px">' + ic('shield') + '<h2>' + t('sys_status') + '</h2></div>' +
            '<div class="status-grid">' + D.map(function (d) {
                return '<div class="status-item">' + ic('check') + t(d[0]) + '</div>';
            }).join('') + '</div></div>';
    }

    function resSettings() {
        var r = S.res, limits = [6, 10, 16, 20, 24, 32], timers = [[30, '30min'], [60, '1h'], [120, '2h'], [240, '4h']];
        return '<div class="wrap-sm">' +
            '<div class="set-card"><div class="set-title">' + ic('sliders') + t('curr_limit') + '</div>' +
            '<div class="opt-row">' + limits.map(function (v) {
                return '<button class="opt ' + (r.limit === v ? 'on' : '') + '" data-a="limit" data-v="' + v + '" ' + (r.load ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : '') + '>' + v + ' A</button>';
            }).join('') + '</div>' +
            (r.load ? '<div style="margin-top:12px;font-size:13px;color:var(--orange);display:flex;align-items:center;gap:6px;">' + ic('zap') + ' Controlado automaticamente pela Gestão de Carga</div>' : '') +
            '</div>' +
            '<div class="set-card"><div class="set-title">' + ic('calendar') + t('schedule') + '</div>' +
            '<div class="field-grid">' +
            '<div class="field"><label>' + t('start_t') + '</label><input type="time" value="' + r.sched.s + '" data-b="ss"></div>' +
            '<div class="field"><label>' + t('end_t') + '</label><input type="time" value="' + r.sched.e + '" data-b="se"></div>' +
            '<div class="field"><label>' + t('target_l') + '</label><input type="number" min="50" max="100" step="5" value="' + r.sched.t + '" data-b="st"></div>' +
            '</div><div class="opt-row">' + t('days').map(function (d, i) {
                return '<button class="opt ' + (r.sched.d[i] ? 'on' : '') + '" data-a="day" data-v="' + i + '">' + d + '</button>';
            }).join('') + '</div></div>' +
            '<div class="set-card"><div class="set-title">' + ic('clock') + t('timer') + '</div>' +
            '<div class="opt-row">' + timers.map(function (x) {
                return '<button class="opt ' + (r.timer === x[0] ? 'on' : '') + '" data-a="timer" data-v="' + x[0] + '">' + x[1] + '</button>';
            }).join('') + '</div></div>' +
            '<div class="two-col">' +
            '<div class="set-card"><div class="set-title">' + ic(r.lock ? 'lock' : 'unlock') + t('lock') + '</div>' +
            '<div class="sw-row"><span class="txt">' + (r.lock ? t('enabled') : t('disabled')) + '</span>' +
            '<button class="sw ' + (r.lock ? 'on' : '') + '" data-a="lockT" aria-label="' + t('lock') + '"></button></div></div>' +
            '<div class="set-card"><div class="set-title">' + ic('zap') + t('load_mgmt') + '</div>' +
            '<div class="sw-row"><span class="txt">' + (r.load ? t('enabled') : t('disabled')) + '</span>' +
            '<button class="sw ' + (r.load ? 'on' : '') + '" data-a="loadT" aria-label="' + t('load_mgmt') + '"></button></div></div>' +
            '</div></div>';
    }

    /* ================== COMERCIAL ================== */
    function vCom() {
        var body = S.com.tab === 'error' ? comError() : comCharger();
        return subbarCom() + '<div class="page ' + (S.animateNext ? 'fade' : '') + '">' + body + '</div>';
    }

    function comCharger() {
        var c = S.com;
        
        if (c.step === 'station') {
            return '<div class="wrap-sm center">' +
                logo('logo-md logo-glow') + '<div style="height:12px"></div>' +
                '<div class="eyebrow-c">' + t('COMERCIAL') + '</div>' +
                '<h1 class="state-title" style="margin-top:22px">Selecione uma Estação</h1>' +
                '<div class="st-grid" style="margin-top:40px;">' + S.stations.map(function(s){
                    return '<button class="st s-' + s.status + '" data-a="selComStation" data-v="' + s.id + '" '+(s.status==='maintenance'||s.status==='error'?'disabled style="opacity:0.5"':'')+'>' +
                        '<div class="row1"><span class="id">STATION ' + pad(s.id) + '</span><span class="dot"></span></div>' +
                        '<div class="status">' + statusText(s.status) + '</div></button>';
                }).join('') + '</div></div>';
        }

        if (c.step === 'idle') {
            return '<div class="wrap-sm center">' +
                logo('logo-md logo-glow') + '<div style="height:12px"></div>' +
                '<div class="eyebrow-c">' + t('COMERCIAL') + '</div>' +
                '<span class="pill pill-mode" style="font-size:13px;padding:8px 18px" data-a="comNew">STATION ' + pad(c.selStation) + ' (Trocar)</span>' +
                '<h1 class="state-title" style="margin-top:22px">' + t('ready') + '</h1>' +
                '<div class="avail">' + ic('zap') + '<b>22 kW</b> ' + t('available') + '</div>' +
                '<div class="label-sm">' + t('auth_method') + '</div>' +
                '<div class="auth-row">' +
                authCard('rfid', 'card', t('rfid')) + authCard('qr', 'qr', t('qr')) + authCard('app', 'phone', t('app')) +
                '</div></div>';
        }
        
        if (c.step === 'scan') {
            if (c.method === 'qr') {
                return '<div class="wrap-sm center fade">' +
                    '<div id="hmi-qr" style="margin:20px auto 30px; display:flex; justify-content:center; background:#fff; padding:10px; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); width:180px; height:180px;"></div>' +
                    '<h2 style="margin:0;font-size:24px;font-weight:700;color:var(--text-0)">Código: ' + c.appCodeStr + '</h2>' +
                    '<div style="margin-top:8px;color:var(--text-1);font-size:14px">' + t('scan_qr_sub') + '</div>' +
                    '<div class="btn-row" style="margin-top: 40px;"><button class="btn" data-a="comNew">Cancelar</button></div></div>';
            } else if (c.method === 'app') {
                return '<div class="wrap-sm center fade">' +
                    '<div style="margin:40px auto 30px; font-size:52px; font-weight:900; letter-spacing:12px; color:var(--red); font-variant-numeric: tabular-nums; text-shadow: 0 0 30px rgba(255,0,0,0.4);">' + c.appCodeStr + '</div>' +
                    '<h2 style="margin:0;font-size:22px;font-weight:700;color:var(--text-0)">' + t('type_app') + '</h2>' +
                    '<div style="margin-top:8px;color:var(--text-1);font-size:14px">Para vincular a STATION '+pad(c.selStation)+'</div>' +
                    '<div class="btn-row" style="margin-top: 40px;"><button class="btn" data-a="comNew">Cancelar</button></div></div>';
            } else {
                return '<div class="wrap-sm center fade">' +
                    '<div class="scan">' + ic('card') + '<div class="scan-line"></div></div>' +
                    '<h2 style="margin:30px 0 0;font-size:24px;font-weight:700;color:var(--red)">' + t('detecting') + '</h2>' +
                    '<div style="margin-top:8px;color:var(--text-1);font-size:14px">RFID · STATION '+pad(c.selStation)+'</div>' +
                    '<div class="btn-row" style="margin-top: 40px;"><button class="btn" data-a="comNew">Cancelar</button></div></div>';
            }
        }
        
        if (c.step === 'ident') {
            var detectMsg = (c.method === 'qr' || c.method === 'app') ? "Perfil Conectado com Sucesso" : "RFID Detectado";

            return '<div class="wrap-sm center fade">' +
                '<div><span class="vstate ok">' + ic('check') + detectMsg + '</span></div>' +
                '<h2 style="margin:16px 0 0;font-size:30px;font-weight:800">' + c.user + '</h2>' +
                '<div class="info-card">' +
                '<div class="info-row"><span class="k">Veículo</span><span class="v">' + c.car + '</span></div>' +
                '<div class="info-row"><span class="k">Modo Solicitado</span><span class="v">' + c.mode + '</span></div>' +
                '<div class="info-row"><span class="k">Limite Alvo</span><span class="v red">' + c.target + '%</span></div>' +
                '<div class="info-row"><span class="k">Potência do Carregador</span><span class="v">' + c.max + ' kW</span></div>' +
                '</div>' +
                '<div class="btn-row"><button class="btn btn-red" data-a="toPower">' + ic('arrow') + t('start_charge') + '</button></div></div>';
        }
        
        if (c.step === 'power') {
            return '<div class="wrap-sm center">' +
                '<h2 style="margin:0;font-size:26px;font-weight:700">' + t('select_power') + '</h2>' +
                '<div class="power-row">' + [7.4, 11, 16, 22].map(function (p) {
                    return '<button class="pw ' + (c.sel === p ? 'on' : '') + '" ' + (p > c.max ? 'disabled' : '') +
                        ' data-a="selPower" data-v="' + p + '">' + p + ' kW</button>';
                }).join('') + '</div>' +
                '<div><span class="note-sm">' + ic('lock') + t('power_limit_note') + ' Máximo: '+c.max+' kW.</span></div>' +
                '<div class="btn-row"><button class="btn btn-red" data-a="comStart">' + ic('play') + 'Confirmar & Iniciar</button></div></div>';
        }
        
        if (c.step === 'charging' || c.step === 'paused') {
            var on = c.step === 'charging';
            var cap = getBatteryCapacity(c.car);
            var kwhNeeded = ((c.target - c.batt) / 100) * cap;
            var rem = (c.power > 0) ? (kwhNeeded / c.power) * 3600 : 0;
            return '<div class="wrap-sm center">' +
                '<div><span class="vstate" style="color:var(--red)">' + ic('zap') +
                '<span style="letter-spacing:2px;font-weight:700">' + (on ? t('charging') : t('paused')) + ' · STATION '+pad(c.selStation)+'</span></span></div>' +
                '<div class="ring-box">' + ring(c.batt, 'var(--red)', 260, 10, 'com-ring-circ') +
                '<div class="inner"><div class="pct" id="com-pct">' + Math.round(c.batt) + '%</div>' +
                '<div class="cap">META ' + c.target + '%</div></div></div>' +
                '<div class="stat-row">' + statBox(t('power'), (on ? c.power : 0).toFixed(1), 'kW') +
                statBox(t('energy'), '<span id="com-energy">' + c.energy.toFixed(1) + '</span>', 'kWh') +
                statBox(t('time'), '<span id="com-time">' + hms(c.sec) + '</span>', '', true) + '</div>' +
                '<div class="cost-row">' +
                '<div class="cost"><span class="lbl">' + t('est_cost') + '</span><span class="val" id="com-cost">' + brl(c.cost) + '</span></div>' +
                '<div class="cost"><span class="lbl">' + t('est_remain') + '</span><span class="val plain" id="com-rem">' + mmss(rem) + '</span></div>' +
                '</div>' +
                '<div class="cost-row"><div class="cost" style="min-width:300px">' +
                '<span class="lbl">' + ic('card') + ' ' + t('payment') + '</span>' +
                '<span class="val plain" style="font-size:15px">Visa ••••1234 · ' + brl(c.tariff) + '/kWh</span></div></div>' +
                '<div class="btn-row">' +
                (on ? '<button class="btn btn-red" data-a="comPause">' + ic('pause') + t('pause_charge') + '</button>'
                    : '<button class="btn btn-red" data-a="comResume">' + ic('play') + t('resume_charge') + '</button>') +
                '<button class="btn" data-a="comStop">' + ic('stop') + t('stop_charge') + '</button></div></div>';
        }
        
        // done
        return '<div class="wrap-sm center">' +
            '<div><span class="vstate ok">' + ic('check') +
            '<span style="letter-spacing:2px;font-weight:700">' + t('completed') + ' · STATION '+pad(c.selStation)+'</span></span></div>' +
            '<div class="ring-box">' + ring(c.batt, 'var(--green)') +
            '<div class="inner"><div class="pct green">' + Math.round(c.batt) + '%</div>' +
            '<div class="cap">' + brl(c.cost) + '</div></div></div>' +
            '<div class="stat-row">' + statBox(t('energy'), c.energy.toFixed(1), 'kWh') +
            statBox(t('time'), hms(c.sec), '', true) + statBox(t('est_cost'), brl(c.cost), '') + '</div>' +
            '<div class="cost-row"><div class="cost" style="min-width:300px">' +
            '<span class="lbl">' + ic('card') + ' ' + t('payment') + '</span>' +
            '<span class="val plain" style="font-size:15px">Visa ••••1234</span></div></div>' +
            '<div class="btn-row"><button class="btn btn-red" data-a="comNew">' + ic('refresh') + t('new_session') + '</button></div></div>';
    }

    function authCard(m, icon, label) {
        return '<button class="auth" data-a="auth" data-v="' + m + '">' + ic(icon) + '<div class="lb">' + label + '</div></button>';
    }

    function infoRow(k, v, red) {
        return '<div class="info-row"><span class="k">' + k + '</span><span class="v' + (red ? ' red' : '') + '">' + v + '</span></div>';
    }

    function comError() {
        return '<div class="wrap-sm center">' +
            '<div style="color:var(--red);display:flex;justify-content:center">' +
            '<span style="width:64px;height:64px;border-radius:50%;background:var(--red-dim);border:1px solid rgba(255,0,0,.4);display:flex;align-items:center;justify-content:center">' +
            ic('alert') + '</span></div>' +
            '<div class="eyebrow-c" style="margin-top:22px">STATION '+pad(S.com.selStation)+'</div>' +
            '<h1 class="state-title">' + t('err_title') + '</h1>' +
            '<div class="btn-row" style="flex-direction:column;align-items:center">' +
            '<button class="btn btn-red" style="min-width:290px" data-a="comRetry">' + ic('refresh') + t('try_again') + '</button>' +
            '<button class="btn" style="min-width:290px" data-a="comRetry">' + ic('activity') + t('local_diag') + '</button>' +
            '<button class="btn" style="min-width:290px" data-a="toOp">' + ic('users') + t('contact_op') + '</button>' +
            '</div></div>';
    }

    /* ================== OPERADOR E MODAIS ================== */
    function vOp() {
        var body;
        if (S.op.station) body = opStation();
        else if (S.op.tab === 'stations') body = opStations();
        else if (S.op.tab === 'users') body = opUsers();
        else if (S.op.tab === 'ops') body = opLoad();
        else if (S.op.tab === 'reports') body = opReports();
        else body = opCfg();
        return subbarOp() + '<div class="page ' + (S.animateNext ? 'fade' : '') + '">' + body + '</div>';
    }

    function opStations() {
        var c = { charging: 0, available: 0, maintenance: 0, error: 0 };
        S.stations.forEach(function (s) { c[s.status]++; });
        
        function stat(icon, lbl, n, color) {
            return '<div class="op-stat"><div class="hd" style="' + (color ? 'color:' + color : '') + '">' + ic(icon) + lbl + '</div>' +
                '<div class="n" style="' + (color ? 'color:' + color : '') + '">' + n + '</div></div>';
        }
        
        return '<div class="wrap">' +
            '<div class="op-stats">' +
            stat('zap', t('st_total'), 24, '') +
            stat('bolt2', t('st_charging'), c.charging, 'var(--red)') +
            stat('check', t('st_avail'), c.available, 'var(--green)') +
            stat('wrench', t('st_maint'), c.maintenance, 'var(--orange)') +
            stat('alert', t('st_err'), c.error, 'var(--red)') +
            '</div>' +
            '<div class="st-grid">' + S.stations.map(function (s) {
                return '<button class="st s-' + s.status + '" data-a="station" data-v="' + s.id + '">' +
                    '<div class="row1"><span class="id">STATION ' + pad(s.id) + '</span><span class="dot"></span></div>' +
                    '<div class="status">' + statusText(s.status) + '</div>' +
                    (s.status === 'charging' ? '<div class="meta">' + s.power + ' kW · ' + s.user + '</div>' : '<div class="meta">&nbsp;</div>') +
                    '</button>';
            }).join('') + '</div></div>';
    }

    function opStation() {
        var s = S.stations.filter(function (x) { return x.id === S.op.station; })[0];
        var col = s.status === 'available' ? 'var(--green)' : s.status === 'maintenance' ? 'var(--orange)' : 'var(--red)';
        var left;
        
        if (s.status === 'charging') {
            left = '<div class="det-card">' +
                infoRow(t('status'), '<span style="color:var(--red)">' + statusText(s.status) + '</span>') +
                infoRow(t('user'), s.user) + infoRow(t('power'), s.power + ' kW') +
                infoRow(t('energy'), s.energy + ' kWh') + infoRow(t('session'), hms(s.elapsed)) +
                infoRow(t('cost'), brl(s.cost), true) + infoRow('RFID', '<span class="mono">' + s.rfid + '</span>') +
                infoRow(t('payment'), s.pay) + '</div>';
        } else if (s.status === 'error') {
            left = '<div class="det-card pad center">' +
                '<div style="color:var(--red);display:flex;justify-content:center;margin-bottom:14px">' + ic('alert') + '</div>' +
                '<h3 style="margin:0 0 6px;color:var(--red);font-size:20px">Erro na Estação</h3>' +
                '<p style="color:var(--text-2);font-size:13px;margin:0 0 20px">CP-ERR-0142 · ISO 15118 handshake timeout</p>' +
                '<div class="btn-row" style="margin-top:0;flex-direction:column;align-items:stretch">' +
                '<button class="btn btn-red btn-sm" data-a="opBack">' + ic('refresh') + 'Tentar novamente</button>' +
                '<button class="btn btn-sm" data-a="opBack">' + ic('activity') + 'Diagnóstico local</button></div></div>';
        } else if (s.status === 'maintenance') {
            left = '<div class="det-card pad">' +
                '<h3 style="margin:0 0 10px;color:var(--orange);font-size:20px">' + statusText(s.status) + '</h3>' +
                '<p style="color:var(--text-1);font-size:14px;margin:0">Estação bloqueada para manutenção programada pela equipe técnica.</p></div>';
        } else {
            left = '<div class="det-card pad">' +
                '<h3 style="margin:0 0 10px;color:var(--green);font-size:20px">' + statusText(s.status) + '</h3>' +
                '<p style="color:var(--text-1);font-size:14px;margin:0">Pronta para uma nova sessão de carregamento.</p></div>';
        }
        
        left += '<div class="det-card pad" style="margin-top:16px;"><h4>Forçar Status da Estação</h4>' +
                '<div class="opt-row">' +
                '<button class="opt ' + (s.status === 'available' ? 'on' : '') + '" data-a="forceStatus" data-v="available">Disponível</button>' +
                '<button class="opt ' + (s.status === 'maintenance' ? 'on' : '') + '" data-a="forceStatus" data-v="maintenance">Manutenção</button>' +
                '<button class="opt ' + (s.status === 'error' ? 'on' : '') + '" data-a="forceStatus" data-v="error">Erro</button>' +
                '</div></div>';

        return '<div class="wrap">' +
            '<button class="back-btn" data-a="opBack">' + ic('arrowleft') + 'Estações</button>' +
            '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:22px">' +
            '<h2 style="margin:0;font-size:26px;font-weight:800">STATION ' + pad(s.id) + '</h2>' +
            '<span class="pill" style="color:' + col + ';border-color:' + col + '55;font-weight:700;letter-spacing:1px">' + statusText(s.status) + '</span></div>' +
            '<div class="det-grid">' + left +
            '<div class="det-card pad"><h4>Configurações</h4>' +
            swRow('Gestão de carga', s.opts.load, 'opToggle', 'load') +
            swRow('RFID', s.opts.rfid, 'opToggle', 'rfid') +
            swRow('Relatórios', s.opts.rep, 'opToggle', 'rep') +
            '<div class="modal-lock" style="margin-top:16px">' + ic('lock') + 'Apenas Operador</div></div>' +
            '</div></div>';
    }

    function swRow(label, on, action, key) {
        var btn = action ? 'button' : 'span';
        var act = action ? ' data-a="' + action + '" data-v="' + key + '"' : '';
        return '<div class="sw-row" style="padding:12px 0;border-bottom:1px solid var(--border-soft)">' +
            '<span class="txt" style="color:var(--text-0)">' + label + '</span>' +
            '<' + btn + ' class="sw ' + (on ? 'on' : '') + '"' + act + ' aria-label="' + label + '"></' + btn + '></div>';
    }

    function opUsers() {
        return '<div class="wrap">' +
            '<div class="sec-head">' + ic('users') + '<h2>Usuários (Histórico)</h2></div>' +
            '<div class="list-card tbl-scroll"><table class="tbl"><thead><tr>' +
            '<th>USUÁRIO</th><th>AUTENTICAÇÃO</th><th>PAGAMENTO</th><th>SESSÕES</th>' +
            '</tr></thead><tbody>' + USERS.map(function (u) {
                return '<tr><td><span class="u-cell"><span class="avatar">' + u.n.charAt(0) + '</span>' +
                    '<span class="u-name">' + u.n + '</span></span></td>' +
                    '<td class="mono">' + u.rfid + '</td>' +
                    '<td><span style="display:inline-flex;align-items:center;gap:8px">' + ic('card') + u.pay + '</span></td>' +
                    '<td><span class="sess">' + ic('zap') + u.s + '</span></td></tr>';
            }).join('') + '</tbody></table></div></div>';
    }

    function opLoad() {
        var ch = S.stations.filter(function (s) { return s.status === 'charging'; });
        var raw = ch.reduce(function (a, s) { return a + s.power; }, 0);
        var over = raw > S.siteLimit;
        var k = over ? S.siteLimit / raw : 1;
        var demand = +(raw * k).toFixed(1);
        var pct = Math.min(100, demand / S.siteLimit * 100);
        var maxP = Math.max.apply(null, ch.map(function (s) { return s.power; }));
        
        return '<div class="wrap">' +
            '<div class="sec-head">' + ic('gauge') + '<h2>Gestão de carga</h2></div>' +
            '<div class="load-cards">' +
            '<div class="load-card"><div class="lbl">LIMITE DE POTÊNCIA DO SITE</div><div class="big">' + S.siteLimit + ' kW</div>' +
            '<input type="range" min="120" max="400" step="10" value="' + S.siteLimit + '" data-b="site" aria-label="Limite"></div>' +
            '<div class="load-card"><div class="lbl">DEMANDA ATUAL</div><div class="big" style="' + (over ? 'color:var(--orange)' : '') + '">' + demand.toFixed(1) + ' kW</div>' +
            '<div class="demand-track"><div class="demand-fill ' + (over ? 'over' : '') + '" style="width:' + pct + '%"></div></div></div>' +
            '<div class="load-card ok"><div class="lbl">ESTADO GESTÃO</div>' +
            '<div class="big">' + ic('gauge') + 'Ativo</div>' +
            '<div style="margin-top:10px;font-size:12px;color:var(--text-1)">' +
            (over ? 'Reduzindo potência das estações para respeitar o limite.' : 'Demanda dentro do limite do site.') + '</div></div>' +
            '</div>' +
            '<div class="bars-card"><div class="bars-head">ESTAÇÕES CARREGANDO · ' + ch.length + (over ? ' · POTÊNCIA LIMITADA PELO SITE' : '') + '</div>' +
            ch.map(function (s) {
                var eff = +(s.power * k).toFixed(1);
                var w = eff / maxP * 100;
                return '<div class="bar-row"><span class="nm">' + ic('zap') + 'STATION ' + pad(s.id) + '</span>' +
                    '<span class="bar-track"><span class="bar-fill ' + (over ? 'throttled' : '') + '" style="width:' + w.toFixed(1) + '%"></span></span>' +
                    '<span class="bar-val">' + eff.toFixed(1) + ' kW' + (over ? ' <span style="color:var(--text-2);font-weight:500">/ ' + s.power + '</span>' : '') + '</span></div>';
            }).join('') + '</div></div>';
    }

    function barChart(data, labels, color) {
        var w = 520, h = 230, pl = 42, pb = 26, pt2 = 10, max = 280;
        var iw = w - pl - 8, ih = h - pb - pt2, bw = iw / data.length * 0.6, gap = iw / data.length;
        var g = '';
        [0, 70, 140, 210, 280].forEach(function (v) {
            var y = pt2 + ih - (v / max) * ih;
            g += '<line x1="' + pl + '" y1="' + y + '" x2="' + w + '" y2="' + y + '" stroke="rgba(255,255,255,.07)" stroke-dasharray="3 4"/>' +
                '<text x="' + (pl - 8) + '" y="' + (y + 4) + '" fill="#7d7d7d" font-size="10" text-anchor="end">' + v + '</text>';
        });
        data.forEach(function (v, i) {
            var bh = (v / max) * ih, x = pl + gap * i + (gap - bw) / 2, y = pt2 + ih - bh;
            g += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" fill="' + color + '" rx="2"/>' +
                '<text x="' + (pl + gap * i + gap / 2).toFixed(1) + '" y="' + (h - 8) + '" fill="#b5b5b5" font-size="10" text-anchor="middle">' + labels[i] + '</text>';
        });
        return '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid meet">' + g + '</svg>';
    }

    function lineChart(data, labels, color, max, area, wide) {
        var w = wide ? 1120 : 520, h = wide ? 250 : 230, pl = 42, pb = 26, pt2 = 10, pr = 26;
        var iw = w - pl - pr, ih = h - pb - pt2, step = iw / (data.length - 1);
        var g = '', pts = [];
        var grid = [0, max * 0.25, max * 0.5, max * 0.75, max];
        grid.forEach(function (v) {
            var y = pt2 + ih - (v / max) * ih;
            g += '<line x1="' + pl + '" y1="' + y + '" x2="' + (w - 6) + '" y2="' + y + '" stroke="rgba(255,255,255,.07)" stroke-dasharray="3 4"/>' +
                '<text x="' + (pl - 8) + '" y="' + (y + 4) + '" fill="#7d7d7d" font-size="10" text-anchor="end">' + Math.round(v) + '</text>';
        });
        data.forEach(function (v, i) {
            var x = pl + step * i, y = pt2 + ih - (v / max) * ih;
            pts.push([x, y]);
            g += '<text x="' + x.toFixed(1) + '" y="' + (h - 8) + '" fill="#b5b5b5" font-size="10" text-anchor="middle">' + labels[i] + '</text>';
        });
        var d = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' ');
        if (area) {
            var ad = d + ' L' + pts[pts.length - 1][0].toFixed(1) + ' ' + (pt2 + ih) + ' L' + pts[0][0].toFixed(1) + ' ' + (pt2 + ih) + ' Z';
            g += '<path d="' + ad + '" fill="' + color + '" opacity=".18"/>';
        }
        g += '<path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>';
        if (!area) pts.forEach(function (p) { g += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" fill="' + color + '"/>'; });
        return '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="xMidYMid meet">' + g + '</svg>';
    }

    function opReports() {
        var errsHTML = S.reports.errors.map(function(e, i) {
            return '<div class="list-row"><div><div class="main" style="color:'+(e.res?'var(--green)':'var(--red)')+'">'+e.id+' - Station '+pad(e.st)+'</div><div class="sub">'+e.msg+' ('+e.level+')</div></div>'+
                   (e.res ? '<span class="side" style="color:var(--green)">Resolvido</span>' : '<button class="btn btn-sm" data-a="resvErr" data-v="'+i+'">Marcar Resolvido</button>') + '</div>';
        }).join('');

        var D = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
        var energy = [140, 163, 134, 190, 220, 268, 196];
        var sessions = [38, 44, 35, 50, 61, 71, 55];
        var revenue = [266, 310, 255, 360, 428, 508, 372];
        
        function rc(icon, lbl, val, sub, color) {
            return '<div class="load-card"><div class="lbl" style="display:flex;align-items:center;gap:8px;' +
                (color ? 'color:' + color : '') + '">' + ic(icon) + lbl + '</div>' +
                '<div class="big" style="' + (color ? 'color:' + color : '') + '">' + val + '</div>' +
                '<div style="margin-top:6px;font-size:12px;color:var(--text-2)">' + sub + '</div></div>';
        }
        
        return '<div class="wrap">' +
            '<div class="sec-head">' + ic('chart') + '<h2>Relatórios e Operações</h2></div>' +
            
            '<div class="list-card" style="margin-bottom:24px"><div class="bars-head">ERROS E CHAMADOS ATIVOS</div>'+
            (errsHTML || '<div style="padding:20px;text-align:center;color:var(--text-2)">Nenhum erro ativo no momento.</div>') +
            '</div>'+

            '<div class="rep-cards">' +
            rc('zap', 'ENERGIA', '1,32 MWh', 'esta semana', 'var(--red)') +
            rc('chart', 'SESSÕES', '355', 'esta semana', 'var(--text-0)') +
            rc('dollar', 'CUSTO', 'R$ 2.502', 'receita estimada', 'var(--green)') +
            '</div>' +
            '<div class="chart-grid">' +
            '<div class="chart-card"><h4>Energia · kWh / dia</h4>' + barChart(energy, D, '#FF0000') + '</div>' +
            '<div class="chart-card"><h4>Sessões / dia</h4>' + lineChart(sessions, D, '#FF0000', 80, true) + '</div>' +
            '</div>' +
            '<div class="chart-card"><h4>Receita estimada · R$</h4>' + lineChart(revenue, D, '#25d366', 600, false, true) + '</div></div>';
    }

    var CFG = [
        ['cfg_users', 'users', 'Usuários'], ['cfg_rfid', 'card', 'RFID'], ['cfg_pay', 'wallet', 'Pagamentos'], ['cfg_tariff', 'dollar', 'Tarifas'], ['cfg_limits', 'gauge', 'Limites de potência'],
        ['cfg_load', 'zap', 'Gestão de carga'], ['cfg_sched', 'calendar', 'Agendamento'], ['cfg_maint', 'wrench', 'Manutenção'], ['cfg_diag', 'gauge', 'Diagnósticos'], ['cfg_net', 'wifi', 'Rede'],
        ['cfg_fw', 'chip', 'Firmware'], ['cfg_int', 'link', 'Integrações'], ['cfg_adm', 'shield', 'Administração']
    ];

    function opCfg() {
        return '<div class="wrap">' +
            '<div class="sec-head">' + ic('settings') + '<h2>Configurações</h2></div>' +
            '<div class="cfg-grid">' + CFG.map(function (c) {
                return '<button class="cfg" data-a="openCfg" data-v="' + c[0] + '">' + ic(c[1]) + '<div class="nm">' + c[2] + '</div></button>';
            }).join('') + '</div></div>';
    }

    function renderCfgContent(key) {
        if(key === 'cfg_users') {
            return '<table class="tbl" style="margin:-20px -22px; width:calc(100% + 44px)"><tr><th>USUÁRIO</th><th>LOG</th><th>HORA</th></tr>' + USERS.slice(0,5).map(function(u){ return '<tr><td>'+u.n+'</td><td>App</td><td>Hoje 14:32</td></tr>';}).join('') + '</table>';
        }
        if(key === 'cfg_rfid') {
            return '<div class="sw-row" style="margin-bottom:20px"><span class="txt">Leitor RFID Global</span><button class="sw on"></button></div>' +
                   '<table class="tbl" style="margin:0 -22px; width:calc(100% + 44px)"><tr><th>TAG</th><th>USUÁRIO</th></tr>' + USERS.slice(0,5).map(function(u){ return '<tr><td>'+u.rfid+'</td><td>'+u.n+'</td></tr>';}).join('') + '</table>';
        }
        if(key === 'cfg_tariff') {
            return '<div class="field" style="margin-bottom:15px"><label>Tarifa Atual Global (R$/kWh)</label><input type="number" step="0.01" id="tariff-input" value="' + S.com.tariff + '" style="width:100%; background:#111; color:#fff; padding:10px; border:1px solid #333; border-radius:6px;"></div>' +
                   '<button class="btn" style="width:100%" onclick="alert(\'Buscando dados...\\n\\nA média da tarifa para postos comerciais na sua região (São Paulo, Brasil) é de R$ 1,95 / kWh\')">Simular Tarifa da Região</button>';
        }
        if(key === 'cfg_maint') {
            var m = S.stations.filter(function(s){return s.status === 'maintenance';});
            var mlist = m.length ? m.map(function(s){return '<div class="info-row">STATION '+pad(s.id)+' <span style="color:var(--orange)">Em Manutenção</span></div>';}).join('') : '<div class="info-row">Nenhuma estação em manutenção.</div>';
            return mlist + '<button class="btn btn-red" style="width:100%; margin-top:20px" data-a="callMaint">Chamar Assistência Técnica</button>';
        }
        
        var rows = [];
        if(key === 'cfg_pay') rows = [['Último Repasse', 'R$ 1.204,50'], ['Taxa Gateway', '2.5%']];
        else if(key === 'cfg_limits') rows = [['Station 01', '22 kW'], ['Station 02', '11 kW']];
        else if(key === 'cfg_load') rows = [['Fallback', 'Offline'], ['Prioridade', 'FIFO']];
        else if(key === 'cfg_sched') rows = [['Janela Pública', '24h'], ['Dias', 'Todos']];
        else if(key === 'cfg_diag') rows = [['Potência', 'OK'], ['Temp Média', '42 C'], ['Rede', 'OK']];
        else if(key === 'cfg_net') rows = [['LTE', 'Conectado'], ['IP', '192.168.1.100']];
        else if(key === 'cfg_fw') rows = [['Core', 'v3.2'], ['Status', 'Atualizado']];
        else if(key === 'cfg_int') rows = [['OCPP', 'Conectado'], ['Modbus', 'Ativo']];
        else if(key === 'cfg_adm') rows = [['Operadores', '2'], ['Logs', '1.4MB']];

        return rows.map(function (r) { return infoRow(r[0], r[1]); }).join('');
    }

    function vModal() {
        if (!S.modal) return '';
        
        // Modal de Senha do Operador
        if (S.modal.type === 'pwd') {
            return '<div class="ov"><button class="ov-bg" data-a="closeModal"></button><div class="modal center">' +
                '<div style="color:var(--red);margin-bottom:14px">' + ic('lock', 'logo-md') + '</div>' +
                '<h3 style="margin:0 0 10px;font-size:20px">Acesso Restrito</h3>' +
                '<p style="color:var(--text-1);font-size:14px;margin:0 0 20px">Digite a senha do operador (0000)</p>' +
                '<input type="password" id="op-pwd-input" style="width:100%; background:rgba(10,10,10,.85); border:1px solid var(--border); color:var(--text-0); border-radius:var(--r-sm); padding:12px 14px; font-size:15px; text-align:center; letter-spacing:4px; margin-bottom:10px;">' +
                (S.modal.error ? '<div style="color:var(--red);font-size:12px;margin-bottom:10px;">Senha incorreta.</div>' : '') +
                '<div class="btn-row" style="margin-top:10px">' +
                '<button class="btn" data-a="closeModal">Cancelar</button>' +
                '<button class="btn btn-red" data-a="confirmPwd">Acessar</button>' +
                '</div></div></div>';
        }
        
        // Modal de Estação Ocupada
        if (S.modal.type === 'in_use') {
            return '<div class="ov"><button class="ov-bg" data-a="closeModal"></button><div class="modal center">' +
                '<div style="color:var(--orange);margin-bottom:14px">' + ic('alert', 'logo-md') + '</div>' +
                '<h3 style="margin:0 0 10px;font-size:20px;color:var(--orange)">Estação em Uso</h3>' +
                '<p style="color:var(--text-1);font-size:14px;margin:0 0 20px">A STATION ' + pad(S.modal.stId) + ' já está carregando um veículo neste momento. Por favor, escolha uma estação disponível.</p>' +
                '<div class="btn-row" style="margin-top:10px">' +
                '<button class="btn btn-red" data-a="closeModal">Entendi</button>' +
                '</div></div></div>';
        }

        // Modal de Chamado de Manutenção
        if (S.modal.type === 'maint_call') {
            return '<div class="ov"><button class="ov-bg" data-a="closeModal"></button><div class="modal center">' +
                '<div style="color:var(--green);margin-bottom:14px">' + ic('check', 'logo-md') + '</div>' +
                '<h3 style="margin:0 0 10px;font-size:20px;color:var(--green)">Chamado Aberto</h3>' +
                '<p style="color:var(--text-1);font-size:14px;margin:0 0 20px">A solicitação de manutenção foi enviada com sucesso para a central técnica. Verifique a aba Relatórios.</p>' +
                '<div class="btn-row" style="margin-top:10px">' +
                '<button class="btn btn-red" data-a="closeModal">Concluir</button>' +
                '</div></div></div>';
        }

        if (S.modal.type === 'offline_err') {
            return '<div class="ov"><button class="ov-bg" data-a="closeModal"></button><div class="modal center">' +
                '<div style="color:var(--orange);margin-bottom:14px">' + ic('wifioff', 'logo-md') + '</div>' +
                '<h3 style="margin:0 0 10px;font-size:20px;color:var(--orange)">Carregador Offline</h3>' +
                '<p style="color:var(--text-1);font-size:14px;margin:0 0 20px">Para conectar com o Celular, restabeleça a conexão com a internet através das configurações, ou utilize o cartão RFID local.</p>' +
                '<div class="btn-row" style="margin-top:10px">' +
                '<button class="btn btn-red" data-a="closeModal">Entendi</button>' +
                '</div></div></div>';
        }

        if (S.modal.type === 'power_err') {
            return '<div class="ov"><button class="ov-bg" data-a="closeModal"></button><div class="modal center">' +
                '<div style="color:var(--orange);margin-bottom:14px">' + ic('zap', 'logo-md') + '</div>' +
                '<h3 style="margin:0 0 10px;font-size:20px;color:var(--orange)">Limite de Potência</h3>' +
                '<p style="color:var(--text-1);font-size:14px;margin:0 0 20px">O perfil solicitou uma corrente maior do que a suportada no momento. O carregamento foi ajustado para o máximo permitido (<b>' + S.modal.maxLimit + ' kW</b>).</p>' +
                '<div class="btn-row" style="margin-top:10px">' +
                '<button class="btn btn-red" data-a="closeModal">Continuar</button>' +
                '</div></div></div>';
        }
        
        var key = S.modal.key, icon = (CFG.filter(function (c) { return c[0] === key; })[0] || ['', 'settings'])[1], title = (CFG.filter(function (c) { return c[0] === key; })[0] || ['', '', 'Configurações'])[2];
        return '<div class="ov"><button class="ov-bg" data-a="closeModal" aria-label="' + t('close') + '"></button><div class="modal">' +
            '<div class="modal-head"><span class="t">' + ic(icon) + title + '</span>' +
            '<button class="modal-x" data-a="closeModal" aria-label="' + t('close') + '">' + ic('x') + '</button></div>' +
            '<div class="det-card" style="padding:0 2px;background:none;border:none">' +
            renderCfgContent(key) + '</div>' +
            '<div class="modal-actions"><button class="btn" data-a="closeModal">Fechar</button>' +
            '<button class="btn btn-red" data-a="saveModal">Salvar</button></div>' +
            '<div class="modal-lock">' + ic('lock') + 'Restrito ao Operador</div></div></div>';
    }

    function vSync() {
        if (!S.sync) return '';
        var done = S.sync >= 7;
        return '<div class="ov"><div class="modal" style="max-width:400px">' +
            '<div class="modal-head"><span class="t">' + ic('refresh') + 'Conexão Restabelecida</span></div>' +
            '<p style="margin-bottom:4px">' + (done ? 'SINCRONIZAÇÃO CONCLUÍDA' : 'Sincronizando dados locais...') + '</p>' +
            '<div class="sync-track"><div class="sync-fill" id="sync-fill-bar" style="width:' + Math.min(100, S.sync / 6 * 100) + '%"></div></div>' +
            ['Sessões', 'Energia', 'Usuários'].map(function (k, i) {
                return '<div class="sync-item ' + (S.sync > i ? 'on' : '') + '" id="sync-item-' + i + '">' + ic('check') + k + '</div>';
            }).join('') +
            (done ? '<div class="sync-done">Sincronizado e Online</div>' : '') +
            '</div></div>';
    }

    function vDemo() {
        var fab = '<button class="demo-fab" data-a="demoT">' + ic('sliders') + 'Modo Demonstração</button>';
        if (!S.demo) return fab;
        function db(k, label, cls, icon) {
            return '<button class="db ' + (cls || '') + '" data-a="dm" data-v="' + k + '">' + (icon ? ic(icon) : '') + label + '</button>';
        }
        return fab + '<div class="demo-panel">' +
            '<div class="modal-head" style="margin-bottom:6px"><h4>Demonstração</h4>' +
            '<button class="modal-x" data-a="demoT">' + ic('x') + '</button></div>' +
            '<div class="demo-sec">EXTRAS</div><div class="demo-grid one">' +
            db('solar', 'Painel Solar: ' + (S.solar.connected ? 'ON' : 'OFF'), S.solar.connected ? 'green' : '', 'zap') + '</div>' +
            '<div class="demo-sec">VELOCIDADE DA RECARGA</div>' +
            '<div class="demo-grid" style="grid-template-columns:repeat(5, 1fr); gap:4px;">' +
            [0.5, 1, 1.5, 2, 4].map(function (s) {
                return '<button class="db ' + (S.speed === s ? 'red' : '') + '" data-a="speed" data-v="' + s + '" style="padding:8px 0; font-size:11px;">' + s + 'x</button>';
            }).join('') +
            '</div>' +
            '<div class="demo-grid" style="grid-template-columns:repeat(3, 1fr); gap:4px; margin-top:4px;">' +
            '<button class="db ' + (S.speed === 10 ? 'red' : '') + '" data-a="speed" data-v="10" style="padding:8px 0; font-size:11px;">10x</button>' +
            '<button class="db ' + (S.speed === 60 ? 'red' : '') + '" data-a="speed" data-v="60" style="padding:8px 0; font-size:11px;">60x</button>' +
            '<button class="db ' + (S.speed === 600 ? 'red' : '') + '" data-a="speed" data-v="600" style="padding:8px 0; font-size:11px;">600x</button>' +
            '</div>' +
            '<div class="demo-sec">CONEXÃO</div><div class="demo-grid one">' +
            db('net', S.online ? 'Online → Offline' : 'Offline → Online', '', S.online ? 'wifioff' : 'wifi') + '</div>' +
            '<div class="demo-sec">VEÍCULO</div><div class="demo-grid">' +
            db('vconn', t('d_connected'), '', 'plug') + db('vdis', t('d_disconnected'), '') + '</div>' +
            '<div class="demo-sec">ESTADO</div><div class="demo-grid">' +
            db('charge', t('d_charge'), 'red', 'zap') + db('pause', t('d_pause'), 'orange') +
            db('finish', t('d_finish'), '') + db('error', t('d_error'), 'red', 'alert') + '</div>' +
            '<div class="demo-sec">BATERIA</div><div class="demo-grid four">' +
            db('b20', '20%', '') + db('b42', '42%', '') + db('b63', '63%', '') + db('b90', '90%', '') + '</div>' +
            '<div class="demo-sec">AUTENTICAÇÃO</div><div class="demo-grid one">' +
            db('rfid', t('d_rfid'), 'red', 'card') + '</div>' +
            '<div class="demo-sec">OPERADOR</div><div class="demo-grid one">' +
            db('high', t('d_high'), 'orange', 'gauge') + db('norm', t('d_norm'), '') + db('st3', t('d_st3'), 'red', 'wrench') + '</div>' +
            '<div style="height:14px"></div><div class="demo-grid one">' + db('reset', 'Resetar demo', '', 'refresh') + '</div>' +
            '</div>';
    }

    function render() {
        var h = '';
        if (S.view !== 'landing' && S.view !== 'onboarding') h += topbar();
        else h += topbar();
        
        if (S.view === 'landing') h += vLanding();
        else if (S.view === 'onboarding') h += vOnboarding();
        else if (S.view === 'res') h += vRes();
        else if (S.view === 'com') h += vCom();
        else if (S.view === 'op') h += vOp();
        
        h += vModal() + vSync() + vDemo();
        document.getElementById('app').innerHTML = h;
        S.animateNext = false;
    }
    
    render();

    /* =============== MQTT Wokwi Sync e App Connection =============== */
    if (typeof mqtt !== 'undefined') {
        var mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt');

        mqttClient.on('connect', function () {
            console.log("MQTT Conectado! Aguardando dados do Wokwi e do App...");
            mqttClient.subscribe('goodwe_smart_hmi_solar_xyz123');
        });

        mqttClient.on('message', function (topic, message) {
            try {
                var data = JSON.parse(message.toString());

                if (topic === 'goodwe_smart_hmi_solar_xyz123') {
                    S.solar.lux = data.lux;
                    S.solar.percent = data.percent;
                    S.solar.angle = data.angle;
                    
                    if (S.solar.connected) {
                        var eL = document.getElementById('sol-lux');
                        var eP = document.getElementById('sol-pct');
                        var eA = document.getElementById('sol-ang');
                        if (eL) eL.innerText = data.lux;
                        if (eP) eP.innerText = data.percent;
                        if (eA) eA.innerText = data.angle;
                    }
                }

                if (topic === 'goodwe_hmi/sync/' + S.res.syncCode && data.action === 'sync_profiles') {
                    var cores = ['c-red', 'c-green', 'c-orange', 'c-blue'];
                    S.res.profiles = data.profiles.map(function (p, i) {
                        return { 
                            n: p.profileName.toUpperCase(), 
                            c: cores[i % cores.length], 
                            a: p.currentLimit === 'auto' ? 'Auto' : p.currentLimit + ' A', 
                            h: p.chargingMode === 'timer' ? 'Timer' : 'Livre',
                            rawLimit: p.currentLimit
                        };
                    });
                    S.res.v = 'idle'; 
                    S.res.syncCode = '';
                    render();
                }

                if (topic.indexOf('to_hmi') > -1) {
                    if (data.action === 'auth_session' && S.com.step === 'scan') {
                        S.com.user = data.profile.profileName;
                        S.com.target = parseInt(data.profile.targetChargePercentage);
                        S.com.car = data.profile.vehicleBrand + ' ' + data.profile.vehicleModel;
                        S.com.mode = data.profile.chargingMode === 'timer' ? 'Timer' : 'Livre';
                        S.com.step = 'ident';
                        render();
                    }
                    if (data.action === 'end_session' && (S.com.step === 'charging' || S.com.step === 'paused' || S.com.step === 'ident')) {
                        A.comStop();
                        render();
                    }
                }
            } catch (e) {
                console.log("Erro ao processar pacote MQTT:", e);
            }
        });
    }
})();