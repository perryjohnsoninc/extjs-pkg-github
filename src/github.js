//
// https://developer.github.com/v3/
// https://developer.github.com/v3/issues/
//

Ext.define('Ext.ux.GitHub', 
{
    singleton: true,
    alias: 'GitHubApi',
    alternateClassName: 'GitHubApi',

    user: null,
    repository: null,
    logger: null,

    createIssue: function()
    {
        var me = this;

        if (!me.repository) {
            if (me.logger) {
                me.logger.error("Invalid repository");
            }
            return;
        }
    },

    createRelease: function(tag)
    {
        var me = this;

        if (!me.repository) {
            if (me.logger) {
                me.logger.error("Invalid repository");
            }
            return;
        }
    },

    getIssues: function()
    {
        var me = this;

        if (!me.repository) {
            if (me.logger) {
                me.logger.error("Invalid repository");
            }
            return;
        }

        var header = {
            
        };

        var url = "https://api.github.com/repos/" + me.user + "/" + me.repository + "/issues";

        Ext.Ajax.request(
        {
            url: url,
            scope: this,
            success: function(response, options)
            {
                var jso;
                try {
                    jso = Ext.util.JSON.decode(response.responseText);
                } 
                catch(e) {
                    Ext.Msg.alert("An error occurred decoding the response data");
                    return;
                }
                if (!jso) {
                    
                }
            },
            failure: function(response, options)
            {
                Ext.Msg.alert("Could not retrieve facility information");
            },
            headers:
            {
                "Accept": "application/vnd.github.v3+json",
                "mediaTypeVersion": "v3",
                "squirrelAcceptHeader": "application/vnd.github.squirrel-girl-preview",
                "symmetraAcceptHeader": "application/vnd.github.symmetra-preview+json",
                "previewAcceptHeader": "application/vnd.github.machine-man-preview",
                "Authorization": "token ${Env:GITHUB_TOKEN}",
                "Content-Type": "application/json; charset=UTF-8"
            },
            params: 
            {
                
            }
        });
        //$Response = Invoke-RestMethod $url -UseBasicParsing -Method POST -Body $Request -Headers $Header
        
    },

    uploadAssets: function(tag, assets)
    {
        var me = this;

        if (!me.repository) {
            if (me.logger) {
                me.logger.error("Invalid repository");
            }
            return;
        }
    }
    
});
