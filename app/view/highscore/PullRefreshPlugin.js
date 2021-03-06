/**
 * Pull refresh plugin for highscore list
 */
Ext.define('Kort.view.highscore.PullRefreshPlugin', {
    extend: 'Kort.plugin.PullRefresh',
    alias: 'plugin.highscorepullrefresh',
	
	config: {
       refreshFn: function() {
            var me = this,
                store = me.getList().getStore();

            if (store) {
                // reset store and load first page
                store.loadPage(1, {
                    addRecords: false
                });
            }
        }
	}
});