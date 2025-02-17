module.exports = {
    current_language: 'Deutsch',
    language: 'Sprache',
    home: 'Satpile',
    add: 'Hinzufügen',
    name: 'Name',
    address: 'Adresse',
    addresses: 'Adressen',
    scan_qr_code: 'Scanne QR Code',
    cancel: 'Abbrechen',
    done: 'Speichern',
    invalid_address: 'Ungültige Adresse',
    success_added: 'Adresse erfolgreich hinzugefügt',
    error_added: 'Fehler beim Hinzufügen der Adresse',
    address_copied: 'Adresse in die Zwischenablage kopiert',
    delete: 'Löschen',
    delete_address_sure: 'Diese Adresse aus der Liste entfernen?',
    delete_folder_sure: 'Diesen Ordner aus der Liste entfernen?',
    error: 'Fehler',
    success: 'Erfolgreich',
    new_folder: 'Neuer Ordner',
    enter_folder_name: 'Gib den Ordnernamen ein',
    folder_name: 'Ordnername',
    add_folder: 'Ordner hinzufügen',
    close: 'Schließen',
    copy: 'Kopieren',
    export: 'Exportieren',
    from: 'Von',
    to: 'An',
    date: {
        formats: {short: "%d %b %Y", long: "%d %b %Y %H:%M:%S"},
        abbr_day_names: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        day_names: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
        abbr_month_names: [null, "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        month_names: [null, "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
    },
    no_network: "Fehler: Netzwerk kann nicht erreicht werden",
    connection_error: "Verbindung zu Server nicht möglich:\n{{server}}",
    connection_success: "Erfolgreich",
    no_address: "Dieser Ordner ist leer.\nDrücke +, um eine neue Adresse hinzuzufügen",
    no_folder: "Drücke +, um einen neuen Ordner zu erstellen.\nDanach klicke auf diesen Ordner, um dort neue Adressen hinzuzufügen.\nDu kannst auch einen Wallet XPUB hinzufügen.",
    rename_folder: "Ordner umbenennen",
    successfully_deleted: "Ordner erfolgreich gelöscht",
    tap_reload: "Drücke, um Bestände zu aktualisieren",
    last_update: "Letzte Aktualisierung:",
    dont_trust_verify: "Don't trust. Verify:",
    links_will_open: "(Links werden im Browser geöffnet)",
    minutes: 'Minuten',
    settings: {
        title: 'Einstellungen',
        refresh: 'Aktualisierungs Intervall',
        refresh_every: 'Aktualisiere alle',
        refresh_manual: 'Manuell',
        locale: 'Sprache',
        dark_mode: 'Dunkles Erscheinungsbild',
        icloud: 'iCloud Backup',
        feedback: 'Sende Feedback',
        rate: 'Bewerte diese App',
        twitter: 'Folge uns auf Twitter',
        about: 'Über',
        legal: 'Impressum',
        version: 'Version',
        copyright: 'Copyright',
        clear_data: 'Daten löschen',
        clear_data_sure: 'Bist du dir sicher, dass du alle Daten löschen möchtest?',
        about_content: [
            "Satpile ist ein kostenloses und quelloffenes Projekt, gebaut von Bitcoiner für Bitcoiner. Satpile benötigt keine Accounterstellung.\n" +
            "Wir überwachen weder deine Aktivitäten, noch eine Daten. Wir respektieren deine Privatsphäre.\n" +
            "Wenn du es für hilfreich empfindest, erzähle es bitte deinen Freunden und hinterlasse eine Bewertung im App Store. Danke!",

            "Kontaktiere uns auf Twitter",

            "Wir freuen uns über dein Feedback und deine Kommentare."
        ],
        security: {
            title: "Sicherheit",
            warning: "Wenn du ein Passwort aktivierst, wird es bei jedem Start von Satpile benötigt. Sei vorsichtig, es gibt keine Möglichkeit der Wiederherstellung.",
            enable_faceid: "FaceID aktivieren",
            enable_touchid: "TouchID aktivieren",
            passphrase: "Passwort",
            use_passphrase: "Passwort benutzen",
            error_match: "Passwörter sind nicht identisch",
            create_passphrase: "Erstelle das Passwort, mit dem du Satpile entsperren möchtest",
            confirm_passphrase: "Passwort wiederholen",
            wrong_passphrase: "Falsches Passwort. Bitte versuche es erneut.",
            unlock: "Entsperren",
            enter_passphrase: "Passwort eingeben:"
        },
        explorer: {
            title: "Explorer",
            http_api: "HTTP API Explorer",
            custom: "Benutzerdefinierter Explorer",
            custom_electrum: "Benutzerdefinierter Electrum Server",
            hostname: "Hostname/IP",
            enable_ssl: "TLS/SSL aktivieren",
            port_number: "Port Nummer",
            test: "Teste Verbindung zu Server"
        },
        website: 'Neuigkeiten',
        buy: 'Kaufe Bitcoin',
        shop: 'Shop',
        display_unit_btc_sats: "Anzeigeeinheit : sats / ₿",
        hide_empty: "Verstecke leere Adressen"
    },
    share_qrcode:'Exportiere QR Code',
    notification: {
        increase: {
            title: "Bestand erhöht",
            diff: "Wurde gutgeschrieben: %{amount}",
        },
        decrease: {
            title: "Bestand verringert",
            diff: "Wurde abgehoben: %{amount}"
        },
        folder: "Im Ordner: %{folder}",
        total: "Neue Summe: %{total}"
    },
    permission:{
        camera: "Zugriff auf Kamera ist deaktiviert. Um einen QR Code zu scannen, erlaube den Zugriff auf die Kamera in Einstellungen > Satpile.",
        notification: "Du muss Benachrichtigungen erlauben, damit Hintergrundaktualisierung funktioniert."
    },
    goto_settings: "Geh zu den Einstellungen",
    rename_address: "Adresse umbenennen",
    enter_address_name: "Adressbezeichnung eingeben",
    address_name: "Adressbezeichnung",
    edit_derivation_path: "Ändere den Ableitungspfad",
    enter_starting_derivation_path: "Gib den Start Ableitungspfad ein",
    starting_derivation_path: "Start Ableitungspfad",
    selected_starting_derivation_path: "Wähle den Start Ableitungspfad aus:",
    generated_derivation_paths: "Nächste generierte Ableitungspfade:",
    generate_new_addresses: "Genereiere neue Adressen",
    info_xpub: "Du kannst einen XPUB Wallet (xpub/ypub/zpub) hinzufügen und automatisch seine abgeleiteten Adressen überwachen.",
    advanced_users_only: "Nur für erfahrene Nutzer",
    should_not_change: "Alles sollte funktionieren, ohne dass du das folgende ändern musst",
    tor: {
        status: {
            CONNECTED: "Verbunden mit TOR Daemon",
            CONNECTING: "Verbinden mit TOR Daemon...",
            DISCONNECTED: "Verbindung zu TOR Daemon getrennt"
        }
    },
    hidden_addresses: {
        one: "1 leere Adresse wurde versteckt",
        other: "%{count} leere Adressen wurden versteckt"
    }
};
