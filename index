<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Paper Design Interface</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .phone-container {
            width: 390px;
            height: 844px;
            background: #ffffff;
            border-radius: 40px;
            box-shadow: 
                0 25px 50px -12px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .header {
            background: #ffffff;
            padding: 24px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            z-index: 10;
        }

        .header h1 {
            font-size: 28px;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 4px;
        }

        .header p {
            font-size: 14px;
            color: #666;
        }

        .content {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 20px;
            -webkit-overflow-scrolling: touch;
        }

        .tile-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 20px;
        }

        .tile {
            height: 162px;
            background: #ffffff;
            border-radius: 16px;
            padding: 16px;
            box-shadow: 
                0 1px 3px rgba(0,0,0,0.12),
                0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            position: relative;
            overflow: hidden;
        }

        .tile::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .tile:hover {
            transform: translateY(-4px);
            box-shadow: 
                0 8px 16px rgba(0,0,0,0.12),
                0 4px 8px rgba(0,0,0,0.16);
        }

        .tile:hover::before {
            opacity: 1;
        }

        .tile:active {
            transform: translateY(-2px);
        }

        .tile-title {
            font-size: 16px;
            font-weight: 600;
            color: #1a1a1a;
            line-height: 1.3;
        }

        .tile-subtitle {
            font-size: 12px;
            color: #888;
            margin-top: 4px;
        }

        .tabbar {
            background: #ffffff;
            border-top: 1px solid #e0e0e0;
            padding: 12px 34px 32px 34px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
            z-index: 10;
        }

        .tab-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 12px;
            transition: all 0.2s ease;
        }

        .tab-item:hover {
            background: #f5f5f5;
        }

        .tab-item.active {
            color: #667eea;
        }

        .tab-icon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .tab-icon svg {
            width: 100%;
            height: 100%;
            fill: currentColor;
            color: #666;
        }

        .tab-item.active .tab-icon svg {
            color: #667eea;
        }

        .tab-label {
            font-size: 11px;
            font-weight: 500;
            color: #666;
        }

        .tab-item.active .tab-label {
            color: #667eea;
        }

        .content::-webkit-scrollbar {
            width: 6px;
        }

        .content::-webkit-scrollbar-track {
            background: transparent;
        }

        .content::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 3px;
        }

        @media (max-width: 430px) {
            body {
                padding: 0;
            }
            
            .phone-container {
                width: 100vw;
                height: 100vh;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="phone-container">
        <div class="header">
            <h1>Willkommen</h1>
            <p>Deine Paper Design App</p>
        </div>
        
        <div class="content">
            <div class="tile-grid">
                <div class="tile" onclick="alert('Kachel 1 geklickt')">
                    <div class="tile-title">Dashboard</div>
                    <div class="tile-subtitle">Übersicht & Statistiken</div>
                </div>
                <div class="tile" onclick="alert('Kachel 2 geklickt')">
                    <div class="tile-title">Profil</div>
                    <div class="tile-subtitle">Deine Einstellungen</div>
                </div>
                <div class="tile" onclick="alert('Kachel 3 geklickt')">
                    <div class="tile-title">Nachrichten</div>
                    <div class="tile-subtitle">3 neue Nachrichten</div>
                </div>
                <div class="tile" onclick="alert('Kachel 4 geklickt')">
                    <div class="tile-title">Kalender</div>
                    <div class="tile-subtitle">2 anstehende Termine</div>
                </div>
                <div class="tile" onclick="alert('Kachel 5 geklickt')">
                    <div class="tile-title">Medien</div>
                    <div class="tile-subtitle">Fotos & Videos</div>
                </div>
                <div class="tile" onclick="alert('Kachel 6 geklickt')">
                    <div class="tile-title">Einstellungen</div>
                    <div class="tile-subtitle">App konfigurieren</div>
                </div>
            </div>
        </div>
        
        <div class="tabbar">
            <div class="tab-item active" onclick="setActive(this)">
                <div class="tab-icon">
                    <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <div class="tab-label">Home</div>
            </div>
            <div class="tab-item" onclick="setActive(this)">
                <div class="tab-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <div class="tab-label">Favoriten</div>
            </div>
        </div>
    </div>

    <script>
        function setActive(element) {
            document.querySelectorAll('.tab-item').forEach(item => {
                item.classList.remove('active');
            });
            element.classList.add('active');
        }
    </script>
</body>
</html>