/**
 * Store for highscore entries
 */
Ext.define('Kort.store.Highscore', {
    extend: 'Ext.data.Store',

	config: {
		model: 'Kort.model.HighscoreEntry',
        clearOnPageLoad: false,
        sorters: {
            property : 'ranking',
            direction: 'asc'
        },

		proxy: {
			type: 'rest',
            url: Kort.util.Config.getWebservices().highscore.url,
            startParam: false,
            extraParams: {
                'lang': Kort.util.Config.getLanguage(),
                'limit': Kort.util.Config.getWebservices().highscore.limit
            },
            reader: {
                type: 'json',
                rootProperty: 'return'
            }
		}
	}
});
