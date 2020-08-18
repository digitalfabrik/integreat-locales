const x = {
  app: {
    pageTitles: {
      search: 'Suche',
      events: 'Veranstaltungen',
      offers: 'Angebote',
      landing: 'Ortsauswahl',
      disclaimer: 'Impressum und Kontakt',
      mainDisclaimer: 'Impressum und Kontakt - {{appName}}',
      pois: 'Points of Interest',
      notFound: 'Seite nicht gefunden',
      tunews: 'tünews',
      localNews: 'Lokale Nachrichten'
    },
    metaDescription: '{{appName}} ist Ihr digitaler Guide für Deutschland. Finden Sie lokale Informationen, Veranstaltungen und Beratung. Immer aktuell und in Ihrer Sprache.'
  },
  categories: { createPdf: 'PDF erstellen' },
  common: {
    languageNotAvailable: 'Deine Sprache ist hier leider nicht verfügbar.',
    chooseALanguage: 'Wähle eine Sprache.',
    lastUpdate: 'Letzte Änderung:'
  },
  dashboard: {
    localInformation: 'Lokale Informationen',
    offers: 'Angebote',
    events: 'Veranstaltungen',
    news: 'Nachrichten',
    newsAlternative: 'Neuigkeiten'
  },
  error: {
    notFound: {
      language: 'Diese Sprache ist hier leider nicht verfügbar.',
      city: 'Diese Stadt wurde leider nicht gefunden.',
      category: 'Diese Seite wurde leider nicht gefunden.',
      event: 'Dieses Event wurde leider nicht gefunden.',
      offer: 'Dieses Angebot wurde leider nicht gefunden.',
      poi: 'Dieser Point of Interest wurde leider nicht gefunden.'
    },
    pageNotFound: 'Diese Seite wurde leider nicht gefunden.',
    networkConnectionFailed: 'Die Verbindung zum Server ist fehlgeschlagen.',
    networkRequestFailed: 'Die Anfrage konnte nicht bearbeitet werden.',
    responseMappingFailed: 'Die Antwort des Servers konnte nicht verarbeitet werden.',
    unknownError: 'Ein unbekannter Fehler ist aufgetreten.',
    tryAgain: 'Erneut versuchen',
    loadingFailed: 'Die Seite konnte leider nicht geladen werden.',
    chooseALanguage: 'Wähle eine Sprache:',
    goTo: {
      start: 'Zur Startseite',
      categories: 'Zu den Kategorien',
      events: 'Zu den Veranstaltungen',
      offers: 'Zu den Angeboten'
    },
    pageTitle: 'Fehler',
    generalError: 'Ein Fehler ist aufgetreten',
    languageSwitchFailedTitle: 'Leider ist der Sprachwechsel fehlgeschlagen.',
    languageSwitchFailedMessage: 'Die ausgewählte Sprache ist nicht offline verfügbar. Eine aktive Internetverbinding ist notwendig.'
  },
  events: {
    location: 'Standort',
    date: 'Datum',
    events: 'Veranstaltungen',
    currentlyNoEvents: 'Es gibt aktuell keine Veranstaltungen.'
  },
  feedback: {
    technicalTopics: 'Technische Funktionen',
    contentOfCity: 'Inhalte von {{city}}',
    contentOfOffer: 'Angebot "{{offer}}"',
    disclaimer: 'Kontakt und Impressum',
    searchFor: 'Suche nach',
    contentOfPage: 'Inhalt der Seite "{{page}}"',
    contentOfEvent: 'Inhalt der Veranstaltung "{{event}}"',
    send: 'Abschicken',
    failedSendingFeedback: 'Beim Senden des Feedbacks ist ein Fehler aufgetreten.',
    feedback: 'Feedback',
    positiveComment: 'Was war hilfreich?',
    negativeComment: 'Was können wir besser machen?',
    feedbackType: 'Wofür ist das Feedback?',
    isThisSiteUseful: 'Ist diese Seite hilfreich?',
    useful: 'Hilfreich',
    notUseful: 'Nicht hilfreich',
    nothingFound: 'Es wurden leider keine passenden Ergebnisse gefunden.',
    yourFeedback: 'Ihr Feedback...',
    informationNotFound: 'Nicht das Richtige gefunden?',
    wantedInformation: 'Welche Informationen fehlen hier?',
    feedbackSent: 'Feedback abgeschickt',
    thanksMessage: 'Vielen Dank für Ihr Feedback. Damit helfen Sie uns, unsere Inhalte und die {{appName}}-App zu verbessern. Wir würden uns über weiteres Feedback freuen.',
    close: 'Schließen',
    negativeRating: 'Diese Seite ist nicht hilfreich',
    positiveRating: 'Diese Seite ist hilfreich'
  },
  intro: {
    integreat: '{{appName}}',
    integreatDescription: '{{appName}} ist Ihr digitaler Guide für Deutschland',
    search: 'Suche',
    searchDescription: 'Anhand von Schlagwörtern schnell die richtige Information finden',
    languageChange: 'Sprachwechsel',
    languageChangeDescription: 'Einfaches Umstellen der Sprache einzelner Seiten',
    events: 'Veranstaltungen',
    eventsDescription: 'Aktuelle Veranstaltungen und Termine in der Umgebung',
    offers: 'Angebote',
    offersDescription: 'Jobsuche, Praktikasuche und mehr in der Umgebung',
    inquiryTitle: 'Einstellungen',
    inquiryIntro: 'Durch Klicken auf "{{accept}}" erlaube ich der {{appName}}-App, ...',
    sentryTitle: 'App-Stabilität',
    sentryCondition: '... mit dem automatischen Senden von Absturzberichten {{appName}} zu verbessern',
    pushNewsTitle: 'Push-Benachrichtigungen',
    pushNewsCondition: '... mir Push-Benachrichtigungen zu den neuesten lokalen Nachrichten zu senden',
    proposeCitiesTitle: 'Nahegelegene Orte',
    proposeCitiesCondition: '... mir mithilfe meines GPS-Standortes nahegelegene Orte vorzuschlagen',
    skip: 'Überspringen',
    next: 'Weiter',
    cancel: 'Abbrechen',
    save: 'Speichern',
    customize: 'Anpassen',
    decline: 'Ablehnen',
    accept: 'Akzeptieren',
    privacyPolicy: 'Datenschutzerklärung'
  },
  landing: {
    searchCity: 'Ort suchen',
    nearbyPlaces: 'Orte in der Nähe',
    noNearbyPlaces: 'Keine Orte in der Nähe gefunden.',
    alert: 'Hinweis',
    locationError: 'Um Orte in der Nähe anzeigen zu können, müssen Ortungsdienste aktiviert werden.',
    noPermission: 'Standortzugriff erforderlich',
    loading: 'Bestimme Standort…',
    notAvailable: 'Standortbestimmung deaktiviert',
    timeout: 'Standortbestimmung fehlgeschlagen',
    refresh: 'Liste der Orte aktualisieren'
  },
  layout: {
    imprintAndContact: 'Impressum und Kontakt',
    privacy: 'Datenschutz',
    offers: 'Angebote',
    localInformation: 'Lokale Informationen',
    events: 'Veranstaltungen',
    noEvents: 'Keine Veranstaltungen',
    news: 'Nachrichten',
    noLanguages: 'Nicht verfügbar in anderen Sprachen',
    noTranslation: 'Keine Übersetzung verfügbar',
    search: 'Suchen',
    changeLocation: 'Standort wechseln',
    changeLanguage: 'Sprache wechseln',
    settings: 'Einstellungen',
    share: 'Teilen',
    cancel: 'Abbrechen',
    shareMessage: 'Gerade gefunden: {{message}}',
    shareFailDefaultMessage: 'Das Teilen des Inhalts ist leider fehlgeschlagen.',
    disclaimer: 'Impressum'
  },
  news: {
    news: 'Nachrichten',
    newsAlternative: 'Neuigkeiten',
    localNews: 'Lokale Nachrichten',
    localNewsAlternative: 'Lokale Neuigkeiten',
    local: 'Lokal',
    readMore: 'Weiterlesen',
    currentlyNoNews: 'Aktuell gibt es keine Nachrichten.',
    currentlyNoNewsAlternative: 'Aktuell gibt es keine Neuigkeiten.'
  },
  offers: { offers: 'Angebote' },
  search: { searchPlaceholder: 'Suche' },
  settings: {
    sentryTitle: 'App-Stabilität',
    sentryDescription: 'Durch das automatische Senden von Absturzberichten die {{appName}}-App verbessern',
    pushNewsTitle: 'Push-Benachrichtigungen',
    pushNewsDescription: 'Push-Benachrichtigungen für die neuesten lokalen Nachrichten erhalten',
    proposeCitiesTitle: 'Nahegelegene Orte',
    proposeCitiesDescription: 'Mithilfe des GPS-Standortes Vorschläge für nahegelegene Orte erhalten',
    about: 'Über {{appName}}',
    privacyPolicy: 'Datenschutzerklärung',
    version: 'Version: {{version}}',
    openSourceLicenses: 'Open-Source-Lizenzen'
  },
  snackbar: {
    grantPermission: 'Erlauben',
    deactivateFeature: 'Feature deaktivieren',
    locationPermissionMissing: 'Standortzugriff zum Vorschlagen von nahegelegenen Orten erforderlich',
    pushNotificationPermissionMissing: 'Berechtigungen zum Senden von Push-Benachrichtigungen erforderlich',
    deactivate: 'Deaktivieren',
    coronaMessage: 'Aktuelle, wissenschaftliche Informationen finden Sie bei der Bundeszentrale für gesundheitliche Aufklärung.',
    coronaUrl: 'https://www.infektionsschutz.de/coronavirus/',
    learnMore: 'Mehr Infos',
    dismiss: 'Schließen'
  },
  sprungbrett: { noOffersAvailable: 'Keine Angebote verfügbar' },
  wohnen: {
    noOffersAvailable: 'Keine Angebote verfügbar.',
    values: {
      runningServices: [Object],
      additionalServices: [Object],
      rooms: [Object]
    }
  }
}