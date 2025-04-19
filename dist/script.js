/**
 * Botón de WhatsApp Flotante con Menú Interactivo
 * Este script crea un botón flotante de WhatsApp con un menú desplegable
 * que permite a los usuarios iniciar conversaciones con diferentes departamentos
 */

document.addEventListener("DOMContentLoaded", function () {
    // Crear el contenedor principal que albergará el botón y el menú
    const container = document.createElement("div");
    container.className = "whatsapp-container";

    // Crear el botón de WhatsApp con ícono y X para cerrar
    const whatsappButton = document.createElement("button");
    whatsappButton.className = "whatsapp-button";
    whatsappButton.innerHTML = `
        <span class="default-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </span>
        <span class="close-icon">×</span>
    `;

    // Crear el menú desplegable con las opciones de contacto
    const menu = document.createElement("div");
    menu.className = "whatsapp-menu";
    menu.innerHTML = `
        <!-- Encabezado del menú con título y descripción -->
        <div class="menu-header">
            <div class="header-icon-wrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="header-icon">
            </div>
            <p class="header-title">Iniciar Conversación</p>
            <p class="header-subtitle">Hola, clickea en una de las opciones del directorio para chatear por Whatsapp</p>
            <p class="menu-subheader">💬 Respuesta en unos minutos</p>
        </div>
        
        <!-- Opciones del menú -->
        <!-- Opción 1: Solicitar Cotización -->
        <a href="https://wa.me/51986673748?text=Hola,%20quiero%20solicitar%20una%20cotización" class="menu-item">
            <div class="menu-icon">
                <i class="fas fa-file-invoice-dollar"></i>
            </div>
            <div class="menu-text">
                <strong>Solicitar Cotización</strong>
                <span>Obtén un presupuesto personalizado</span>
            </div>
            <div class="menu-arrow">→</div>
        </a>
        
        <!-- Opción 2: Ser Proveedor -->
        <a href="https://wa.me/51986673748?text=Hola,%20quiero%20ser%20proveedor" class="menu-item">
            <div class="menu-icon">
                <i class="fas fa-handshake"></i>
            </div>
            <div class="menu-text">
                <strong>Ser Proveedor</strong>
                <span>Únete a nuestra red de socios</span>
            </div>
            <div class="menu-arrow">→</div>
        </a>
        
        <!-- Opción 3: Oportunidades Laborales -->
        <a href="https://wa.me/51986673748?text=Hola,%20quiero%20trabajar%20con%20ustedes" class="menu-item">
            <div class="menu-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <div class="menu-text">
                <strong>Oportunidades Laborales</strong>
                <span>Forma parte de nuestro equipo</span>
            </div>
            <div class="menu-arrow">→</div>
        </a>
        
        <!-- Opción 4: Otras Consultas -->
        <a href="https://wa.me/51986673748?text=Hola,%20tengo%20otra%20consulta" class="menu-item">
            <div class="menu-icon">
                <i class="fas fa-comments"></i>
            </div>
            <div class="menu-text">
                <strong>Otras Consultas</strong>
                <span>Estamos para ayudarte</span>
            </div>
            <div class="menu-arrow">→</div>
        </a>
    `;

    // Crear estilos
    const style = document.createElement("style");
    style.textContent = `
        .whatsapp-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 99999;
        }

        .whatsapp-button {
            background: linear-gradient(45deg, #25D366, #128C7E);
            color: white;
            border-radius: 50%;
            width: 65px;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            padding: 0;
            position: relative;
            overflow: hidden;
        }

        /* Efecto de pulso */
        .whatsapp-button::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: inherit;
            border-radius: 50%;
            z-index: -1;
            animation: pulse 2s infinite;
            opacity: 0.8;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.8;
            }
            70% {
                transform: scale(1.3);
                opacity: 0;
            }
            100% {
                transform: scale(1.3);
                opacity: 0;
            }
        }

        /* Efecto de brillo */
        .whatsapp-button::before {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            background: linear-gradient(45deg, 
                transparent, 
                rgba(255, 255, 255, 0.4), 
                transparent);
            top: -25%;
            left: -25%;
            transform: rotate(45deg) translateX(-150%);
            transition: 0.5s;
            animation: shine 6s infinite;
        }

        @keyframes shine {
            0% {
                transform: rotate(45deg) translateX(-150%);
            }
            50% {
                transform: rotate(45deg) translateX(150%);
            }
            100% {
                transform: rotate(45deg) translateX(150%);
            }
        }

        .whatsapp-button:hover::before {
            transform: rotate(45deg) translateX(150%);
        }

        .whatsapp-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
            background: linear-gradient(45deg, #128C7E, #25D366);
        }

        .whatsapp-button:active {
            transform: scale(0.92);
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .whatsapp-button .default-icon {
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        .whatsapp-button:hover .default-icon {
            transform: rotate(10deg) scale(1.1);
            filter: brightness(1.2) drop-shadow(0 3px 6px rgba(0,0,0,0.3));
        }

        .whatsapp-button .close-icon {
            position: absolute;
            font-size: 35px;
            display: none;
            font-weight: 300;
            transition: all 0.4s ease;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            color: white;
        }

        .whatsapp-container.active .whatsapp-button {
            background: linear-gradient(45deg, #25D366, #128C7E);
            transform: rotate(180deg);
        }

        .whatsapp-container.active .whatsapp-button:hover {
            background: linear-gradient(45deg, #128C7E, #25D366);
            transform: rotate(180deg) scale(1.1);
        }

        .whatsapp-container.active .default-icon {
            transform: scale(0) rotate(180deg);
            opacity: 0;
        }

        .whatsapp-container.active .close-icon {
            display: block;
            animation: spinIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes spinIn {
            from {
                transform: rotate(-180deg) scale(0);
            }
            to {
                transform: rotate(0) scale(1);
            }
        }

        /* Tooltip personalizado */
        .whatsapp-button::after {
            content: '';
            position: absolute;
            right: 75px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 14px;
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            transition: all 0.3s ease;
            white-space: nowrap;
            pointer-events: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .whatsapp-button:hover::after {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }

        /* Mejoras en el menú */
        .whatsapp-menu {
            position: absolute;
            bottom: 0;
            right: 80px; /* Cambiado para aparecer al lado del botón */
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15),
                       inset 0 0 20px rgba(37, 211, 102, 0.1);
            width: 320px;
            max-width: calc(100vw - 100px);
            opacity: 0;
            visibility: hidden;
            transform: translateX(20px); /* Cambiado para animación horizontal */
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform-origin: center right;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .whatsapp-container.active .whatsapp-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }

        /* Ajustes responsivos para el menú lateral */
        @media (max-width: 480px) {
            .whatsapp-menu {
                right: 65px;
                bottom: 0;
                width: calc(100vw - 80px);
                max-height: 90vh;
                overflow-y: auto;
            }
        }

        .menu-header {
            padding: 25px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            border-radius: 15px 15px 0 0;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .menu-header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
            );
            transform: rotate(45deg);
            animation: headerShine 3s infinite;
        }

        @keyframes headerShine {
            0% {
                transform: translateX(-100%) rotate(45deg);
            }
            100% {
                transform: translateX(100%) rotate(45deg);
            }
        }

        .header-icon-wrapper {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            backdrop-filter: blur(5px);
            transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .header-icon-wrapper:hover {
            transform: scale(1.1) rotate(10deg);
        }

        .header-icon {
            width: 35px;
            height: 35px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }

        .header-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 5px;
            color: #ffffff;
        }

        .header-subtitle {
            font-size: 14px;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .menu-subheader {
            font-size: 12px;
            color: #ffffff;
            background: rgba(255, 255, 255, 0.1);
            padding: 5px 15px;
            border-radius: 20px;
            display: inline-block;
        }

        .menu-item {
            display: flex;
            align-items: center;
            padding: 20px;
            text-decoration: none;
            color: #333;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            background: white;
            backdrop-filter: blur(5px);
        }

        .menu-item:last-child {
            border-bottom: none;
            border-radius: 0 0 15px 15px;
        }

        .menu-item:hover {
            background: linear-gradient(to right, rgba(37, 211, 102, 0.15), transparent);
            transform: translateX(8px);
            box-shadow: 0 2px 8px rgba(37, 211, 102, 0.1);
        }

        .menu-icon {
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: white;
            font-size: 20px;
            flex-shrink: 0;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);
            transform: rotate(0deg);
        }

        .menu-item:hover .menu-icon {
            transform: scale(1.15) rotate(-12deg);
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
        }

        .menu-text {
            flex: 1;
        }

        .menu-text strong {
            display: block;
            font-size: 16px;
            color: #1a1a1a;
            margin-bottom: 4px;
            font-weight: 600;
        }

        .menu-text span {
            font-size: 13px;
            color: #666;
        }

        .menu-arrow {
            font-size: 20px;
            color: #25D366;
            margin-left: 15px;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
        }

        .menu-item:hover .menu-arrow {
            opacity: 1;
            transform: translateX(0);
        }

        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }

        .menu-item:active::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            background: rgba(37, 211, 102, 0.1);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: ripple 0.6s linear;
        }

        /* Efectos de partículas en el botón */
        @keyframes particle {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 0.8;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(0);
                opacity: 0;
            }
        }

        .particle {
            position: absolute;
            background: linear-gradient(45deg, #25D366, white);
            border-radius: 50%;
            pointer-events: none;
            animation: particle 0.8s ease-out forwards;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 480px) {
            .whatsapp-container {
                bottom: 15px;
                right: 15px;
            }

            .whatsapp-button {
                width: 50px;
                height: 50px;
            }

            .whatsapp-button .default-icon {
                width: 25px;
                height: 25px;
            }

            .whatsapp-menu {
                width: calc(100vw - 30px);
                right: -15px;
                bottom: 75px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .menu-item:hover {
                transform: translateX(5px);
            }

            .whatsapp-button::after {
                display: none;
            }
        }

        /* Animación de entrada para el texto */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .menu-header .header-title {
            animation: fadeInDown 0.6s ease forwards;
            animation-delay: 0.2s;
            opacity: 0;
        }

        .menu-header .header-subtitle {
            animation: fadeInDown 0.6s ease forwards;
            animation-delay: 0.4s;
            opacity: 0;
        }

        .menu-header .menu-subheader {
            animation: fadeInDown 0.6s ease forwards;
            animation-delay: 0.6s;
            opacity: 0;
        }

        .menu-item {
            opacity: 0;
            animation: fadeInDown 0.6s ease forwards;
        }

        .menu-item:nth-child(1) { animation-delay: 0.8s; }
        .menu-item:nth-child(2) { animation-delay: 1s; }
        .menu-item:nth-child(3) { animation-delay: 1.2s; }
        .menu-item:nth-child(4) { animation-delay: 1.4s; }
    `;

    // Añadir Font Awesome para los íconos
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
    document.head.appendChild(fontAwesome);

    // Añadir elementos al DOM
    document.head.appendChild(style);
    container.appendChild(whatsappButton);
    container.appendChild(menu);
    document.body.appendChild(container);

    // Alternar el menú al hacer clic en el botón
    whatsappButton.addEventListener("click", function(e) {
        for(let i = 0; i < 8; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            const size = Math.random() * 4 + 2;
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            particle.style.setProperty('--tx', (Math.random() - 0.5) * 100 + "px");
            particle.style.setProperty('--ty', (Math.random() - 0.5) * 100 + "px");
            whatsappButton.appendChild(particle);
            setTimeout(() => particle.remove(), 800);
        }
        container.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener("click", function(event) {
        if (!container.contains(event.target)) {
            container.classList.remove("active");
        }
    });
});
